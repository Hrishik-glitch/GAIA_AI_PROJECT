import Navbar from '../../components/Navbar';
import Chatbot from '../../components/Chatbot';

export const metadata = {
  title: 'About GAIA 2.0 | GAIA 2.0',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="wrap">
        <h2>About GAIA 2.0: The Symbiotic Earth Intelligence</h2>
        <p>Horizon of Survival: AI and the Planet 🌍</p>

        <div className="card" style={{ marginBottom: 20, background: 'var(--glass)', borderColor: 'var(--accent)' }}>
          <h3 style={{ marginTop: 0, color: 'var(--accent)' }}>The Unified Vision</h3>
          <p>GAIA 2.0 (Global AI for Intelligent Adaptation) is a self-learning planetary intelligence network that transforms Artificial Intelligence from Earth's greatest threat into its most powerful partner. It solves the survival paradox: AI needs enormous energy to function, yet we need AI to save the planet. GAIA 2.0 makes AI sustainable first, then deploys it to heal everything else.</p>
        </div>

        <div className="card">
          <h3>The Problem: A Tri-Crisis</h3>
          <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--muted)' }}>
            <li><strong>Ecological Collapse:</strong> Deserts spreading, reefs dying, forests burning, glaciers melting</li>
            <li><strong>AI's Carbon Footprint:</strong> Data centers consume massive energy with huge environmental costs</li>
            <li><strong>Disconnected Solutions:</strong> Carbon tracker apps show numbers but create zero real-world impact; individual inventions work in isolation</li>
          </ul>
          <p style={{ marginTop: 16 }}>The Master Solution: Create a closed-loop symbiotic system where AI must heal the planet to power itself, and the planet's health directly powers AI.</p>
        </div>

        <div className="card">
          <h3>The Three-Layer Architecture</h3>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div className="card">
              <h4>Layer 1: The Green Foundation</h4>
              <p>Making AI Sustainable First</p>
              <p>EcoMind Data Cells & LumoCore Reactors: Instead of energy-hungry cooling systems, AI data centers become living ecosystems:</p>
              <ul>
                <li>Living algae tanks absorb server heat and convert it into biofuel</li>
                <li>Underground airflow tunnels provide natural cooling</li>
                <li>AI workload scheduling shifts computing to times with peak solar/wind availability</li>
                <li>Waste heat recycling powers nearby homes and greenhouses</li>
              </ul>
              <p><strong>Result:</strong> Data centers transform from consumers to producers</p>
            </div>
            <div className="card">
              <h4>Layer 2: The Planetary Healing Fleet</h4>
              <p>AI-Powered Environmental Arsenal</p>
              <p>Once AI runs green, GAIA 2.0 coordinates specialized restoration systems:</p>
              <ul>
                <li><strong>LAND:</strong> SoilHealer Drone Pods - Biodegradable AI capsules with micro-sensors analyze soil and release targeted nutrients, bacteria, seeds</li>
                <li><strong>LAND:</strong> RootMind Forest Network - Sensors create interconnected "forest brain" for self-healing</li>
                <li><strong>OCEAN:</strong> OceanPulse Guardian - Underwater drones stimulate coral growth</li>
                <li><strong>OCEAN:</strong> AquaLoom Nets - Smart nets collect microplastics</li>
                <li><strong>WASTE:</strong> BioSynth Loop Pods - Bacteria consume plastic waste, convert to biofuel</li>
                <li><strong>AIR:</strong> AirWeaver Towers - Convert smog into building materials</li>
                <li><strong>CLIMATE:</strong> ThermoVeil Skydrift - Drones form shade layers over cities</li>
                <li><strong>CLIMATE:</strong> CryoSentinel Beacons - Slow glacier melting</li>
                <li><strong>ENERGY:</strong> SunThread Webs - Microscopic solar threads for ubiquitous energy collection</li>
              </ul>
            </div>
            <div className="card">
              <h4>Layer 3: Human Connection & Action</h4>
              <p>Transforming Awareness Into Impact</p>
              <p>EarthLink Hub — The Action Bridge: AI monitors activities and invests micro-credits into local projects. Earn eco-tokens for sustainable choices.</p>
              <p>Smart Agriculture Suite: CropIQ, AquaGrow, FarmGuard, AgriLink for optimized food production.</p>
            </div>
          </div>

          <h4>The Symbiotic Cloud Network</h4>
          <p>Creates a perfect ecological loop: AI Servers generate heat → Algae absorb heat + CO₂ → Algae create biofuel + oxygen → Vertical Farms use biofuel → Plants filter more CO₂ → Clean air cools servers → Excess energy powers communities → Communities generate renewable energy for AI</p>
        </div>

        <div className="card">
          <h3>GaiaNet: The Intelligence Core</h3>
          <p>All systems connect through one unified planetary AI operating in continuous cycles:</p>
          <ul>
            <li><strong>SENSE:</strong> Billions of sensors collect real-time data</li>
            <li><strong>THINK:</strong> Machine learning analyzes patterns and predicts disasters</li>
            <li><strong>ACT:</strong> Coordinates the healing fleet autonomously</li>
            <li><strong>LEARN:</strong> Self-optimizing algorithms improve over time</li>
            <li><strong>GOVERN:</strong> Human oversight for major decisions</li>
          </ul>
        </div>

        <div className="card">
          <h3>The Complete Symbiotic Loop</h3>
          <p>🖥️ AI Data Centers (EcoMind) produce heat<br/>
          ↓<br/>
          🦠 Algae Tanks absorb heat + CO₂<br/>
          ↓<br/>
          ⚡ Create biofuel + oxygen<br/>
          ↓<br/>
          🌾 Vertical Farms use biofuel, filter air<br/>
          ↓<br/>
          🌱 Plants absorb more CO₂<br/>
          ↓<br/>
          ❄️ Clean air cools servers naturally<br/>
          ↓<br/>
          🏘️ Excess heat powers communities<br/>
          ↓<br/>
          ☀️ Communities generate renewable energy<br/>
          ↓<br/>
          🔁 Powers AI Centers sustainably</p>
        </div>

        <div className="card">
          <h3>Measurable Real-World Impact</h3>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div><strong>Energy:</strong> Data centers shift from net consumers to net producers</div>
            <div><strong>Land:</strong> Restore degraded soil, enable reforestation</div>
            <div><strong>Ocean:</strong> Remove microplastics, restore coral reefs</div>
            <div><strong>Air:</strong> Convert smog into building materials</div>
            <div><strong>Agriculture:</strong> 40% less water waste, 60% fewer pesticides</div>
            <div><strong>Climate:</strong> Slow glacier melting, reduce urban heat islands</div>
            <div><strong>Community:</strong> Transform passive tracking into active eco-actions</div>
            <div><strong>Waste:</strong> Turn pollution into biofuel and reusable materials</div>
          </div>
        </div>

        <div className="card">
          <h3>Practical Implementation Path</h3>
          <ol>
            <li><strong>Phase 1 (Pilot):</strong> Launch EcoMind Data Cell + SoilHealer pods in one test region</li>
            <li><strong>Phase 2 (Urban/Coastal):</strong> Deploy AirWeaver towers + AquaLoom nets in cities and waterways</li>
            <li><strong>Phase 3 (Global App):</strong> Release EarthLink Hub worldwide</li>
            <li><strong>Phase 4 (Integration):</strong> Connect all systems to unified GaiaNet intelligence</li>
            <li><strong>Phase 5 (Planetary Scale):</strong> Expand coverage to critical ecosystems globally</li>
          </ol>
        </div>

        <div className="card">
          <h3>Why GAIA 2.0 Wins the Competition</h3>
          <ol>
            <li><strong>Solves the Core Paradox:</strong> Transforms AI infrastructure into environmental solution first</li>
            <li><strong>Comprehensive Integration:</strong> Unified system covering all environments</li>
            <li><strong>Real-World Feasibility:</strong> Based on existing technologies</li>
            <li><strong>Self-Improving Intelligence:</strong> Learns and adapts continuously</li>
            <li><strong>Human-Centered Design:</strong> Empowers communities with real impact</li>
            <li><strong>Addresses Concerns:</strong> Solves energy worries, scalability, real impact</li>
          </ol>
        </div>

        <div className="card">
          <h3>The Winning Message</h3>
          <p><em>"We built AI to serve humanity. GAIA 2.0 teaches AI to serve the planet."</em></p>
          <p>This isn't about replacing nature with machines. It's about creating ecological intelligence — where every algorithm, sensor, and drone speaks nature's language. Where data centers breathe through algae. Where your phone doesn't just track carbon — it plants trees. Where forests have digital brains and oceans have robotic healers.</p>
          <p>The horizon of survival isn't about choosing between technology and Earth. It's about making them inseparable.</p>
          <p><strong>GAIA 2.0: When Artificial Intelligence Becomes Ecological Intelligence</strong></p>
        </div>
      </main>
      <Chatbot />
    </>
  );
}