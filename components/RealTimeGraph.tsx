"use client";
import React, { useEffect, useRef } from 'react';

type SeriesPoint = { x: number; y: number };

export default function RealTimeGraph({
  title = 'Series',
  color = '#2de8a7',
  data = [] as SeriesPoint[],
  height = 120
}: {
  title?: string;
  color?: string;
  data?: SeriesPoint[];
  height?: number;
}){
  const ref = useRef<SVGSVGElement | null>(null);

  // Simple SVG polyline renderer with axes. Recalculates path when data changes.
  useEffect(()=>{
    const svg = ref.current;
    if(!svg) return;
    const w = svg.clientWidth || 300;
    const h = height;
    if(!data || data.length===0){
      const poly = svg.querySelector('polyline');
      if(poly) poly.setAttribute('points','');
      // Clear axes
      const existingAxes = svg.querySelectorAll('.axis');
      existingAxes.forEach(el => el.remove());
      return;
    }

    const xs = data.map(p=>p.x);
    const ys = data.map(p=>p.y);
    const xmin = Math.min(...xs); const xmax = Math.max(...xs);
    const ymin = Math.min(...ys); const ymax = Math.max(...ys);
    const xRange = xmax - xmin || 1;
    const yRange = ymax - ymin || 1;

    const points = data.map(p=>{
      const x = ((p.x - xmin)/xRange) * (w - 40) + 40; // offset for y-axis
      const y = h - 20 - ((p.y - ymin)/yRange) * (h - 40); // offset for x-axis
      return `${x},${y}`;
    }).join(' ');

    const poly = svg.querySelector('polyline');
    if(poly) poly.setAttribute('points', points);

    // Draw axes
    const existingAxes = svg.querySelectorAll('.axis');
    existingAxes.forEach(el => el.remove());

    // Y-axis
    const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    yAxis.setAttribute('x1', '40');
    yAxis.setAttribute('y1', '20');
    yAxis.setAttribute('x2', '40');
    yAxis.setAttribute('y2', (h - 20).toString());
    yAxis.setAttribute('stroke', 'var(--muted)');
    yAxis.setAttribute('stroke-width', '1');
    yAxis.classList.add('axis');
    svg.appendChild(yAxis);

    // X-axis
    const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    xAxis.setAttribute('x1', '40');
    xAxis.setAttribute('y1', (h - 20).toString());
    xAxis.setAttribute('x2', w.toString());
    xAxis.setAttribute('y2', (h - 20).toString());
    xAxis.setAttribute('stroke', 'var(--muted)');
    xAxis.setAttribute('stroke-width', '1');
    xAxis.classList.add('axis');
    svg.appendChild(xAxis);

    // Y-axis labels
    for(let i=0; i<=5; i++){
      const val = ymin + (yRange / 5) * i;
      const yPos = h - 20 - (i / 5) * (h - 40);
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', '35');
      text.setAttribute('y', (yPos + 4).toString());
      text.setAttribute('text-anchor', 'end');
      text.setAttribute('font-size', '10');
      text.setAttribute('fill', 'var(--muted)');
      text.textContent = val.toFixed(1);
      text.classList.add('axis');
      svg.appendChild(text);
    }

    // X-axis labels
    for(let i=0; i<=5; i++){
      const val = xmin + (xRange / 5) * i;
      const xPos = 40 + (i / 5) * (w - 40);
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', xPos.toString());
      text.setAttribute('y', (h - 5).toString());
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('font-size', '10');
      text.setAttribute('fill', 'var(--muted)');
      text.textContent = val.toFixed(1);
      text.classList.add('axis');
      svg.appendChild(text);
    }
  }, [data, height]);

  return (
    <div style={{width:'100%'}}>
      <div style={{display:'flex', justifyContent:'space-between', marginBottom:6}}>
        <strong style={{fontSize:13}}>{title}</strong>
        <div style={{fontSize:12, color:'var(--muted)'}}>{data.length} pts</div>
      </div>
      <svg ref={ref} height={height} style={{width:'100%'}}>
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.18" />
            <stop offset="100%" stopColor={color} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <rect x={0} y={0} width="100%" height={height} fill="url(#g1)" />
        <polyline fill="none" stroke={color} strokeWidth={2} points="" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
