'use client';

import { useState } from 'react';
import { computeSymbiosis } from '../lib/computeSymbiosis';

export default function SimulationUI() {
  const [inputs, setInputs] = useState({
    co2: 40,
    def: 20,
    ren: 55,
    pol: 35,
    pop: 20,
  });
  const [result, setResult] = useState<any>(null);

  function handleChange(key: string, value: number) {
    setInputs((prev) => ({ ...prev, [key]: value }));
  }

  function simulate() {
    const res = computeSymbiosis(inputs);
    setResult(res);
  }

  return (
    <section
      style={{
        background: 'rgba(255,255,255,0.02)',
        padding: 20,
        borderRadius: 14,
        border: '1px solid rgba(255,255,255,0.04)',
        maxWidth: 900,
      }}
    >
      <h3 style={{ marginTop: 0 }}>GAIA Link — Simulation Hub</h3>
      <p style={{ color: '#9fb7d6', fontSize: 14 }}>
        Choose a simulation method, tweak levers, or let GAIA suggest an optimal mix.
      </p>

      {/* Controls */}
      <div style={{ display: 'grid', gap: 16, marginTop: 20 }}>
        {[
          { label: 'CO₂ Emissions Index', key: 'co2', min: 0, max: 100 },
          { label: 'Deforestation Pressure', key: 'def', min: 0, max: 100 },
          { label: 'Renewables Adoption', key: 'ren', min: 0, max: 100 },
          { label: 'Pollution Control', key: 'pol', min: 0, max: 100 },
          { label: 'Population Growth', key: 'pop', min: -20, max: 80 },
        ].map((field) => (
          <div key={field.key}>
            <label style={{ fontSize: 13, color: '#9fb7d6' }}>{field.label}</label>
            <input
              type="range"
              min={field.min}
              max={field.max}
              value={inputs[field.key as keyof typeof inputs]}
              onChange={(e) => handleChange(field.key, Number(e.target.value))}
              style={{ width: '100%' }}
            />
            <p style={{ fontSize: 13, color: '#9fb7d6' }}>
              {inputs[field.key as keyof typeof inputs]}
            </p>
          </div>
        ))}

        <button
          style={{
            background: 'linear-gradient(180deg,#1f8eff,#0f63c0)',
            border: 0,
            color: 'white',
            padding: '10px 18px',
            borderRadius: 10,
            cursor: 'pointer',
            fontWeight: 500,
            alignSelf: 'start',
          }}
          onClick={simulate}
        >
          Simulate Now
        </button>
      </div>

      {/* Results */}
      {result && (
        <div
          style={{
            marginTop: 20,
            background: 'rgba(255,255,255,0.03)',
            padding: 20,
            borderRadius: 12,
          }}
        >
          <h4 style={{ margin: 0, color: '#3aa7ff' }}>Simulation Results</h4>
          <p style={{ fontSize: 14 }}>
            Symbiosis Index: <strong>{result.index}</strong>
          </p>
          <p style={{ fontSize: 14 }}>
            Δ Temperature: <strong>{result.tempDrift}°C</strong>
          </p>
          <p style={{ fontSize: 14 }}>
            Biodiversity: <strong>{result.biodiversity}</strong>
          </p>
          <p style={{ fontSize: 14 }}>
            Sea Level Rise: <strong>+{result.seaLevel} m</strong>
          </p>
        </div>
      )}
    </section>
  );
}
