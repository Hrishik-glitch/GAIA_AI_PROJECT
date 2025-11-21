// lib/useLastSimulation.ts
'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function useLastSimulation() {
  const [lastResult, setLastResult] = useState<any>(null);
  const [lastAnalysis, setLastAnalysis] = useState<string>('');
  const [scenarios, setScenarios] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLastSimulation();
  }, []);

  async function fetchLastSimulation() {
    try {
      const { data: state } = await supabase
        .from('gaia_state_cache')
        .select('merged_state, ai_summary, last_scenario_id')
        .eq('id', 1)
        .single();

      if (state?.merged_state) {
        setLastResult(state.merged_state);
        setLastAnalysis(state.ai_summary || '');
      }
    } catch (err) {
      console.error('Failed to fetch last simulation:', err);
    } finally {
      setLoading(false);
    }
  }

  async function fetchScenarios() {
    try {
      const { data } = await supabase
        .from('scenarios')
        .select('id, inputs_json, result_json, ai_analysis, created_at')
        .order('created_at', { ascending: false })
        .limit(20);

      setScenarios(data || []);
    } catch (err) {
      console.error('Failed to fetch scenarios:', err);
    }
  }

  async function loadScenario(id: number) {
    try {
      const { data } = await supabase
        .from('scenarios')
        .select('*')
        .eq('id', id)
        .single();

      if (data?.result_json) {
        setLastResult(data.result_json);
        setLastAnalysis(data.ai_analysis || '');
      }
    } catch (err) {
      console.error('Failed to load scenario:', err);
    }
  }

  return {
    lastResult,
    lastAnalysis,
    scenarios,
    loading,
    fetchLastSimulation,
    fetchScenarios,
    loadScenario
  };
}
