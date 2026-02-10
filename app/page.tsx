import Link from "next/link";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
import HelpTooltip from "../components/HelpTooltip";

export const metadata = {
  title: 'GAIA 2.0 - Symbiotic Earth Intelligence Simulation Hub',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="wrap">
        {/* Hero Section */}
        <section className="hero-section" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="logo" style={{ margin: '0 auto 20px' }}></div>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px', color: 'var(--ink)' }}>
            GAIA 2.0
          </h1>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--muted)' }}>
            When Artificial Intelligence Becomes Ecological Intelligence
          </h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 30px', color: 'var(--ink)' }}>
            A unified planetary healing system that transforms AI from Earth's greatest threat into its most powerful partner.
            Experience the symbiotic intelligence where technology and nature evolve as one living system.
          </p>
          <Link href="/about">
            <button className="gaia-btn primary" style={{ fontSize: '1.2rem', padding: '15px 30px' }}>
              About <HelpTooltip title="About">Learn more about GAIA 2.0 and its mission to transform AI into ecological intelligence.</HelpTooltip>
            </button>
          </Link>
        </section>

        {/* Embedded Presentation */}
        <section style={{ textAlign: 'center', marginBottom: '50px' }}>
          <iframe src="https://gamma.app/embed/59bcqcanzhk2885" style={{ width: '2000px', maxWidth: '100%', height: '450px' }} allow="fullscreen" title="GAIA 2.0"></iframe>
        </section>

        {/* Three Layers Overview */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>The Three-Layer Architecture</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div className="card">
              <h3>Layer 1: The Green Foundation</h3>
              <p>Making AI Sustainable First</p>
              <p>EcoMind Data Cells transform data centers into living ecosystems. Algae tanks absorb heat and CO₂, producing biofuel while natural cooling systems reduce energy consumption. AI workload scheduling optimizes for renewable energy peaks.</p>
            </div>
            <div className="card">
              <h3>Layer 2: The Planetary Healing Fleet</h3>
              <p>AI-Powered Environmental Arsenal</p>
              <p>Deploy specialized systems across land, ocean, air, and climate: SoilHealer Pods revive barren soil, OceanPulse Guardians restore coral reefs, AirWeaver Towers purify urban air, and CryoSentinel Beacons slow glacier melting.</p>
            </div>
            <div className="card">
              <h3>Layer 3: Human Connection & Action</h3>
              <p>Transforming Awareness Into Impact</p>
              <p>EarthLink Hub turns digital footprints into real-world healing. Users earn eco-tokens for sustainable choices, automatically funding local restoration projects. Smart Agriculture Suite optimizes farming with AI precision.</p>
            </div>
          </div>
        </section>

        {/* Module Highlights */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Explore the Modules</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3>GAIA Link</h3>
              <p>Interactive simulation hub where you adjust global variables and witness the impact of interventions on Earth's future.</p>
              <Link href="/gaia-link">
                <button className="gaia-btn secondary">Explore GAIA Link</button>
              </Link>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3>SymbioSphere</h3>
              <p>Crowd-sensing platform for citizens to upload environmental observations, creating a participatory feedback loop.</p>
              <Link href="/symbiosphere">
                <button className="gaia-btn secondary">Explore SymbioSphere</button>
              </Link>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3>Nexus</h3>
              <p>Living visualization of Earth's emotional state, with animated filaments evolving based on the Symbiosis Index.</p>
              <Link href="/nexus">
                <button className="gaia-btn secondary">Explore Nexus</button>
              </Link>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3>Eco-Tracker</h3>
              <p>Track and analyze ecological data, monitor progress, and engage in precision agriculture tools.</p>
              <Link href="/eco-tracker">
                <button className="gaia-btn secondary">Explore Eco-Tracker</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2>Join the Symbiotic Revolution</h2>
          <p>Experience how AI can heal the planet while sustaining itself. Start your journey into the future of ecological intelligence.</p>
          <Link href="/gaia-link">
            <button className="gaia-btn primary" style={{ fontSize: '1.2rem', padding: '15px 30px' }}>
              Begin Your Simulation <HelpTooltip title="Begin Your Simulation">Start exploring climate interventions and their impacts on Earth's future.</HelpTooltip>
            </button>
          </Link>
        </section>
      </main>
      <Chatbot />
    </>
  );
}
