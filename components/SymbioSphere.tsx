// components/SymbioSphere.tsx
'use client';
import React, { useEffect, useState } from 'react';
import EarthPreview from './EarthPreview';
import HelpTooltip from './HelpTooltip';

export default function SymbioSphere(){
  const [obs, setObs] = useState<any[]>([]);
  useEffect(()=>{ setObs(JSON.parse(localStorage.getItem('gaia_obs') || '[]')) }, []);
  const [lastAnalysis, setLastAnalysis] = useState<string | null>(null);
  function saveObs(obj:any){
    const arr = JSON.parse(localStorage.getItem('gaia_obs') || '[]');
    const color = obj.level==='excellent'?'#20e07a':obj.level==='good'?'#56c8ff':obj.level==='neutral'?'#ffd265':obj.level==='concern'?'#ff9f6b':'#ff6b6b';
    arr.push(Object.assign({at:Date.now(), color}, obj));
    localStorage.setItem('gaia_obs', JSON.stringify(arr));
    setObs(arr);
    alert('Observation stored locally. (Demo only)');
  }
  async function submit(e:any){
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const type = (form.obsType as HTMLSelectElement).value;
    const loc = (form.obsLoc as HTMLInputElement).value || 'Unknown';
    if (!['Global', 'Delhi', 'Mumbai', 'Darjeeling'].includes(loc)) {
      alert('Invalid location for observation.');
      return;
    }
    const level = (form.obsLevel as HTMLSelectElement).value;
    const note = (form.obsNote as HTMLTextAreaElement).value;
    const fileInput = (form.obsPhoto as HTMLInputElement);

    // helper to read file as base64
    const readFileAsBase64 = (file:File) => new Promise<string>((resolve, reject)=>{
      const reader = new FileReader();
      reader.onload = (ev:any)=> resolve(ev.target.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    let photoBase64 = undefined;
    if(fileInput.files && fileInput.files[0]) {
      try{
        photoBase64 = await readFileAsBase64(fileInput.files[0]);
        saveObs({type, loc, level, note, photo: photoBase64});
      } catch(err){
        console.error('Failed to read photo', err);
        saveObs({type, loc, level, note});
      }
    } else {
      saveObs({type, loc, level, note});
    }

    // send to server and record extracted analysis
    try{
      await submitReport({ category: type, location: loc, level, note, photoBase64 });
    } catch(err){
      console.error('submitReport failed', err);
    }

    form.reset();
  }

  async function submitReport(form:any){
    const payload = {
      category: form.category,
      location: form.location,
      level: form.level,
      note: form.note,
      photo: form.photoBase64,
    };

    try{
      const res = await fetch('/api/symbiosphere/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      setLastAnalysis(json.extracted || null);
      return json;
    } catch(err){
      console.error('/api/symbiosphere/report failed', err);
      throw err;
    }
  }

  function resetData() {
    if (confirm('Are you sure you want to clear all observations? This cannot be undone.')) {
      localStorage.removeItem('gaia_obs');
      setObs([]);
      setLastAnalysis(null);
    }
  }
  return (
    <section id="symbio" className="card" style={{marginTop:18}}>
      <h3 style={{marginTop:0}}>SymbioSphere — Crowd Sensing</h3>
      <div style={{textAlign:'center', marginBottom:12}}>
        <EarthPreview size={100} />
      </div>
      <div className="muted">Submit qualitative observations. No numeric fields required — choose categories and levels; upload a photo if available.</div>
      <form id="obsForm" style={{marginTop:12, display:'grid', gap:10}} onSubmit={submit}>
        <div className="form-row">
          <select id="obsType" name="obsType" className="form-control">
            <option value="air">Air Quality / Smell</option>
            <option value="water">Water Condition (stream, shore)</option>
            <option value="wildlife">Wildlife / Biodiversity</option>
            <option value="waste">Waste / Littering</option>
            <option value="noise">Noise / Light Pollution</option>
            <option value="soil">Soil / Crop Health</option>
            <option value="tree">Tree Planting / Green works</option>
          </select>
          <input id="obsLoc" name="obsLoc" type="text" placeholder="Location (city / locality)" className="form-control" />
        </div>
        <div className="form-row">
          <select id="obsLevel" name="obsLevel" className="form-control">
            <option value="excellent">Excellent / Healthy</option>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="concern">Concern</option>
            <option value="critical">Critical / Emergency</option>
          </select>
          <input id="obsPhoto" name="obsPhoto" type="file" accept="image/*" className="file-control" />
        </div>
        <textarea id="obsNote" name="obsNote" placeholder="Describe what you observed (optional)..." className="form-control obs-note"></textarea>
        <div style={{display:'flex', gap:8}}>
          <button className="gaia-btn primary" id="submitObs" type="submit">Submit Observation <HelpTooltip title="Submit Observation">Saves your environmental observation locally and sends it to the server for analysis.</HelpTooltip></button>
          <button className="gaia-btn ghost" id="viewObs" type="button" onClick={()=>{ document.querySelector('.tab[data-tab=\"symbio\"]')?.dispatchEvent(new Event('click')) }}>View Live Feed <HelpTooltip title="View Live Feed">Switches to the live feed tab to see all submitted observations.</HelpTooltip></button>
          <button className="gaia-btn danger" type="button" onClick={resetData}>Reset All Data <HelpTooltip title="Reset All Data">Clears all stored observations from local storage.</HelpTooltip></button>
          <div style={{marginLeft:'auto'}} className="muted-block">Local demo only — observations stored in browser.</div>
        </div>
      </form>

      {lastAnalysis ? (
        <div style={{marginTop:12}} className="card">
          <strong>Last server analysis</strong>
          <div className="muted-block" style={{marginTop:6}}>
            {typeof lastAnalysis === 'string' ? lastAnalysis : JSON.stringify(lastAnalysis, null, 2)}
          </div>
        </div>
      ) : null}

      <div id="obsFeed" style={{marginTop:12, display:'grid', gap:8}}>
        {obs.slice().reverse().map((o:any, i:number)=>(
          <div key={i} style={{padding:10, borderRadius:8, background:'rgba(255,255,255,0.02)'}}>
            <div style={{display:'flex', gap:8, alignItems:'center'}}>
              <div style={{minWidth:6, height:36, background:o.color, borderRadius:4}}></div>
              <div style={{flex:1}}>
                <strong>{o.type} — {o.loc}</strong>
                <div className="muted-block">{o.level} · {new Date(o.at).toLocaleString()}</div>
              </div>
            </div>
            <div style={{marginTop:8}}>{o.note||''}</div>
            {o.photo ? <div style={{marginTop:8}}><img src={o.photo} style={{maxWidth:120, borderRadius:6}}/></div> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
