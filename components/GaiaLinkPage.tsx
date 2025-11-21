'use client';

import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import SimulationUI from "@/components/SimulationUI";
import GaiaLink from './GaiaLink';
import useGaiaSimulation from '../lib/useGaiaSimulation';
import useGaiaState from '../lib/useGaiaState';
import PreviewCanvas from './PreviewCanvas';
import SimulationPage from '../app/simulation/page';

export default function GaiaLinkPage() {
  const { result } = useGaiaSimulation();
  const { state, loading, refresh } = useGaiaState();

  function hexToRgba(hex: string, alpha = 0.18) {
    if (!hex) return `rgba(255,100,0,${alpha})`;
    let h = hex.replace('#', '');
    if (h.length === 3) h = h.split('').map((c) => c + c).join('');
    const num = parseInt(h, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
return (
  <>
    <Navbar />
    <main className="wrap">
      <div className="card" style={{ marginBottom: 20, background: 'var(--glass)', borderColor: 'var(--accent)' }}>
        <h4 style={{ marginTop: 0, color: 'var(--accent)' }}>ℹ️ GAIA Link Overview</h4>
        <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--muted)' }}>
          <li><strong>GAIA Link:</strong> Simulate global climate interventions like carbon capture, renewable energy adoption, and policy changes.</li>
          <li><strong>Controls:</strong> Adjust sliders for different interventions to see their impact on temperature, biodiversity, and sea levels.</li>
          <li><strong>Preview:</strong> View predictive Earth imagery with overlays showing projected climate changes.</li>
          <li><strong>Results:</strong> Analyze scenario outcomes in the Nexus section after running simulations.</li>
          <li><strong>Real-time:</strong> Changes update the global state, affecting all connected modules.</li>
        </ul>
      </div>

      <section style={{display:'flex', flexDirection:'column', gap:12}}>
        <GaiaLink />
      </section>

      <aside className="card" style={{display:'flex', flexDirection:'column'}}>



        <PreviewCanvas index={result?.index} />
      </aside>
    </main>

    <Chatbot />
  </>
);
}