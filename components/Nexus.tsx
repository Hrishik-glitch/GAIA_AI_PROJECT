'use client';
import React, { useEffect, useMemo, useState } from 'react';
import useGaiaState from '@/lib/useGaiaState';
import EarthPreview from './EarthPreview';
import Filament from './Filament';

/**
 * Nexus.tsx — city-scoped Nexus panel
 *
 * - activeCity: "Global" | "Delhi" | "Mumbai" | "Darjeeling"
 * - Reads symbio observations from localStorage ('gaia_obs') but restricts to allowed cities
 * - Uses CITY_SENSITIVITY to adjust index responsiveness per-city
 * - Determines tint/risk/index per-city (falling back to global GAIA state or passed result)
 * - Passes city-specific props to Filament (pattern, color, vibration, complexity)
 *
 * Note: If you have other places writing to localStorage('gaia_obs'), ensure they store objects
 * with { loc: "Global"|"Delhi"|"Mumbai"|"Darjeeling", type, level, note, vibration? } or use provided helper.
 */

const ALLOWED_LOCATIONS = ['Global', 'Delhi', 'Mumbai', 'Darjeeling'] as const;
type City = typeof ALLOWED_LOCATIONS[number];

const CITY_SENSITIVITY: Record<City, number> = {
  Global: 0.45,      // stable
  Delhi: 1.25,       // most reactive
  Mumbai: 1.1,       // medium
  Darjeeling: 0.95   // slightly reactive
};

// default fallback if GAIA global state doesn't contain city entries
function clamp(v:number, a=0, b=100){ return Math.max(a, Math.min(b, v)); }

export default function Nexus({ result }: { result?: any }) {
  const { state, loading, refresh } = useGaiaState();

  const [activeCity, setActiveCity] = useState<City>('Global');
  const [symbioSummary, setSymbioSummary] = useState<string>('');
  const [symbioDetails, setSymbioDetails] = useState<string>('');
  const [citySymbio, setCitySymbio] = useState<any[]>([]);

  // Load and filter observations for the active city
  useEffect(() => {
    try {
      const raw = JSON.parse(localStorage.getItem('gaia_obs') || '[]');
      // keep only allowed locations, and group by loc
      const filtered = Array.isArray(raw) ? raw.filter((o:any)=>{
        return o && typeof o.loc === 'string' && ALLOWED_LOCATIONS.includes(o.loc);
      }) : [];
      setCitySymbio(filtered);
    } catch (e) {
      setCitySymbio([]);
    }
  }, []);

  // When activeCity changes, compute summary & details from observations limited to this city
  useEffect(() => {
    try {
      const raw = JSON.parse(localStorage.getItem('gaia_obs') || '[]');
      const filtered = (Array.isArray(raw) ? raw : []).filter((o:any) => o && o.loc === activeCity);

      if (filtered.length === 0) {
        setSymbioSummary('');
        setSymbioDetails('');
        return;
      }

      const criticalCount = filtered.filter((o:any) => o.level === 'critical').length;
      const concernCount = filtered.filter((o:any) => o.level === 'concern').length;
      const goodCount = filtered.filter((o:any) => o.level === 'excellent' || o.level === 'good').length;
      const categories = [...new Set(filtered.map((o:any) => o.type))];

      const observationDetails = filtered.slice().reverse().map((o:any) => {
        return `${o.type} (${o.level}) — ${o.note || 'no note'}`;
      }).join(' | ');

      const summary = `${filtered.length} observations for ${activeCity}: ${goodCount} positive, ${concernCount} concerns, ${criticalCount} critical. Categories: ${categories.join(', ')}`;
      setSymbioSummary(summary);
      setSymbioDetails(observationDetails);
    } catch (e) {
      setSymbioSummary('');
      setSymbioDetails('');
    }
  }, [activeCity]);

  // helper: get the latest numeric symbiosis index for the city from GAIA state if present
  function getCityIndexFromState(city:City) {
    // Expected optional shape: state.city_gaia = { Global: { index,...}, Delhi: {...}, ... }
    if (!state || loading) return undefined;
    try {
      const cityData = (state.city_gaia && state.city_gaia[city]) ?? null;
      if (cityData && typeof cityData.index === 'number') return cityData.index;
      // fallback to global gaia_link merged state (if it contains city entries)
      if (state.gaia_link && typeof state.gaia_link.index === 'number') return state.gaia_link.index;
    } catch {}
    return undefined;
  }

  // compute the active index using priority: city-specific GAIA state -> local result prop -> default 50
  const baseIndex = useMemo(() => {
    const stateIndex = getCityIndexFromState(activeCity);
    if (typeof stateIndex === 'number') return clamp(stateIndex);
    if (result && typeof result.index === 'number') return clamp(result.index);
    if (state && state.gaia_link && typeof state.gaia_link.index === 'number') return clamp(state.gaia_link.index);
    return 50;
  }, [activeCity, state, loading, result]);

  const sensitivity = CITY_SENSITIVITY[activeCity];
  // Sensitivity is applied softly: weightedAverage(baseIndex, baseIndex*sensitivity, factor)
  // We only lightly nudge the index to avoid wild jumps; global is more inert.
  const idx = useMemo(() => {
    // Apply soft sensitivity multiplier but dampen by factor to avoid explosions
    const damp = activeCity === 'Global' ? 0.35 : 0.85; // global much more damped
    const adjusted = baseIndex * (1 + (sensitivity - 1) * damp);
    return clamp(Math.round(adjusted * 100)/100, 0, 100);
  }, [baseIndex, activeCity]);

  // The threat/recovery bar values (0-100)
  const threat = Math.max(0, 100 - idx);
  const recovery = idx;

  // compute tint color by index (red/orange/green), but also allow GAIA's provided tint as possible overlay
  function getTintForIndex(index?: number, gaiaTint?: string) {
    const i = typeof index === 'number' ? index : 50;
    if (i < 40) return 'rgba(255,70,70,0.32)';      // red
    if (i < 70) return 'rgba(255,165,60,0.30)';     // orange
    return 'rgba(45,232,167,0.28)';                 // green
  }

  const gaiaRisk = !loading && state?.risk != null ? state.risk : undefined;
  // allow state-provided tint but we override with index range for predictability
  const gaiaTint = getTintForIndex(idx, state?.earth_tint);

  // Prepare Filament "symbio signal" based on observations for the activeCity
  const symbioForCity = useMemo(() => {
    try {
      const raw = JSON.parse(localStorage.getItem('gaia_obs') || '[]');
      return (Array.isArray(raw) ? raw : []).filter((o:any) => o && o.loc === activeCity);
    } catch {
      return [];
    }
  }, [activeCity]);

  // derive symbio signal: vibration average, flux/severity score etc.
  const symbioSignal = useMemo(() => {
    if (!Array.isArray(symbioForCity) || symbioForCity.length === 0) {
      return { vibration: 0.5, flux: 0.2, severity: 0 };
    }
    const severityScore = symbioForCity.reduce((acc:any, o:any) => {
      const lvl = o.level === 'critical' ? 3 : o.level === 'concern' ? 2 : 1;
      return acc + lvl;
    }, 0) / (symbioForCity.length * 3);
    // vibration stronger if more criticals + sensitivity
    const vibration = clamp(0.4 + severityScore * 1.8 * CITY_SENSITIVITY[activeCity], 0.1, 2.5);
    const flux = clamp(0.1 + severityScore * 1.5, 0, 2);
    return { vibration, flux, severity: severityScore };
  }, [symbioForCity, activeCity]);

  // Helper to return interpretation text scoped to city
  function buildInterpretation() {
    const lines: string[] = [];
    lines.push(`Nexus Analysis for ${activeCity}`);
    lines.push(`The filaments visualize the dynamic web of symbiotic connections and energy flows within the planetary ecosystem. Their patterns, colors, and movements reflect real-time data from SymbioSphere observations and GaiaLink environmental metrics, indicating the health and stress levels of human-environment interactions.`);
    lines.push(`Symbiosis Summary: The symbiosis index measures the balance between human activities and planetary health. At ${idx.toFixed(1)}/100, the system is ${idx > 65 ? 'stable and harmonious' : idx > 40 ? 'tense with moderate stress' : 'highly stressed and imbalanced'}. This reflects the overall resilience and recovery potential of ${activeCity}'s ecosystem.`);
    if (state?.symbio_analysis?.summary) lines.push(`Latest SymbioSphere Report Summary: ${state.symbio_analysis.summary}`);
    lines.push(`Key Metrics:`);
    lines.push(`- Symbiosis Index: ${idx.toFixed(1)}/100 (${idx > 65 ? 'Stable' : idx > 40 ? 'Tense' : 'Stressed'})`);
    lines.push(`- Threat Level: ${threat.toFixed(0)}% | Recovery Potential: ${recovery.toFixed(0)}%`);
    if (symbioSummary) lines.push(`Observations: ${symbioSummary}`);
    if (symbioDetails) lines.push(`Latest Details: ${symbioDetails}`);
    if (state?.mood) lines.push(`GAIA Mood: ${state.mood}`);
    if (state?.symbio_analysis?.recommended_interventions && state.symbio_analysis.recommended_interventions.length > 0) {
      lines.push(`SymbioSphere Recommended Interventions: ${state.symbio_analysis.recommended_interventions.join(', ')}`);
    }
    // add recommended action short hint (simple heuristic)
    lines.push(`Recommendations:`);
    if (idx < 40) {
      lines.push('- Urgent local mitigation: Implement immediate emissions cuts, emergency pollution controls, and temporary shutdowns of major pollution sources.');
    } else if (idx < 70) {
      lines.push('- Accelerate sustainable practices: Expand renewables, conduct targeted reforestation, and enforce stricter pollution regulations.');
    } else {
      lines.push('- Maintain and enhance: Focus on building resilience, supporting biodiversity, and monitoring long-term sustainability.');
    }
    return lines.join('\n\n');
  }

  const interpretationText = useMemo(() => buildInterpretation(), [idx, threat, recovery, symbioSummary, symbioDetails, state?.mood, activeCity]);

  // small helper: ensure observation saved only if location allowed (callable by other modules)
  function saveObservationRestricted(obs: any) {
    if (!obs || !obs.loc || typeof obs.loc !== 'string') throw new Error('Invalid observation shape');
    if (!ALLOWED_LOCATIONS.includes(obs.loc)) throw new Error('Observation location not allowed. Allowed: Global, Delhi, Mumbai, Darjeeling');
    const raw = JSON.parse(localStorage.getItem('gaia_obs') || '[]');
    raw.push(obs);
    localStorage.setItem('gaia_obs', JSON.stringify(raw));
  }

  return (
    <div style={{display:'flex',flexDirection:'column',gap:12}}>
      {/* City Tabs (now includes Global) */}
      <div style={{display:'flex', gap:8, marginBottom:8}}>
        {ALLOWED_LOCATIONS.map((loc) => (
          <div key={loc} className={`subtab ${activeCity === loc ? 'active' : ''}`} onClick={() => setActiveCity(loc as City)}>{loc}</div>
        ))}
      </div>

      {/* Top Section */}
      <div style={{display:'flex',gap:12,alignItems:'flex-start'}}>
        <div style={{flex:1}}>
          {/* Filament receives city, index, symbioSignal & city-specific tint */}
          <Filament
            city={activeCity}
            index={idx}
            tint={gaiaTint}
            symbioSignal={symbioSignal}
          />

          {/* Threat vs Recovery Bar */}
          <div style={{marginTop:12, background:'rgba(255,255,255,0.02)', padding:12, borderRadius:10}}>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom:6}}>
              <div className="muted-block">Threat vs Recovery ({activeCity})</div>
              <div className="pill" style={{fontSize:11}}>{threat.toFixed(0)} / {recovery.toFixed(0)}</div>
            </div>

            <div style={{display:'flex', height:24, gap:2, borderRadius:6, overflow:'hidden', background:'rgba(0,0,0,0.2)'}}>
              <div style={{
                flex: threat,
                background: threat > 50 ? 'linear-gradient(90deg, #ff4444, #ff6b6b)' : threat > 25 ? 'linear-gradient(90deg, #ffa500, #ffb84d)' : 'linear-gradient(90deg, #ff9999, #ffcccc)',
                transition: 'all 0.3s ease',
                borderRadius: threat > 0 ? '6px 0 0 6px' : 0,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:10,
                color:'rgba(255,255,255,0.7)',
                fontWeight:600
              }}>
                {threat > 10 && `${threat.toFixed(0)}%`}
              </div>

              <div style={{
                flex: recovery,
                background: recovery > 70 ? 'linear-gradient(90deg, #2de8a7, #20e07a)' : recovery > 40 ? 'linear-gradient(90deg, #56c8ff, #3ad1ff)' : 'linear-gradient(90deg, #ff9f6b, #ffc46a)',
                transition: 'all 0.3s ease',
                borderRadius: recovery > 0 ? '0 6px 6px 0' : 0,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:10,
                color:'rgba(255,255,255,0.9)',
                fontWeight:600
              }}>
                {recovery > 10 && `${recovery.toFixed(0)}%`}
              </div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between', marginTop:4, fontSize:11}}>
              <span className="muted">Stress</span>
              <span className="muted">Stability</span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div style={{width:300}}>
          {/* Earth Preview — pass color/tint and city label */}
          <div style={{background:'rgba(255,255,255,0.02)', padding:12, borderRadius:10, textAlign:'center', marginBottom:12}}>
            <div className="muted-block">Earth State — {activeCity}</div>
            <div style={{marginTop:8, display:'flex', justifyContent:'center'}}>
              <EarthPreview size={140} tint={gaiaTint} label={activeCity} />
            </div>
          </div>

          <div style={{background:'rgba(255,255,255,0.02)', padding:10, borderRadius:10}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div className="pill" id="nexusMoodTag">
                {state && !loading ? (
                  state.mood || (idx > 65 ? 'Harmonic' : idx > 40 ? 'Tense' : 'Stressed')
                ) : (
                  result ? (result.index > 65 ? 'Harmonic' : result.index > 40 ? 'Tense' : 'Stressed') : '—'
                )}
              </div>
              <div style={{flex:1}}>
                <div className="muted-block">Symbiosis index</div>
                <div id="nexusIndex" style={{fontWeight:700,fontSize:22}}>
                  {idx.toFixed(0)}
                </div>
              </div>
            </div>

            <div style={{display:'flex', gap:8, marginTop:8, alignItems:'center'}}>
              <div className="muted-block">Risk</div>
              <div className="pill" style={{fontSize:12}}>
                {gaiaRisk ? (gaiaRisk * 100).toFixed(0) + '%' : (result?.risk ?? '—')}
              </div>

              <div style={{marginLeft:'auto', display:'flex', alignItems:'center', gap:8}}>
                <div className="muted-block">Tint</div>
                <div style={{width:22,height:22,borderRadius:6,background:gaiaTint,border:'1px solid rgba(255,255,255,0.06)'}} />
              </div>
            </div>

            <div style={{marginTop:8}}>
              <div className="muted-block">Timeline</div>
              <input id="timeSlider" type="range" min={0} max={100} defaultValue={100} />
              <div style={{display:'flex', gap:8, marginTop:8}}>
                <button className="gaia-btn primary" id="recompute" onClick={() => { /* noop for now — can trigger refresh or recompute */ alert('Recompute triggered'); }}>Recompute Visuals</button>
                <button className="gaia-btn ghost" onClick={() => refresh()} disabled={loading}>{loading ? 'Syncing...' : 'Sync GAIA State'}</button>
                <button className="gaia-btn ghost" id="exportPNG" onClick={()=>{ alert('Export PNG not available'); }}>Export PNG</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full width interpretation */}
      <div style={{background:'rgba(255,255,255,0.02)', padding:12, borderRadius:10}}>
        <div className="muted-block">Interpretation</div>
        <div id="nexusText" style={{marginTop:8, fontSize:13, lineHeight:1.6, whiteSpace:'pre-line'}}>
          {interpretationText}
        </div>
      </div>
    </div>
  );
}
