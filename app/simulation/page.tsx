// app/simulation/page.tsx
'use client';
import React from 'react';
import Header from '../../components/Header';
import GaiaLink from '../../components/GaiaLink';
import PreviewCanvas from '../../components/PreviewCanvas';
import SymbioSphere from '../../components/SymbioSphere';
import Nexus from '../../components/Nexus';
import HelpTooltip from '../../components/HelpTooltip';
import Chatbot from '../../components/Chatbot';
import useGaiaSimulation from '../../lib/useGaiaSimulation';
import useGaiaState from '../../lib/useGaiaState';

export default function SimulationPage(){
  const { result } = useGaiaSimulation(); // quick hook use to pass result to Nexus & preview if needed
  const { state, loading, refresh } = useGaiaState();

  function hexToRgba(hex: string, alpha = 0.18) {
    if (!hex) return `rgba(255,100,0,${alpha})`;
    let h = hex.replace('#', '');
    if (h.length === 3) h = h.split('').map((c) => c + c).join('');
    const num = parseInt(h, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return (
    <div className="wrap">
      <Header onTabChange={()=>{}} />
      <main className="grid">
        <section style={{display:'flex', flexDirection:'column', gap:12}}>
          <GaiaLink />
          <SymbioSphere />
        </section>
        <aside className="card" style={{display:'flex', flexDirection:'column'}}>
          <h3 style={{marginTop:0}}>Visual Preview — “Future Earth”</h3>
          <div className="muted">High-resolution satellite imagery with predictive climate overlay</div>
          <div style={{display:'flex', flexDirection:'column', gap:10, alignItems:'center', marginTop:10}}>
            <div style={{position:'relative', width:'100%', maxWidth:800}}>
              <img id="earthBase" src="https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57730/land_ocean_ice_2048.jpg" alt="Earth current state" style={{width:'100%',borderRadius:12,border:'1px solid rgba(255,255,255,0.1)', objectFit:'cover',display:'block'}} />
              <div className="pill" style={{position:'absolute', left:8, top:8}}>Current State</div>
            </div>
            <div style={{position:'relative', width:'100%', maxWidth:800}}>
              <img id="earthPred" src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg" alt="Projected Earth state" style={{width:'100%',borderRadius:12,border:'1px solid rgba(255,255,255,0.1)',objectFit:'cover',display:'block'}} />
              <div id="predTag" className="pill" style={{position:'absolute', right:8, top:8}}>{state?.gaia_link?.delta_temp ? `Projected +${state.gaia_link.delta_temp}°C` : 'Projected +2°C'}</div>
              <div id="predTint" style={{position:'absolute', inset:0, pointerEvents:'none', borderRadius:12, background: state?.earth_tint ? hexToRgba(state.earth_tint, 0.18) : 'rgba(255, 100, 0, 0.15)'}} />
            </div>
            <div style={{width:'100%', maxWidth:800, display:'flex', justifyContent:'flex-end'}}>
              <button className="gaia-btn" onClick={() => refresh()} disabled={loading} style={{marginTop:8}}>{loading ? 'Refreshing…' : 'Refresh GAIA State'} <HelpTooltip title="Refresh GAIA State">Updates the global state with the latest simulation results from other modules.</HelpTooltip></button>
            </div>
          </div>

          <div style={{marginTop:12}}>
            <h4 style={{margin:'6px 0 8px'}}>Scenario Impact</h4>
            <div className="muted-block" id="detailList">Run "Simulate Now" to generate the full predicted breakdown (temperature drift, biodiversity loss, sea-level rise, and intervention effectiveness).</div>
          </div>

          <PreviewCanvas index={result?.index} />
        </aside>
      </main>

      <div style={{marginTop:18}}>
        <Nexus result={result} />
      </div>

      <div className="footer">Demo build — client-only. For full realism you'd replace the preview images + add real satellite APIs & a simulation backend. © GAIA</div>

      <Chatbot />
    </div>
  );
}
