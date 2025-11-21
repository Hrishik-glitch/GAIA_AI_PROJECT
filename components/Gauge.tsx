// components/Gauge.tsx
'use client';
import React, { useEffect, useRef } from 'react';

export default function Gauge({ value }: { value: number | string }){
  const canvasRef = useRef<HTMLCanvasElement|null>(null);
  useEffect(()=>{
    const c = canvasRef.current;
    if(!c) return;
    const ctx = c.getContext('2d')!;
    const w = c.width, h = c.height;
    ctx.clearRect(0,0,w,h);
    const idx = typeof value === 'number' ? value : (value === '—' ? 50 : Number(value));
    // background arc
    ctx.beginPath(); ctx.lineWidth = 12; ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.arc(w/2, h, w*0.35, Math.PI, 2*Math.PI, false); ctx.stroke();
    // value arc
    const start = Math.PI, end = Math.PI + (idx/100)*Math.PI;
    const hue = idx>65?150:idx>40?45:0;
    ctx.beginPath(); ctx.strokeStyle = `hsla(${hue},80%,60%,0.95)`; ctx.lineCap='round';
    ctx.arc(w/2, h, w*0.35, start, end, false); ctx.lineWidth = 12; ctx.stroke();
    // text
    ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.font = '14px sans-serif';
    ctx.fillText((typeof value === 'number' ? value : String(value)) + ' / 100', w/2 - 22, h-18);
  },[value]);
  return <canvas ref={canvasRef} className="gauge-arc" width={180} height={90} />;
}
