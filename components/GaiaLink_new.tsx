// components/GaiaLink.tsx
'use client';
import React, { useEffect, useState } from 'react';
import useGaiaSimulation from '../lib/useGaiaSimulation';
import useLastSimulation from '../lib/useLastSimulation';
import Gauge from './Gauge';
import PreviewCanvas from './PreviewCanvas';


export default function GaiaLink(){
  const {
    inputs, setInputs, method, setMethod, result,
    simulate, applyAISuggestion, runMonteCarlo, saveScenario, setResult
  } = useGaiaSimulation();

  const { lastResult, lastAnalysis, scenarios, loading, fetchScenarios, loadScenario } = useLastSimulation();
  const [scenarioName, setScenarioName] = useState('');
  const [showScenarioList, setShowScenarioList] = useState(false);
  const [displayedAnalysis, setDisplayedAnalysis] = useState('');

  useEffect(() => {
    // Load last simulation on mount
    if (lastResult) {
      setResult(lastResult);
      setDisplayedAnalysis(lastAnalysis);
    }
  }, [lastResult, lastAnalysis]);

  useEffect(()=> {
    // reflect last result into gauge if present
    if(result){
      // nothing extra here; Gauge reads prop
    }
  }, [result]);

  function handleInputChange(k:string, v:any){
    setInputs((p:any)=>({ ...p, [k]: v }));
  }

  function onSimClick(){
    if(method === 'preset'){ alert('Pick a preset (buttons below)'); return; }
    if(method === 'mc'){ runMonteCarlo(+ (document.getElementById('mcRuns') as HTMLInputElement)?.value || 40); return; }
    if(method === 'ai'){ applyAISuggestion(); alert('AI suggestion applied — now run Simulate.'); return; }
    runSimulation();
  }

  async function runSimulation() {
    try {
      const resp = await fetch('/api/simulate/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputs })
      });

      if (!resp.ok) {
        console.warn('/api/simulate/gemini failed, falling back to /api/simulate');
        throw new Error('gemini route failed');
      }

      const data = await resp.json();
      if (data?.result) {
        setResult(data.result);
        setDisplayedAnalysis(data.analysis || '');
        return;
      }

      console.warn('No result from gemini route, falling back');
    } catch (err) {
      try {
        const res = await fetch('/api/simulate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ inputs })
        });
        const data = await res.json();
        if (data?.result) {
          setResult(data.result);
          setDisplayedAnalysis(data.analysis || '');
        }
      } catch (err2) {
        console.error('Fallback /api/simulate failed', err2);
      }
    }
  }

  function applyPreset(which:string){
    if(which==='business'){
      setInputs((p:any)=>({ ...p, co2:65, def:50, ren:30, pol:30, pop:25,
        airweaver:false, algae:false, cryo:false, biosynth:false }));
    } else if(which==='greenrush'){
      setInputs((p:any)=>({ ...p, co2:40, def:25, ren:75, pol:70, pop:18, reforest:true, reforest_int:60, transport:true, transport_int:70 }));
    } else if(which==='radical'){
      setInputs((p:any)=>({ ...p, co2:25, def:10, ren:85, pol:85, pop:5,
        reforest:true, reforest_int:90, algae:true, algae_int:80, biosynth:true, biosynth_int:70, ccapture:true, ccapture_int:70 }));
    } else if(which==='tech-fix'){
      setInputs((p:any)=>({ ...p, co2:48, def:35, ren:50, pol:60, pop:20,
        airweaver:true, airweaver_int:80, cryo:true, cryo_int:60, ccapture:true, ccapture_int:80 }));
    }
    alert('Preset applied: ' + which);
  }

  async function askAISuggestion(){
    try{
      const res = await fetch('/api/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputs })
      });
      const data = await res.json();
      if(data?.suggestion){
        for(const k in data.suggestion){
          setInputs((prev:any)=>({ ...prev, [k]: data.suggestion[k] }));
        }
      } else {
        console.warn('No suggestion returned', data);
      }
    } catch(err){
      console.error('askAISuggestion failed', err);
    }
  }

  return (
    <section className="card" id="link">
      <h3 style={{marginTop:0}}>GAIA Link — Simulation Hub</h3>
      <div className="muted">Choose a simulation method, tweak levers, or let GAIA suggest optimal mix. Results update live and can be used by Nexus and SymbioSphere.</div>

      <div style={{marginTop:12}} className="subtabs">
        <div className={`subtab ${method==='manual'?'active':''}`} onClick={()=>setMethod('manual')} data-method="manual">Manual Sliders</div>
        <div className={`subtab ${method==='preset'?'active':''}`} onClick={()=>setMethod('preset')} data-method="preset">Preset Scenarios</div>
        <div className={`subtab ${method==='mc'?'active':''}`} onClick={()=>setMethod('mc')} data-method="mc">Monte-Carlo</div>
        <div className={`subtab ${method==='ai'?'active':''}`} onClick={()=>setMethod('ai')} data-method="ai">AI Suggestion</div>
      </div>

      {/* Manual */}
      {method === 'manual' && (
        <div id="method-manual" className="method-block">
          <div className="controls">
            <div>
              <label>CO₂ Emissions index</label>
              <input id="co2" type="range" min="0" max="100" value={inputs.co2} onChange={(e)=>handleInputChange('co2', +e.target.value)} />
              <div className="muted-block">Higher = more emissions.</div>
            </div>

            <div className="form-row" style={{gap:10}}>
              <div style={{flex:1}}>
                <label>Deforestation pressure</label>
                <input id="def" type="range" min="0" max="100" value={inputs.def} onChange={(e)=>handleInputChange('def', +e.target.value)} />
              </div>
              <div style={{flex:1}}>
                <label>Renewables adoption</label>
                <input id="ren" type="range" min="0" max="100" value={inputs.ren} onChange={(e)=>handleInputChange('ren', +e.target.value)} />
              </div>
            </div>

            <div className="form-row">
              <div style={{flex:1}}>
                <label>Pollution control & regulation</label>
                <input id="pol" type="range" min="0" max="100" value={inputs.pol} onChange={(e)=>handleInputChange('pol', +e.target.value)} />
              </div>
              <div style={{width:170}}>
                <label>Population growth</label>
                <input id="pop" type="range" min="-20" max="80" value={inputs.pop} onChange={(e)=>handleInputChange('pop', +e.target.value)} />
              </div>
            </div>

            <div className="divider" style={{height:1, background:'rgba(255,255,255,0.03)', margin:'6px 0'}} />

            <label style={{marginBottom:6}}>Advanced interventions (toggle + intensity)</label>
            <div className="toggle" style={{flexWrap:'wrap'}}>
              {[
                ['airweaver','AirWeaver Towers','airweaver_int'],
                ['algae','Algae Seeding','algae_int'],
                ['cryo','CryoSentinel/Reflective Cooling','cryo_int'],
                ['biosynth','BioSynth Loop Pods','biosynth_int'],
                ['reforest','Reforestation Campaign','reforest_int'],
                ['ccapture','Carbon Capture','ccapture_int'],
                ['transport','Transport Electrification','transport_int'],
                ['urbangreen','Urban Greening (roofs)','urbangreen_int']
              ].map(([id,label,intKey])=>(
                <div key={id} style={{minWidth:220}}>
                  <input type="checkbox" id={id} checked={!!inputs[id as any]} onChange={(e)=>handleInputChange(id as string, e.target.checked)} />
                  <label htmlFor={id as string} style={{display:'inline', color:'var(--muted)'}}> {label}</label>
                  <div style={{display:'flex', gap:6, marginTop:6}}>
                    <input id={`${id}_int`} type="range" min="0" max="100" value={inputs[intKey as any] || 0} onChange={(e)=>handleInputChange(intKey as string, +e.target.value)} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{display:'flex', gap:8, marginTop:10, alignItems:'center'}}>
              <button className="gaia-btn primary" id="simulateBtn" onClick={onSimClick}>Simulate Now</button>
              <button className="gaia-btn ghost" id="saveScenario" onClick={()=>{
                const name = prompt('Name this scenario (short):','My Scenario');
                if(!name) return;
                saveScenario(name); alert('Scenario saved locally.');
              }}>Save Scenario</button>
              <div style={{marginLeft:'auto'}} className="pill"><span id="lastMethod">Method: {method==='manual'?'Manual':method==='preset'?'Preset':method==='mc'?'MonteCarlo':'AI Suggest'}</span></div>
            </div>
          </div>
        </div>
      )}

      {/* Preset */}
      {method==='preset' && (
        <div id="method-preset" className="method-block">
          <label>Choose preset</label>
          <div style={{display:'flex', gap:8, flexWrap:'wrap', marginTop:8}}>
            <button className="gaia-btn ghost" onClick={()=>applyPreset('business')}>Business as Usual</button>
            <button className="gaia-btn ghost" onClick={()=>applyPreset('greenrush')}>Green Rush (fast renewables)</button>
            <button className="gaia-btn ghost" onClick={()=>applyPreset('radical')}>Radical Restoration</button>
            <button className="gaia-btn ghost" onClick={()=>applyPreset('tech-fix')}>Tech Fix</button>
          </div>
          <div className="muted-block" style={{marginTop:8}}>Presets set all levers to a recommended configuration.</div>
        </div>
      )}

      {/* Monte Carlo */}
      {method==='mc' && (
        <div id="method-mc" className="method-block">
          <label>Monte-Carlo samples</label>
          <div style={{display:'flex', gap:8, alignItems:'center', marginTop:8}}>
            <input id="mcRuns" type="number" min={10} max={200} defaultValue={40} style={{width:90,padding:8,borderRadius:8,border:'1px solid rgba(255,255,255,0.03)',background:'transparent',color:'var(--ink)'}} />
            <button className="gaia-btn primary" id="runMC" onClick={()=>{ const runs = +(document.getElementById('mcRuns') as HTMLInputElement).value || 40; runMonteCarlo(runs); }}>Run MC</button>
          </div>
          <div className="muted-block" style={{marginTop:8}}>This runs randomized interventions to show distribution of outcomes.</div>
        </div>
      )}

      {/* AI */}
      {method==='ai' && (
        <div id="method-ai" className="method-block">
          <label>AI Suggestion (heuristic)</label>
          <div className="muted-block">Heuristic suggests a balanced mix. (Demo: deterministic advice based on weak rules.)</div>
          <div style={{marginTop:8}}>
            <button className="gaia-btn primary" id="aiSuggest" onClick={async ()=>{
              await askAISuggestion();
              alert('AI Suggestion applied (server). Now run Simulate.');
            }}>Suggest Best Mix</button>
          </div>
        </div>
      )}

      <div style={{marginTop:12, display:'flex', gap:12, alignItems:'center'}}>
        <div className="gauge">
          <Gauge value={result?.index ?? '—'} />
        </div>
        <div style={{flex:1}}>
          <div className="muted-block">Last simulation summary</div>
          <div style={{marginTop:6}}>
            <div id="simSummary" className="pill">{ result ? `Symbiosis ${result.index} — ΔT: ${result.tempDrift}°C · Biodiversity ${result.biodiversity} · Sea level +${result.seaLevel} m` : 'Run a simulation to see a short summary.' }</div>
          </div>
        </div>
      </div>

      {/* Analysis Panel */}
      {displayedAnalysis && (
        <div style={{marginTop:12}} className="card">
          <strong>Last Analysis</strong>
          <div className="muted-block" style={{marginTop:6, maxHeight: 150, overflowY:'auto'}}>
            {displayedAnalysis.slice(0, 500)}...
          </div>
        </div>
      )}

      {/* Scenario History */}
      <div style={{marginTop:12}}>
        <button className="gaia-btn ghost" onClick={async ()=>{
          if(!showScenarioList) await fetchScenarios();
          setShowScenarioList(!showScenarioList);
        }}>
          {showScenarioList ? 'Hide' : 'Show'} Previous Scenarios ({scenarios.length})
        </button>

        {showScenarioList && scenarios.length > 0 && (
          <div style={{marginTop:8, maxHeight:200, overflowY:'auto', background:'rgba(255,255,255,0.02)', padding:8, borderRadius:8}}>
            {scenarios.map((s:any)=>(
              <div key={s.id} style={{padding:6, cursor:'pointer', marginBottom:4, background:'rgba(255,255,255,0.04)', borderRadius:6, fontSize:12}} onClick={()=>{
                loadScenario(s.id);
                setDisplayedAnalysis(s.ai_analysis || '');
                setShowScenarioList(false);
              }}>
                <strong>{new Date(s.created_at).toLocaleString()}</strong>
                <div className="muted-block">Index: {s.result_json?.index ?? '—'}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
