// components/CityTab.tsx
"use client";
import React, { useState } from 'react';
import PreviewCanvas from './PreviewCanvas';
import RealTimeGraph from './RealTimeGraph';
import HelpTooltip from './HelpTooltip';

export default function CityTab({
  city = 'City',
  baseImg,
  predImg,
  inputs,
  onChange
}:{
  city?: string;
  baseImg?: string;
  predImg?: string;
  inputs: any;
  onChange: (k:string, v:any)=>void;
}){
  const [sub, setSub] = useState<'ai'|'mc'|'preset'>('ai');

  // Create mock series data from inputs to feed graphs
  const time = Date.now();
  const seriesA = Array.from({length:28}).map((_,i)=>({ x: i, y: Math.max(0, (inputs.co2||50) + (i-14) * 0.5 + (inputs.ren? - (inputs.ren/100)*10 : 0)) }));
  const seriesB = Array.from({length:28}).map((_,i)=>({ x: i, y: Math.max(0, (inputs.def||40) + Math.sin(i/4) * 6 - (inputs.reforest_int||0)/10) }));

  return (
    <div>
      <div style={{display:'flex', gap:8, marginBottom:8}}>
        <div className={`subtab ${sub==='ai'?'active':''}`} onClick={()=>setSub('ai')}>AI Suggestions</div>
        <div className={`subtab ${sub==='mc'?'active':''}`} onClick={()=>setSub('mc')}>Monte Carlo</div>
        <div className={`subtab ${sub==='preset'?'active':''}`} onClick={()=>setSub('preset')}>Preset Scenarios</div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 320px', gap:12}}>
        <div>
          <div style={{display:'flex', gap:10}}>
            <div style={{flex:1}}>
              <label>Current satellite view — {city}</label>
              <div style={{position:'relative'}}>
                <img src={baseImg} style={{width:'100%', borderRadius:10}} alt={`${city} current`} />
                <div style={{position:'absolute', right:8, top:8}} className="pill">Now</div>
              </div>
            </div>
            <div style={{width:320}}>
              <label>Predicted — {city}</label>
              <div style={{position:'relative'}}>
                <img src={predImg} style={{width:'100%', borderRadius:10}} alt={`${city} pred`} />
                <div style={{position:'absolute', right:8, top:8}} className="pill">Projected</div>
              </div>
            </div>
          </div>

          <div style={{marginTop:12}}>
            <RealTimeGraph title="CO₂ Projection" data={seriesA} />
            <div style={{height:8}} />
            <RealTimeGraph title="Deforestation Pressure" color="#ffd265" data={seriesB} />
          </div>
        </div>

        <aside className="card">
          <div style={{fontSize:13, color:'var(--muted)'}}>
            <strong>{city} tools</strong>
            <div style={{marginTop:8}}>
              {sub==='ai' && (<div>
                <div className="muted-block">AI suggestions tailor interventions for local conditions.</div>
                <div style={{marginTop:8}}><button className="gaia-btn primary" onClick={()=>alert('AI suggestion (demo) applied')}>Apply AI Suggestion</button></div>
              </div>)}

              {sub==='mc' && (<div>
                <div className="muted-block">Run Monte Carlo simulations for {city} to estimate outcome ranges.</div>
                <div style={{display:'flex', gap:8, marginTop:8}}>
                  <input defaultValue={40} type="number" style={{width:90,padding:8,borderRadius:8}} />
                  <button className="gaia-btn primary" onClick={()=>alert('Run MC demo')}>Run</button>
                </div>
              </div>)}

              {sub==='preset' && (<div>
                <div className="muted-block">Apply preset scenarios tuned for {city} (urban density, coastal exposure).</div>
                <div style={{display:'flex', gap:8, marginTop:8, flexWrap:'wrap'}}>
                  <button className="gaia-btn ghost" onClick={()=>alert('Applied urban preset')}>Urban Stress</button>
                  <button className="gaia-btn ghost" onClick={()=>alert('Applied coastal preset')}>Coastal Risk</button>
                </div>
              </div>)}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
