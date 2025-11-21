// lib/useGaiaSimulation.ts
'use client';
import { useCallback, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default function useGaiaSimulation() {
  const [inputs, setInputs] = useState<any>({
    co2: 40,
    def: 20,
    ren: 55,
    pol: 35,
    pop: 20,
    airweaver: false,
    airweaver_int: 40,
    algae: false,
    algae_int: 30,
    cryo: false,
    cryo_int: 20,
    biosynth: false,
    biosynth_int: 10,
    reforest: false,
    reforest_int: 30,
    ccapture: false,
    ccapture_int: 25,
    transport: false,
    transport_int: 40,
    urbangreen: false,
    urbangreen_int: 30
  });
  const [method, setMethod] = useState<'manual'|'preset'|'mc'|'ai'>('manual');
  const [result, setResult] = useState<any>(null);

  const clamp = (v:number, min:number, max:number) => Math.max(min, Math.min(max, v));

  // city modifiers map
  const CITY_MODIFIERS: Record<string, { pollutionSensitivity: number, tempMultiplier?: number }> = {
    Global: { pollutionSensitivity: 1.0, tempMultiplier: 1.0 },
    Delhi: { pollutionSensitivity: 1.25, tempMultiplier: 1.08 },
    Mumbai: { pollutionSensitivity: 1.10, tempMultiplier: 1.04 },
    Darjeeling: { pollutionSensitivity: 0.85, tempMultiplier: 0.95 }
  };

  // core compute but accepts a location string to apply modifiers
  const computeWithCity = useCallback((vals:any, location = 'Global') => {
    const co2 = clamp(vals.co2,0,100);
    const def = clamp(vals.def,0,100);
    const pop = clamp(vals.pop,-20,80);
    const ren = clamp(vals.ren,0,100);
    const pol = clamp(vals.pol,0,100);

    const interventions = {
      airweaver: vals.airweaver ? clamp(vals.airweaver_int,0,100):0,
      algae: vals.algae ? clamp(vals.algae_int,0,100):0,
      cryo: vals.cryo ? clamp(vals.cryo_int,0,100):0,
      biosynth: vals.biosynth ? clamp(vals.biosynth_int,0,100):0,
      reforest: vals.reforest ? clamp(vals.reforest_int,0,100):0,
      ccapture: vals.ccapture ? clamp(vals.ccapture_int,0,100):0,
      transport: vals.transport ? clamp(vals.transport_int,0,100):0,
      urbangreen: vals.urbangreen ? clamp(vals.urbangreen_int,0,100):0
    };

    const mod = CITY_MODIFIERS[location] || CITY_MODIFIERS.Global;
    const pollSens = mod.pollutionSensitivity || 1.0;

    // apply modifiers when computing penalties
    const p_co2 = co2 * 0.32 * pollSens;
    const p_def = def * 0.22 * pollSens;
    const p_pop = (pop>0?pop:0) * 0.10;
    const base_positive = ren * 0.28 + pol * 0.18;

    function eff(x:number, weight:number){
      return weight * (0.2 + 0.8 * Math.tanh(x/120 * 2.5));
    }
    const iv = interventions;
    const interventionScore =
      eff(iv.airweaver, 18) + eff(iv.algae, 12) + eff(iv.cryo, 10) +
      eff(iv.biosynth, 10) + eff(iv.reforest, 24) + eff(iv.ccapture, 16) +
      eff(iv.transport, 20) + eff(iv.urbangreen, 12);

    let raw = 50
      + (base_positive * 0.24)
      + (interventionScore * 0.5)
      - (p_co2 * 0.35)
      - (p_def * 0.28)
      - (p_pop * 0.4);

    if(co2 > 80) raw -= (co2-80)*0.35 * pollSens;
    if(def > 70) raw -= (def-70)*0.25 * pollSens;

    const index = Math.round(clamp(raw, 0, 100));
    // apply temp multiplier slightly affected by the city modifier
    const tempDrift = Number(((co2/100)*2.5 * (mod.tempMultiplier || 1.0) - (interventionScore/200)).toFixed(2));
    const biodiversity = Math.round(50 + (index-50)*0.6);
    const seaLevel = Number(((def/100)*0.15 + (co2/100)*0.1 - (iv.reforest? iv.reforest/100*0.02 : 0)).toFixed(3));

    return { index, tempDrift, biodiversity, seaLevel, interventionsApplied: interventions, city: location };
  }, []);

  // existing simulate wrapper uses computeWithCity('Global') by default previously — keep a local simulate that still computes locally,
  // but note runSimulation in GaiaLink will call server endpoints which also get `city`.
  const simulate = useCallback(() => {
    const r = computeWithCity(inputs, 'Global');
    setResult(r);
    localStorage.setItem('gaia_result', JSON.stringify(r));
    return r;
  }, [inputs, computeWithCity]);

  const applyAISuggestion = useCallback(() => {
    setInputs(prev => {
      const base = {...prev};
      if(base.co2 > 55){
        base.ren = clamp(base.ren + 25,0,100);
        base.ccapture = true; base.ccapture_int = 60;
        base.reforest = true; base.reforest_int = 45;
        base.transport = true; base.transport_int = 50;
      } else if(base.def > 50){
        base.reforest = true; base.reforest_int = 70;
        base.urbangreen = true; base.urbangreen_int = 40;
      } else {
        base.pol = clamp(base.pol + 20,0,100);
        base.urbangreen = true; base.urbangreen_int = 35;
      }
      return base;
    });
  }, []);

  const runMonteCarlo = useCallback((runs = 40) => {
    const results:number[] = [];
    for(let i=0;i<runs;i++){
      const base = JSON.parse(JSON.stringify(inputs));
      ['co2','def','ren','pol','pop'].forEach((k:any)=> {
        const jitter = (Math.random()*0.5 - 0.25);
        base[k] = clamp(Math.round(base[k] * (1 + jitter)), -20, 100);
      });
      ['airweaver','algae','cryo','biosynth','reforest','ccapture','transport','urbangreen'].forEach((k:any)=>{
        if(base[k]) base[k+'_int'] = clamp(Math.round(base[k+'_int'] * (0.6 + Math.random()*0.9)), 0, 100);
        else if(Math.random() < 0.08) { base[k+'_int'] = Math.round(Math.random()*60); base[k]=true; }
      });
      // run Monte Carlo using Global local compute for distribution; caller can specify city-run if desired.
      const r = computeWithCity(base, 'Global');
      results.push(r.index);
    }
    const avg = Math.round(results.reduce((a,b)=>a+b,0)/results.length);
    const baseComputed = computeWithCity(inputs, 'Global');
    baseComputed.index = avg;
    setResult(baseComputed);
    localStorage.setItem('gaia_result', JSON.stringify(baseComputed));
    return baseComputed;
  }, [inputs, computeWithCity]);

  useEffect(()=> {
    const raw = localStorage.getItem('gaia_result');
    if(raw) setResult(JSON.parse(raw));
  }, []);

  // saveScenario now accepts optional location and persists to Supabase with `location` column
  const saveScenario = useCallback(async (name:string, location?: string) => {
    const s = JSON.parse(localStorage.getItem('gaia_scenarios') || '[]');
    const payload = { name, vals: inputs, created: Date.now(), location: location || 'Global' };
    s.push(payload);
    localStorage.setItem('gaia_scenarios', JSON.stringify(s));

    // attempt remote save
    try {
      const prepared = {
        name,
        inputs_json: inputs,
        result_json: result || computeWithCity(inputs, location || 'Global'),
        ai_analysis: null,
        location: location || 'Global',
        created_at: new Date().toISOString()
      };
      const { error } = await supabase
        .from('scenarios')
        .insert([prepared]);

      if (error) {
        console.warn('Supabase insert (saveScenario) returned error:', error);
        throw error;
      }
      return true;
    } catch (err) {
      console.error('saveScenario remote failed:', err);
      console.error('Error details:', JSON.stringify(err, null, 2));
      throw err;
    }
  }, [inputs, result, computeWithCity]);

  const loadScenarioList = useCallback(()=> {
    return JSON.parse(localStorage.getItem('gaia_scenarios') || '[]');
  }, []);

  return {
    inputs, setInputs, method, setMethod, result,
    simulate, applyAISuggestion, runMonteCarlo, saveScenario, loadScenarioList,
    setResult, computeWithCity
  };
}
