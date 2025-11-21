"use client";
import React, { useState } from 'react';

export default function HelpTooltip({ title, children }:{ title?:string; children:React.ReactNode }){
  const [open, setOpen] = useState(false);
  return (
    <span style={{display:'inline-block'}}>
      <span onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} style={{border:'none',background:'transparent',color:'var(--muted)',cursor:'help',padding:4, display:'inline-block'}}>ℹ️</span>
      {open ? (
        <div style={{position:'absolute', zIndex:9999, maxWidth:320, background:'var(--panel)', color:'var(--ink)', border:'1px solid rgba(255,255,255,0.04)', padding:12, borderRadius:8}}>
          <strong style={{display:'block', marginBottom:6}}>{title || 'Help'}</strong>
          <div style={{fontSize:13, color:'var(--muted)'}}>{children}</div>
        </div>
      ) : null}
    </span>
  );
}
