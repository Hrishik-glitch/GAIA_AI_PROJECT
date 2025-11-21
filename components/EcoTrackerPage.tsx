'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Chatbot from './Chatbot';
import RealTimeGraph from './RealTimeGraph';
import HelpTooltip from './HelpTooltip';

export default function EcoTrackerPage() {
  const [carbonInputs, setCarbonInputs] = useState({
    transportation: 0, // km/day
    diet: 'omnivore', // vegetarian, vegan, etc.
    energy: 0, // kWh/month
    waste: 0, // kg/week
  });

  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [netFootprint, setNetFootprint] = useState(0);
  const [treesPlanted, setTreesPlanted] = useState(0);
  const [reforestationProgress, setReforestationProgress] = useState(0);
  const [graphData, setGraphData] = useState([]);

  // Calculate carbon footprint
  useEffect(() => {
    const transportCO2 = carbonInputs.transportation * 0.2; // approx kg CO2 per km
    const dietCO2 = carbonInputs.diet === 'vegan' ? 1.5 : carbonInputs.diet === 'vegetarian' ? 2.5 : 4.5; // kg/day
    const energyCO2 = carbonInputs.energy * 0.4; // approx kg CO2 per kWh
    const wasteCO2 = carbonInputs.waste * 0.5; // approx kg CO2 per kg waste
    const total = transportCO2 + dietCO2 + energyCO2 + wasteCO2;
    setCarbonFootprint(total);
    setNetFootprint(total - treesPlanted * 0.05);

    // Update graph data
    const newPoint = { x: Date.now(), y: total - treesPlanted * 0.05 };
    setGraphData(prev => [...prev.slice(-9), newPoint]); // keep last 10 points
  }, [carbonInputs, treesPlanted]);

  const handleInputChange = (field, value) => {
    setCarbonInputs(prev => ({ ...prev, [field]: value }));
  };

  const plantTree = () => {
    setTreesPlanted(prev => prev + 1);
    setReforestationProgress(prev => Math.min(prev + 10, 100)); // 10 trees = 100%
  };

  const resetTrees = () => {
    setTreesPlanted(0);
    setReforestationProgress(0);
  };

  return (
    <>
      <Navbar />
      <main className="wrap">
        <h2>Virtual Eco-Tracker <HelpTooltip title="Virtual Eco-Tracker">This page allows you to calculate your personal carbon footprint and engage in virtual reforestation activities to offset emissions. Use it to understand your environmental impact and explore sustainable choices.</HelpTooltip></h2>
        <p>Monitor your carbon footprint and contribute to virtual reforestation for a sustainable future.</p>

        <div className="card" style={{ marginBottom: 20, background: 'var(--glass)', borderColor: 'var(--accent)' }}>
          <h4 style={{ marginTop: 0, color: 'var(--accent)' }}>ℹ️ How It Works</h4>
          <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--muted)' }}>
            <li><strong>Carbon Footprint Calculator:</strong> Input your daily habits to estimate CO2 emissions from transportation, diet, energy use, and waste.</li>
            <li><strong>Net Footprint:</strong> Your total emissions minus offsets from planted trees. The graph updates in real-time to show trends.</li>
            <li><strong>Virtual Reforestation:</strong> Plant trees virtually to reduce your net footprint. Each tree offsets 0.05 kg CO2/day.</li>
            <li><strong>Progress Tracking:</strong> Reach 100% reforestation by planting 10 trees for a congratulatory milestone.</li>
            <li><strong>Impact Summary:</strong> View annual emissions, offsets, and net impact to motivate sustainable changes.</li>
          </ul>
        </div>

        <div className="grid">
          {/* Carbon Footprint Section */}
          <section className="card">
            <h3>Carbon Footprint Calculator <HelpTooltip title="Carbon Footprint Calculator">This tool calculates your estimated daily carbon dioxide emissions based on your lifestyle inputs. Adjust the values below to see how your choices impact your environmental footprint.</HelpTooltip></h3>
            <div className="muted">Estimate your daily CO2 emissions</div>

            <div className="controls" style={{ marginTop: 16 }}>
              <div>
                <label>Daily Transportation (km) <HelpTooltip title="Transportation">Enter the average kilometers you travel daily by car, bus, or other vehicles. Higher values increase your carbon footprint due to fuel emissions.</HelpTooltip></label>
                <input
                  type="number"
                  className="form-control"
                  value={carbonInputs.transportation}
                  onChange={(e) => handleInputChange('transportation', parseFloat(e.target.value) || 0)}
                />
              </div>

              <div>
                <label>Diet Type <HelpTooltip title="Diet">Select your primary diet. Plant-based diets (vegan/vegetarian) produce fewer CO2 emissions compared to meat-heavy omnivore diets.</HelpTooltip></label>
                <select
                  className="form-control"
                  value={carbonInputs.diet}
                  onChange={(e) => handleInputChange('diet', e.target.value)}
                >
                  <option value="omnivore">Omnivore</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                </select>
              </div>

              <div>
                <label>Monthly Energy Use (kWh) <HelpTooltip title="Energy Use">Input your average monthly electricity consumption in kilowatt-hours. This affects emissions from power generation.</HelpTooltip></label>
                <input
                  type="number"
                  className="form-control"
                  value={carbonInputs.energy}
                  onChange={(e) => handleInputChange('energy', parseFloat(e.target.value) || 0)}
                />
              </div>

              <div>
                <label>Weekly Waste (kg) <HelpTooltip title="Waste">Enter the weight of waste you produce weekly. Waste contributes to methane emissions from landfills.</HelpTooltip></label>
                <input
                  type="number"
                  className="form-control"
                  value={carbonInputs.waste}
                  onChange={(e) => handleInputChange('waste', parseFloat(e.target.value) || 0)}
                />
              </div>
            </div>

            <div style={{ marginTop: 20, textAlign: 'center' }}>
              <div className="score" style={{ color: netFootprint > 10 ? 'var(--bad)' : netFootprint > 5 ? 'var(--warn)' : 'var(--good)' }}>
                {netFootprint.toFixed(2)} kg CO2/day <HelpTooltip title="Net Carbon Footprint">This is your total CO2 emissions minus the offset from planted trees. Green indicates a positive impact, red indicates net emissions.</HelpTooltip>
              </div>
              <div className="muted">Your net carbon footprint (after offsets)</div>
            </div>

            <div style={{ marginTop: 20 }}>
              <RealTimeGraph
                title="Net Carbon Footprint Trend"
                color="var(--bad)"
                data={graphData}
                height={150}
              />
              <HelpTooltip title="Trend Graph">This graph shows how your net carbon footprint changes over time as you adjust inputs and plant trees. Watch it decrease with sustainable actions!</HelpTooltip>
            </div>
          </section>

          {/* Reforestation Section */}
          <aside className="card">
            <h3>Virtual Reforestation <HelpTooltip title="Virtual Reforestation">Simulate planting trees to offset your carbon footprint. Each tree reduces your net emissions by 0.05 kg CO2 per day.</HelpTooltip></h3>
            <div className="muted">Plant virtual trees to offset carbon</div>

            <div style={{ marginTop: 16, textAlign: 'center' }}>
              <div className="score" style={{ color: 'var(--good)' }}>
                {treesPlanted} Trees Planted <HelpTooltip title="Trees Planted">The total number of virtual trees you've planted. This counter resets when you click Reset.</HelpTooltip>
              </div>
              <div className="muted">Contribute to global reforestation</div>
            </div>

            <div style={{ marginTop: 20 }}>
              <div style={{ width: '100%', height: 20, background: 'var(--glass)', borderRadius: 10, overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${reforestationProgress}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--good), #26FFE6)',
                    transition: 'width 0.5s ease'
                  }}
                />
              </div>
              <div style={{ textAlign: 'center', marginTop: 8, fontSize: 12, color: 'var(--muted)' }}>
                Progress: {reforestationProgress}% <HelpTooltip title="Reforestation Progress">Shows your progress towards 100% reforestation. Reach 100% by planting 10 trees to unlock a congratulatory message.</HelpTooltip>
              </div>
            </div>

            <div style={{ marginTop: 20, textAlign: 'center', display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button className="gaia-btn primary" onClick={plantTree}>
                Plant a Tree 🌳 <HelpTooltip title="Plant a Tree">Click to plant one virtual tree, reducing your net carbon footprint and increasing reforestation progress.</HelpTooltip>
              </button>
              <button className="gaia-btn ghost" onClick={resetTrees}>
                Reset <HelpTooltip title="Reset">Reset the tree counter and progress bar to zero. Use this to start over or simulate different scenarios.</HelpTooltip>
              </button>
            </div>

            <div style={{ marginTop: 20 }}>
              {reforestationProgress === 100 && (
                <div style={{ textAlign: 'center', marginBottom: 16, padding: 12, background: 'var(--glass)', borderRadius: 12, border: '1px solid var(--good)' }}>
                  🎉 Congratulations! You've reached 100% reforestation progress. Your virtual forest is thriving!
                </div>
              )}
              <div className="muted-block">
                Each virtual tree represents a commitment to real-world reforestation efforts. Your actions help visualize the impact of collective environmental responsibility.
              </div>
            </div>
          </aside>
        </div>

        {/* Impact Summary */}
        <div className="card" style={{ marginTop: 20 }}>
          <h3>Eco Impact Summary <HelpTooltip title="Eco Impact Summary">A quick overview of your environmental impact metrics, calculated from your inputs and actions.</HelpTooltip></h3>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            <div style={{ textAlign: 'center' }}>
              <div className="score" style={{ color: 'var(--accent)' }}>
                {(carbonFootprint * 365).toFixed(0)} kg <HelpTooltip title="Annual CO2 Emissions">Your estimated total carbon dioxide emissions for a full year, based on daily inputs.</HelpTooltip>
              </div>
              <div className="muted">Annual CO2 Emissions</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="score" style={{ color: 'var(--good)' }}>
                {treesPlanted * 50} kg <HelpTooltip title="CO2 Offset by Trees">The amount of CO2 offset annually by your planted trees (50 kg per tree per year).</HelpTooltip>
              </div>
              <div className="muted">CO2 Offset by Trees</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="score" style={{ color: netFootprint > 0 ? 'var(--bad)' : 'var(--good)' }}>
                {netFootprint.toFixed(2)} kg <HelpTooltip title="Net Daily Footprint">Your daily CO2 emissions after subtracting tree offsets. Aim for negative values!</HelpTooltip>
              </div>
              <div className="muted">Net Daily Footprint</div>
            </div>
          </div>
        </div>
      </main>
      <Chatbot />
    </>
  );
}