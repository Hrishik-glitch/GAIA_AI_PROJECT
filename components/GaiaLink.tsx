'use client';
import React, { useEffect, useState } from "react";
import useGaiaSimulation from "../lib/useGaiaSimulation";
import useLastSimulation from "../lib/useLastSimulation";
import Gauge from "./Gauge";
import RealTimeGraph from "./RealTimeGraph";
import HelpTooltip from "./HelpTooltip";

// --- NEW PRESET DATA ---
  const presets = [
    {
      name: "Business-as-Usual",
      inputs: { co2: 85, def: 80, ren: 10, pol: 20, pop: 60, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "Net-Zero by 2050",
      inputs: { co2: 25, def: 15, ren: 90, pol: 75, pop: 10, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: true, reforest_int: 80, ccapture: true, ccapture_int: 60, transport: true, transport_int: 90, urbangreen: true, urbangreen_int: 50 },
    },
    {
      name: "Renewable Energy Focus",
      inputs: { co2: 30, def: 40, ren: 95, pol: 50, pop: 20, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: true, transport_int: 70, urbangreen: false },
    },
    {
      name: "Maximum Deforestation",
      inputs: { co2: 70, def: 95, ren: 30, pol: 10, pop: 70, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "Advanced Geo-Engineering",
      inputs: { co2: 60, def: 50, ren: 40, pol: 30, pop: 40, airweaver: true, airweaver_int: 90, algae: true, algae_int: 70, cryo: true, cryo_int: 95, biosynth: true, biosynth_int: 60, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "Heavy Carbon Capture",
      inputs: { co2: 50, def: 40, ren: 60, pol: 50, pop: 30, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: true, ccapture_int: 95, transport: true, transport_int: 50, urbangreen: false },
    },
    {
      name: "Global Green Cities",
      inputs: { co2: 40, def: 30, ren: 70, pol: 85, pop: 5, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: true, transport_int: 80, urbangreen: true, urbangreen_int: 90 },
    },
    {
      name: "Population Control Focus",
      inputs: { co2: 50, def: 50, ren: 50, pol: 50, pop: -15, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "Immediate High-Impact Action",
      inputs: { co2: 10, def: 5, ren: 99, pol: 99, pop: 0, airweaver: true, airweaver_int: 50, algae: true, algae_int: 50, cryo: false, biosynth: false, reforest: true, reforest_int: 99, ccapture: true, ccapture_int: 90, transport: true, transport_int: 95, urbangreen: true, urbangreen_int: 80 },
    },
    {
      name: "Stagnation Scenario",
      inputs: { co2: 50, def: 50, ren: 50, pol: 50, pop: 50, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "Nature-Based Solutions",
      inputs: { co2: 60, def: 10, ren: 50, pol: 70, pop: 30, airweaver: false, algae: true, algae_int: 80, cryo: false, biosynth: true, biosynth_int: 90, reforest: true, reforest_int: 95, ccapture: false, transport: false, urbangreen: true, urbangreen_int: 60 },
    },
    {
      name: "Economic Collapse (Low CO₂)",
      inputs: { co2: 5, def: 5, ren: 5, pol: 5, pop: -20, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "High-Pollution, Low-Deforestation",
      inputs: { co2: 80, def: 20, ren: 30, pol: 5, pop: 40, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "Global Electrification",
      inputs: { co2: 35, def: 40, ren: 80, pol: 60, pop: 20, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: true, transport_int: 99, urbangreen: false },
    },
    {
      name: "Balanced", // Original
      inputs: { co2: 50, def: 40, ren: 50, pol: 50, pop: 0, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "High Emissions", // Original
      inputs: { co2: 80, def: 70, ren: 20, pol: 65, pop: 20, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "Renewable Boost", // Original
      inputs: { co2: 30, def: 20, ren: 85, pol: 40, pop: 5, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
  ];



function cityImage(city: string) {
  if (city === "delhi") return "/gaia/cities/delhi.png";
  if (city === "mumbai") return "/gaia/cities/mumbai.jpg";
  if (city === "darjeeling") return "/gaia/cities/darjeeling.png";

  return "/gaia/cities/global.png";
}

function getTintColor(index?: number) {
  if (index == null) return "rgba(255,255,255,0.15)"; // fallback

  if (index < 40) {
    // LOW → RED
    return "rgba(255, 0, 0, 3)";
  } else if (index < 70) {
    // MID → ORANGE
    return "rgba(255, 165, 0, 3)";
  } else {
    // HIGH → GREEN
    return "rgba(0, 255, 100, 3)";
  }
}

export default function GaiaLink() {
  const {
    inputs,
    setInputs,
    method,
    setMethod,
    result,
    simulate,
    applyAISuggestion,
    runMonteCarlo,
    saveScenario,
    setResult,
    computeWithCity,
  } = useGaiaSimulation();

  const { lastResult } = useLastSimulation();

  const [city, setCity] = useState<"main" | "delhi" | "mumbai" | "darjeeling">(
    "main"
  );
  const [co2History, setCo2History] = useState<{ x: number; y: number }[]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);

  function getPreviousInputs() {
    try {
      const raw = localStorage.getItem("gaia_prev_inputs");
      if (raw) return JSON.parse(raw);
    } catch {}
    return Object.assign({}, inputs, {
      co2: Math.max(0, (inputs.co2 || 50) - 6),
      def: Math.max(0, (inputs.def || 40) - 4),
      ren: Math.max(0, (inputs.ren || 50) - 5),
      pol: Math.max(0, (inputs.pol || 50) - 3),
      pop: (inputs.pop || 0) - 1,
    });
  }

  const prev = getPreviousInputs();

  function buildSeries(xKey: string, yKey: string) {
    const points: { x: number; y: number }[] = [];
    for (let i = 0; i < 20; i++) {
      const xBase = prev[xKey] ?? 0;
      const yBase = inputs[yKey] ?? 0;
      const x = xBase + Math.sin(i / 3) * Math.max(1, xBase * 0.02);
      const y = yBase + Math.cos(i / 4) * Math.max(1, yBase * 0.02);
      points.push({
        x: Math.round(x * 100) / 100,
        y: Math.round(y * 100) / 100,
      });
    }
    return points;
  }

  useEffect(() => {
    setCo2History((prev) => {
      const updated = [...prev, { x: historyIndex, y: inputs.co2 || 50 }];
      if (updated.length > 50) updated.shift();
      return updated;
    });
    setHistoryIndex((v) => v + 1);
  }, [inputs.co2]);

  function handleInputChange(k: string, v: any) {
    setInputs((p: any) => ({ ...p, [k]: v }));
  }

  function localComputeAndSet() {
    const loc =
      city === "main"
        ? "Global"
        : city.charAt(0).toUpperCase() + city.slice(1);
    const r = computeWithCity(inputs, loc);
    setResult(r);
    localStorage.setItem("gaia_result", JSON.stringify(r));
  }

  async function runSimulation() {
    const payloadCity =
      city === "main"
        ? "Global"
        : city.charAt(0).toUpperCase() + city.slice(1);

    try {
      const resp = await fetch("/api/simulate/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputs, city: payloadCity }),
      });

      if (!resp.ok) {
        const res = await fetch("/api/simulate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ inputs, city: payloadCity }),
        });
        const data = await res.json();
        if (data?.result) {
          setResult(data.result);
          return;
        }
      }

      const json = await resp.json();
      if (json?.result) setResult(json.result);
    } catch (e) {
      localComputeAndSet();
    }
  }

  function onSimClick() {
    if (method === "preset") return alert("Select a preset first.");
    if (method === "mc")
      return runMonteCarlo(
        +(document.getElementById("mcRuns") as HTMLInputElement)?.value || 40
      );
    if (method === "ai") {
      applyAISuggestion();
      return alert("AI suggestion applied — press Simulate.");
    }

    runSimulation();
  }

  async function handleSaveScenario() {
    const name = prompt("Name this scenario:", "My Scenario");
    if (!name) return;
    try {
      await saveScenario(
        name,
        city === "main"
          ? "Global"
          : city.charAt(0).toUpperCase() + city.slice(1)
      );
      alert("Saved.");
    } catch (err) {
      console.error('Failed to save scenario:', err);
      alert(`Failed to save scenario: ${err.message || 'Unknown error'}`);
    }
  }
// --- NEW PRESET DATA ---
  const presets = [
    {
      name: "Business-as-Usual",
      inputs: { co2: 85, def: 80, ren: 10, pol: 20, pop: 60, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "Net-Zero by 2050",
      inputs: { co2: 25, def: 15, ren: 90, pol: 75, pop: 10, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: true, reforest_int: 80, ccapture: true, ccapture_int: 60, transport: true, transport_int: 90, urbangreen: true, urbangreen_int: 50 },
    },
    {
      name: "Renewable Energy Focus",
      inputs: { co2: 30, def: 40, ren: 95, pol: 50, pop: 20, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: true, transport_int: 70, urbangreen: false },
    },
    {
      name: "Maximum Deforestation",
      inputs: { co2: 70, def: 95, ren: 30, pol: 10, pop: 70, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "Advanced Geo-Engineering",
      inputs: { co2: 60, def: 50, ren: 40, pol: 30, pop: 40, airweaver: true, airweaver_int: 90, algae: true, algae_int: 70, cryo: true, cryo_int: 95, biosynth: true, biosynth_int: 60, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "Heavy Carbon Capture",
      inputs: { co2: 50, def: 40, ren: 60, pol: 50, pop: 30, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: true, ccapture_int: 95, transport: true, transport_int: 50, urbangreen: false },
    },
    {
      name: "Global Green Cities",
      inputs: { co2: 40, def: 30, ren: 70, pol: 85, pop: 5, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: true, transport_int: 80, urbangreen: true, urbangreen_int: 90 },
    },
    {
      name: "Population Control Focus",
      inputs: { co2: 50, def: 50, ren: 50, pol: 50, pop: -15, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "Immediate High-Impact Action",
      inputs: { co2: 10, def: 5, ren: 99, pol: 99, pop: 0, airweaver: true, airweaver_int: 50, algae: true, algae_int: 50, cryo: false, biosynth: false, reforest: true, reforest_int: 99, ccapture: true, ccapture_int: 90, transport: true, transport_int: 95, urbangreen: true, urbangreen_int: 80 },
    },
    {
      name: "Stagnation Scenario",
      inputs: { co2: 50, def: 50, ren: 50, pol: 50, pop: 50, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "Nature-Based Solutions",
      inputs: { co2: 60, def: 10, ren: 50, pol: 70, pop: 30, airweaver: false, algae: true, algae_int: 80, cryo: false, biosynth: true, biosynth_int: 90, reforest: true, reforest_int: 95, ccapture: false, transport: false, urbangreen: true, urbangreen_int: 60 },
    },
    {
      name: "Economic Collapse (Low CO₂)",
      inputs: { co2: 5, def: 5, ren: 5, pol: 5, pop: -20, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "High-Pollution, Low-Deforestation",
      inputs: { co2: 80, def: 20, ren: 30, pol: 5, pop: 40, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "Global Electrification",
      inputs: { co2: 35, def: 40, ren: 80, pol: 60, pop: 20, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: true, transport_int: 99, urbangreen: false },
    },
    {
      name: "Balanced", // Original
      inputs: { co2: 50, def: 40, ren: 50, pol: 50, pop: 0, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "High Emissions", // Original
      inputs: { co2: 80, def: 70, ren: 20, pol: 65, pop: 20, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
    {
      name: "Renewable Boost", // Original
      inputs: { co2: 30, def: 20, ren: 85, pol: 40, pop: 5, airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false },
    },
  ];

  function applyPreset(preset) {
    setInputs((prevInputs) => ({
      // Start with default inputs to ensure all keys are present but prioritize preset values
      co2: 50, def: 50, ren: 50, pol: 50, pop: 0,
      airweaver: false, algae: false, cryo: false, biosynth: false, reforest: false, ccapture: false, transport: false, urbangreen: false,
      airweaver_int: 0, algae_int: 0, cryo_int: 0, biosynth_int: 0, reforest_int: 0, ccapture_int: 0, transport_int: 0, urbangreen_int: 0,
      // Override with the preset's specific values
      ...prevInputs, // Keep any user modifications before applying the preset
      ...preset.inputs,
    }));
    alert(`Applied "${preset.name}" preset. Now press Simulate.`);
  }
  // --- END NEW PRESET DATA ---
  return (
    <section className="card" id="link">
      <h3 style={{ marginTop: 0 }}>GAIA Link — Simulation Hub</h3>

      {/* TABS */}
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <div
          className={`subtab ${city === "main" ? "active" : ""}`}
          onClick={() => setCity("main")}
        >
          Global
        </div>
        <div
          className={`subtab ${city === "delhi" ? "active" : ""}`}
          onClick={() => setCity("delhi")}
        >
          Delhi
        </div>
        <div
          className={`subtab ${city === "mumbai" ? "active" : ""}`}
          onClick={() => setCity("mumbai")}
        >
          Mumbai
        </div>
        <div
          className={`subtab ${city === "darjeeling" ? "active" : ""}`}
          onClick={() => setCity("darjeeling")}
        >
          Darjeeling
        </div>
      </div>

      {/* IMAGE ROW */}
      <div
        style={{
          marginTop: 20,
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* CURRENT IMAGE */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <label style={{ display: "block", marginBottom: 6 }}>
            Current satellite view
          </label>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 12,
            }}
          >
            <img
              src={cityImage(city)}
              alt="current"
              style={{
                width: city === "main" ? "100%" : "75%",
                height: 300,
                objectFit: "cover",
                borderRadius: 12,
              }}
            />
            <div
              className="pill"
              style={{ position: "absolute", top: 8, left: 8 }}
            >
              Current State
            </div>
          </div>
        </div>

        {/* PROJECTED IMAGE */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <label style={{ display: "block", marginBottom: 6 }}>
            Projected image
          </label>

          {/* GLOBAL */}
          {city === "main" && (
            <div
              style={{
                width: 480,
                height: 300,
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
                alt="pred-global"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 12,
                }}
              />

              <div
  style={{
    position: "absolute",
    inset: 0,
    borderRadius: 12,
    pointerEvents: "none",
    zIndex: 2,
    background: getTintColor(result?.index),
    mixBlendMode: "overlay",
  }}
/>


              <div
                className="pill"
                style={{ position: "absolute", top: 8, right: 8 }}
              >
                {result?.tempDrift
                  ? `Projected +${result.tempDrift}°C`
                  : "Projected"}
              </div>
            </div>
          )}

          {/* CITIES */}
          {city !== "main" && (
            <div
              style={{
                width: 400,
                height: 300,
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={cityImage(city)}
                alt="pred-city"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 12,
                }}
              />

              <div
  style={{
    position: "absolute",
    inset: 0,
    borderRadius: 12,
    pointerEvents: "none",
    zIndex: 2,
    background: getTintColor(result?.index),
    mixBlendMode: "overlay",
  }}
/>


              <div
                className="pill"
                style={{ position: "absolute", top: 8, right: 8 }}
              >
                {result?.tempDrift
                  ? `Projected +${result.tempDrift}°C`
                  : "Projected"}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CO2 GRAPH */}
      <div style={{ marginTop: 20 }}>
        <div className="card">
          <strong>CO₂ Levels Over Time</strong>
          <RealTimeGraph
            title="CO₂ History"
            data={co2History}
            color={"#2de8a7"}
          />
        </div>
      </div>

      {/* METHOD TABS */}
      <div className="muted" style={{ marginTop: 20 }}>
        Choose a simulation method…
      </div>

      <div style={{ marginTop: 12 }} className="subtabs">
        <div
          
          className={`subtab ${method === "manual" ? "active" : ""}`}
          onClick={() => setMethod("manual")}
        >
          Manual
        </div>
        <div
          className={`subtab ${method === "preset" ? "active" : ""}`}
          onClick={() => setMethod("preset")}
        >
          Preset
        </div>
        <div
          className={`subtab ${method === "mc" ? "active" : ""}`}
          onClick={() => setMethod("mc")}
        >
          Monte-Carlo
        </div>
        <div
          className={`subtab ${method === "ai" ? "active" : ""}`}
          onClick={() => setMethod("ai")}
        >
          AI Suggestion
        </div>
      </div>

      {/* CONTROLS (unchanged) */}
{/* PRESET SCENARIOS (REVISED) */}
{method === "preset" && (
  <div className="method-block" style={{ marginTop: 12 }}>
    <strong>Preset Scenarios (17 Options)</strong>

    <div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
      {presets.map((preset) => (
        <button
          key={preset.name}
          className="gaia-btn"
          onClick={() => applyPreset(preset)}
        >
          {preset.name}
        </button>
      ))}
    </div>
  </div>
)}

{/* MONTE-CARLO */}
{method === "mc" && (
  <div className="method-block" style={{ marginTop: 12 }}>
    <strong>Monte-Carlo Simulation</strong>

    <div style={{ marginTop: 10 }}>
      <label>Number of runs</label>
      <input
        id="mcRuns"
        type="number"
        min="10"
        max="500"
        defaultValue={40}
        style={{ width: 120, marginLeft: 10 }}
      />
    </div>

    <button
      className="gaia-btn primary"
      style={{ marginTop: 10 }}
      onClick={() => {
        const runs =
          +(document.getElementById("mcRuns") as HTMLInputElement)?.value || 40;
        runMonteCarlo(runs);
      }}
    >
      Run Monte-Carlo
    </button>
  </div>
)}

{/* AI SUGGESTION */}
{method === "ai" && (
  <div className="method-block" style={{ marginTop: 12 }}>
    <strong>AI-Optimized Intervention Suggestion</strong>

    <p className="muted" style={{ marginTop: 6 }}>
      GAIA AI will analyze your current sliders and generate an optimized plan.
    </p>

    <button
      className="gaia-btn primary"
      style={{ marginTop: 10 }}
      onClick={() => {
        applyAISuggestion();
        alert("AI suggestion applied — now press Simulate.");
      }}
    >
      Generate AI Suggestion
    </button>
  </div>
)}

      {method === "manual" && (
        <div id="method-manual" className="method-block" style={{ marginTop: 12 }}>
          <div className="controls">
            <div>
              <label>CO₂ Emissions index <HelpTooltip title="CO₂ Emissions Index">Adjust this slider to set the level of carbon dioxide emissions in the simulation. Higher values indicate more emissions, affecting temperature and biodiversity.</HelpTooltip></label>
              <input
                type="range"
                min="0"
                max="100"
                value={inputs.co2}
                onChange={(e) =>
                  handleInputChange("co2", +e.target.value)
                }
              />
            </div>

            <div className="form-row">
              <div style={{ flex: 1 }}>
                <label>Deforestation pressure <HelpTooltip title="Deforestation Pressure">Set the rate of deforestation. Higher values mean more forest loss, impacting biodiversity and carbon sequestration.</HelpTooltip></label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={inputs.def}
                  onChange={(e) =>
                    handleInputChange("def", +e.target.value)
                  }
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Renewables <HelpTooltip title="Renewables">Percentage of energy from renewable sources. Higher values reduce emissions and improve sustainability.</HelpTooltip></label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={inputs.ren}
                  onChange={(e) =>
                    handleInputChange("ren", +e.target.value)
                  }
                />
              </div>
            </div>

            <div className="form-row">
              <div style={{ flex: 1 }}>
                <label>Pollution control <HelpTooltip title="Pollution Control">Level of pollution control measures. Higher values mean better air and water quality.</HelpTooltip></label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={inputs.pol}
                  onChange={(e) =>
                    handleInputChange("pol", +e.target.value)
                  }
                />
              </div>
              <div style={{ width: 160 }}>
                <label>Population growth <HelpTooltip title="Population Growth">Adjust population growth rate. Positive values increase demand on resources.</HelpTooltip></label>
                <input
                  type="range"
                  min="-20"
                  max="80"
                  value={inputs.pop}
                  onChange={(e) =>
                    handleInputChange("pop", +e.target.value)
                  }
                />
              </div>
            </div>

            <div className="divider" style={{ height: 1, margin: "6px 0", background: "rgba(255,255,255,0.05)" }} />

            <label>Advanced interventions <HelpTooltip title="Advanced Interventions">Enable and adjust intensity of advanced technologies like geo-engineering and reforestation to combat climate change.</HelpTooltip></label>
            <div className="toggle">
              {[
                ["airweaver", "AirWeaver Towers", "airweaver_int"],
                ["algae", "Algae Seeding", "algae_int"],
                ["cryo", "Cryo Cooling", "cryo_int"],
                ["biosynth", "BioSynth Pods", "biosynth_int"],
                ["reforest", "Reforestation", "reforest_int"],
                ["ccapture", "Carbon Capture", "ccapture_int"],
                ["transport", "Transport Electrification", "transport_int"],
                ["urbangreen", "Urban Greening", "urbangreen_int"],
              ].map(([id, label, intKey]) => (
                <div key={id} style={{ minWidth: 220 }}>
                  <input
                    type="checkbox"
                    checked={!!inputs[id]}
                    onChange={(e) =>
                      handleInputChange(id, e.target.checked)
                    }
                  />
                  <label>{label}</label>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={inputs[intKey] || 0}
                    onChange={(e) =>
                      handleInputChange(intKey, +e.target.value)
                    }
                  />
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <button className="gaia-btn primary" onClick={onSimClick}>
                Simulate Now <HelpTooltip title="Simulate Now">Runs the simulation based on your current inputs, calculating the impact on Earth's systems like temperature, biodiversity, and sea levels.</HelpTooltip>
              </button>
              <button className="gaia-btn ghost" onClick={handleSaveScenario}>
                Save Scenario <HelpTooltip title="Save Scenario">Saves the current simulation inputs and results for later reference.</HelpTooltip>
              </button>
              <button
                className="gaia-btn danger"
                onClick={() => {
                  localStorage.removeItem("gaia_result");
                  setResult(null);
                }}
              >
                Reset <HelpTooltip title="Reset">Clears the current simulation results and resets the form to default values.</HelpTooltip>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUMMARY */}
      <div
        style={{
          marginTop: 20,
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <div className="gauge">
          <Gauge value={result?.index ?? "—"} />
        </div>
        <div style={{ flex: 1 }}>
          <div className="pill">
            {result
              ? `Symbiosis ${result.index} — ΔT: ${result.tempDrift}°C · Bio ${result.biodiversity} · Sea +${result.seaLevel}`
              : "Run a simulation"}
          </div>
        </div>
      </div>
    </section>
  );
}
