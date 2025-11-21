import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import SymbioSphere from '../../components/SymbioSphere';

export const metadata = {
  title: 'SymbioSphere - Crowd-sensing Platform | GAIA 2.0',
};

export default function SymbioSpherePage() {
  return (
    <>
      <Navbar />
      <main className="wrap">
        <div className="card" style={{ marginBottom: 20, background: 'var(--glass)', borderColor: 'var(--accent)' }}>
          <h4 style={{ marginTop: 0, color: 'var(--accent)' }}>ℹ️ SymbioSphere Overview</h4>
          <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--muted)' }}>
            <li><strong>SymbioSphere:</strong> Explore symbiotic relationships between cities and ecosystems through data-driven simulations.</li>
            <li><strong>City Selection:</strong> Choose cities to analyze their environmental impact and symbiotic potential.</li>
            <li><strong>Reports:</strong> Generate detailed reports on biodiversity, pollution, and sustainable development metrics.</li>
            <li><strong>Interventions:</strong> Test urban planning strategies to enhance ecological balance.</li>
            <li><strong>Integration:</strong> Data from GAIA Link influences city simulations for holistic climate modeling.</li>
          </ul>
        </div>

        {/* Paste ONLY Symbiosphere card UI here */}
        <SymbioSphere />
      </main>
      <Chatbot />
    </>
  );
}
