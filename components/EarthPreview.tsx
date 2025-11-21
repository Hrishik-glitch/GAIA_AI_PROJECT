// components/EarthPreview.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import useGaiaState from '@/lib/useGaiaState';

export default function EarthPreview({ size = 120, tint, label }: { size?: number; tint?: string; label?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { state, loading, refresh } = useGaiaState();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    const w = canvas.width;
    const h = canvas.height;
    const centerX = w / 2;
    const centerY = h / 2;
    const radius = Math.min(w, h) / 2 - 5;

    // Get tint from prop or state or use default blue
    const earthTint = tint || (!loading && state?.earth_tint ? state.earth_tint : '#1c8cf9');

    // Draw background
    ctx.clearRect(0, 0, w, h);

    // Draw Earth sphere with gradient
    const gradient = ctx.createRadialGradient(centerX - 10, centerY - 10, 0, centerX, centerY, radius);
    const secondTint = earthTint.startsWith('rgba') ? earthTint.replace(/(\d+(?:\.\d+)?)\)$/, (match, a) => Math.min(1, parseFloat(a) + 0.3) + ')') : earthTint + 'dd';
    gradient.addColorStop(0, earthTint);
    gradient.addColorStop(0.7, secondTint);
    gradient.addColorStop(1, '#021822');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();

    // Draw Earth outline
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Add some landmass texture
    ctx.fillStyle = 'rgba(255,255,255,0.03)';
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * radius * 0.6;
      const y = centerY + Math.sin(angle) * radius * 0.6;
      ctx.beginPath();
      ctx.arc(x, y, radius * 0.25, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw risk indicator if available
    if (!loading && state?.risk_val != null) {
      const riskRadius = radius * (1 + state.risk_val * 0.3);
      ctx.strokeStyle = state.risk_val > 0.6 ? 'rgba(255, 100, 100, 0.4)' : 'rgba(100, 200, 100, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, riskRadius, 0, Math.PI * 2);
      ctx.stroke();
    }
  }, [state, loading, tint]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      {label && <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>{label}</div>}
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        style={{
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(58, 209, 255, 0.2)',
          display: 'block'
        }}
      />
      <button
        className="gaia-btn ghost"
        onClick={() => refresh()}
        disabled={loading}
        style={{ fontSize: '11px', padding: '4px 10px' }}
      >
        {loading ? 'Syncing...' : 'Refresh'}
      </button>
    </div>
  );
}
