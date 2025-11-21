// components/PreviewCanvas.tsx
'use client';
import React, { useEffect, useRef } from 'react';

export default function PreviewCanvas({ index }: { index?: number }){
  const ref = useRef<HTMLCanvasElement|null>(null);
  useEffect(()=>{
    const c = ref.current; if(!c) return;
    const ctx = c.getContext('2d')!;
    function draw(){
      const w = c.width, h = c.height; ctx.clearRect(0,0,w,h);
      const idx = (typeof index === 'number') ? index : (JSON.parse(localStorage.getItem('gaia_result') || 'null')?.index || 50);
      const g = ctx.createLinearGradient(0,0,w,0);
      g.addColorStop(0,'rgba(255,255,255,0.02)'); g.addColorStop(1,'rgba(255,255,255,0.01)');
      ctx.fillStyle = g; ctx.fillRect(0,0,w,h);
      const threat = 100 - idx;
      ctx.fillStyle = 'rgba(255,80,80,0.18)'; ctx.fillRect(10,20,(threat/100)*(w-20),60);
      ctx.fillStyle = 'rgba(30,200,110,0.18)'; ctx.fillRect(10,20,((idx)/100)*(w-20),60);
      ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.font='12px sans-serif';
      
    }
    draw();
    const t = setInterval(draw, 800);
    return ()=>clearInterval(t);
  },[index]);
  return <canvas id="previewCanvas" ref={ref} width={0} height={0} style={{marginTop:12,borderRadius:10, background:'transparent'}}/>;
}
