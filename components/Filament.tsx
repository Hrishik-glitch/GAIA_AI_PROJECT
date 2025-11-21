// components/Filament.tsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// --- Supabase ---
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON!
);

// --- Types ---
type City = "Global" | "Delhi" | "Mumbai" | "Darjeeling";

const CITY_SENSITIVITY = {
  Global: 0.35,     // very stable (barely wiggles)
  Delhi: 1.35,      // strongest
  Mumbai: 1.15,     // moderate
  Darjeeling: 1.0,  // mild
};

// These affect only behaviour — NOT visuals.
const FILAMENT_PRESETS = {
  Global: {
    color: '#2de8a7',
    vibration: 0.6,
    complexity: 0.45,
  },
  Delhi: {
    color: '#ff4b4b',
    vibration: 1.35,
    complexity: 1.25,
  },
  Mumbai: {
    color: '#ff9f3f',
    vibration: 1.1,
    complexity: 1.05,
  },
  Darjeeling: {
    color: '#4fd0ff',
    vibration: 0.95,
    complexity: 0.85,
  }
};

interface SymbioSphereData {
  color?: string;
  vibration?: number;   // live vibration
  severity?: number;    // 0–1 range ideally
}

interface GaiaLinkData {
  variation: number; // delta temperature / variation feed
  index?: number;    // symbiosis index city-specific
}

interface FilamentProps {
  city: City;
  index?: number;         // Nexus now passes city index
  symbioSignal?: any;     // optional override
  tint?: string;          // optional color tint override
}

// ---------------------------------------------------------------------------
// FILAMENT (UNCHANGED LOOK — IMPROVED INPUT LOGIC)
// ---------------------------------------------------------------------------

export default function Filament({ city, index, symbioSignal, tint }: FilamentProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [tick, setTick] = useState(0);

  const [symbioData, setSymbioData] = useState<SymbioSphereData>({
    vibration: 1,
    severity: 0,
    color: '#20e07a'
  });

  const [gaiaData, setGaiaData] = useState<GaiaLinkData>({
    variation: 0.5,
    index: index ?? 60
  });

  // -------------------------------------------------------------------------
  // FETCH CITY-SPECIFIC DATA (SymbioSphere + GaiaLink)
  // -------------------------------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [symbioRes, gaiaRes] = await Promise.all([
          fetch(`/api/symbiosphere/city?city=${city}`),
          fetch(`/api/gaialink/city?city=${city}`)
        ]);
        
        if (symbioRes.ok) {
          const s: SymbioSphereData = await symbioRes.json();
          setSymbioData({
            vibration: s.vibration ?? 1,
            severity: s.severity ?? 0.3,
            color: s.color ?? undefined,
          });
        }

        if (gaiaRes.ok) {
          const g: GaiaLinkData = await gaiaRes.json();
          setGaiaData({
            variation: g.variation ?? 0.5,
            index: g.index ?? index ?? 60
          });
        }

      } catch (error) {
        console.error('Filament city fetch error:', error);
      }
    };

    fetchData();

// LIVE UPDATES
const symbioChannel = supabase
  .channel(`symbiosphere_${city}`)
  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'city_symbiosphere',
      filter: `city=eq.${city}`
    } as any,
    (payload: { new: SymbioSphereData }) => {
      if (payload.new) {
        setSymbioData({
          vibration: payload.new.vibration,
          severity: payload.new.severity,
          color: payload.new.color
        });
      }
    }
  )
  .subscribe();

const gaiaChannel = supabase
  .channel(`gaialink_${city}`)
  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'city_gaialink',
      filter: `city=eq.${city}`
    } as any,
    (payload: { new: GaiaLinkData }) => {
      if (payload.new) {
        setGaiaData({
          variation: payload.new.variation,
          index: payload.new.index
        });
      }
    }
  )
  .subscribe();

return () => {
  supabase.removeChannel(symbioChannel);
  supabase.removeChannel(gaiaChannel);
};

} , [city]);

  // -------------------------------------------------------------------------
  // DRAW LOOP — LOOK *UNCHANGED* — LOGIC UPGRADED
  // -------------------------------------------------------------------------
  useEffect(() => {
    let raf = 0;

    function draw() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d')!;
      const w = canvas.width, h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // --- SAME BACKGROUND ---
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, 'rgba(0, 0, 0, 1)');
      g.addColorStop(1, 'rgba(141, 219, 237, 1)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      const preset = FILAMENT_PRESETS[city];

      // ---------------------------------------------
      // CITY-SENSITIVE BEHAVIOR INJECTED HERE
      // ---------------------------------------------

      const citySensitivity = CITY_SENSITIVITY[city];

      const actualIndex = gaiaData.index ?? index ?? 60;

      // vibration baseline
      const baseVib = preset.vibration * (symbioSignal?.vibration ?? symbioData.vibration ?? 1);

      // index behavior: worse index = stronger displacement
      const indexFactor = (100 - actualIndex) / 100;

      // final vibration (city-specific amplified)
      const vibration =
        baseVib *
        (1 + indexFactor * 1.2) *
        citySensitivity;

      // flux depends on gaia variation + severity or provided flux
      const severity = symbioSignal?.severity ?? symbioData.severity ?? 0.3;
      const fluxMultiplier = symbioSignal?.flux ?? (1 + severity * 1.1);
      const flux =
        preset.complexity *
        (gaiaData.variation ?? 0.5) *
        fluxMultiplier;

      const chaos = 0.4 + vibration * 1.35 + flux * 0.3;

      const actualColor =
        tint ??
        symbioData.color ??
        preset.color ??
        '#2de8a7';

      const hexPart = actualColor && actualColor.startsWith('#') ? actualColor.slice(1, 3) : '2d';
      const hueValue = parseInt(hexPart, 16) * 360 / 255;
      const hue = isNaN(hueValue) ? 120 : hueValue;

      const cols = Math.round(16 + (1 / Math.max(1, chaos)) * 24);

      // ---------------------------------------------
      // EXACT SAME VISUALS — JUST VARIABLE INPUTS
      // ---------------------------------------------
      for (let i = 0; i < cols; i++) {
        const baseX = (i + 0.5) / cols * w;
        let x = baseX + 60 * Math.sin((tick + i * 20) / 60) * chaos * vibration;
        let y = 20;

        ctx.beginPath();
        ctx.moveTo(x, y);

        const segments = 8;
        for (let s = 0; s < segments; s++) {
          const amp = Math.max(0.5, (1 - s / segments)) * chaos;
          const cx = x + (Math.random() - 0.5) * 100 * amp + 30 * Math.sin((tick + i * 10 + s * 5) / 30);
          const cy = y + (s + 1) * (h / (segments + 1)) + 15 * Math.cos((tick + i * 7 + s * 11) / 35);
          const nx = baseX + (s + 1) * (w / (segments + 2) - w / (cols * segments)) + Math.sin((tick + s * i) / 25) * 80 * amp;

          ctx.quadraticCurveTo(cx, cy, nx, cy + 10);
          x = nx;
          y = cy + 10;
        }

        const bright = 50 + 25 * Math.sin((tick + i) / 25);
        ctx.lineWidth = 1.0 + 2.0 * indexFactor; // worse index = thicker lines

        ctx.strokeStyle = `hsla(${hue + flux * 45}, 85%, ${bright}%, ${0.4 + (0.8 - chaos / 5)})`;
        ctx.stroke();
      }

      // --- SAME PULSING CORE ---
      const cx = w * 0.75, cy = h * 0.5;
      const pulse = 25 + 40 * Math.abs(Math.sin(tick / 35));

      const core = ctx.createRadialGradient(cx, cy, pulse * 0.05, cx, cy, pulse * 3.5);
      core.addColorStop(0, `hsla(${hue}, 95%, 65%, 0.3)`);
      core.addColorStop(0.5, `hsla(${hue}, 80%, 50%, 0.1)`);
      core.addColorStop(1, 'rgba(10,12,18,0)');

      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(cx, cy, pulse * 3.5, 0, Math.PI * 2);
      ctx.fill();

      setTick(t => t + 1);
      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [city, symbioData, gaiaData, index, symbioSignal, tint]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={340}
      style={{
        borderRadius: 10,
        display: 'block',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))'

      }}
    />
  );
}
