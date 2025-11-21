'use client';

import { useState } from 'react';

export default function Header({ onTabChange }: { onTabChange: (tab: string) => void }) {
  const [active, setActive] = useState('link');

  function handleClick(tab: string) {
    setActive(tab);
    onTabChange(tab);
  }

  function resetDemo() {
    localStorage.removeItem('gaia_result');
    localStorage.removeItem('gaia_obs');
    alert('Demo reset — stored simulations and observations cleared.');
    window.location.reload();
  }

  return (
    <header>
      <div className="brand">
        <div className="logo" aria-hidden="true"></div>
        <div>
          <h1>GAIA Link — Demo</h1>
          <div className="muted">Simulation Hub · SymbioSphere · Nexus — simplified demo</div>
        </div>
      </div>

      <nav>
        <button
          className={`tab ${active === 'link' ? 'active' : ''}`}
          onClick={() => handleClick('link')}
        >
          GAIA Link
        </button>
        <button
          className={`tab ${active === 'symbio' ? 'active' : ''}`}
          onClick={() => handleClick('symbio')}
        >
          SymbioSphere
        </button>
        <button
          className={`tab ${active === 'nexus' ? 'active' : ''}`}
          onClick={() => handleClick('nexus')}
        >
          Nexus
        </button>
        <button className="tab ghost" onClick={resetDemo}>
          Reset
        </button>
      </nav>
    </header>
  );
}
