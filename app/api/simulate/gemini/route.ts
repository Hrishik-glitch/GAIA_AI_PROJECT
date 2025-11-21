// app/api/simulate/gemini/route.ts

import { NextResponse } from "next/server";
import { safeGemini } from "@/lib/geminiRetry";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON!
);

function extractJson(text: string) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try { return JSON.parse(match[0]); }
  catch { return null; }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const inputs = body.inputs;

    if (!inputs) {
      return NextResponse.json({ error: "Missing simulation inputs" }, { status: 400 });
    }

    const prompt = `You are GAIA 2.0 — the planetary-scale intelligence.

Analyze this simulation and produce a detailed environmental prediction:

--- USER INPUTS (SLIDERS) ---
${JSON.stringify(inputs, null, 2)}

Use real climate logic:
- Higher CO₂ (>70) raises temperature significantly, decreases biodiversity, increases sea level
- Higher deforestation (>60) decreases biodiversity, raises temperature
- Higher renewables (>70) decreases temperature, increases biodiversity
- Higher pollution control (>60) increases biodiversity
- Each intervention has specific effects on the index

Return your response with an ANALYSIS section followed by a JSON block:

ANALYSIS:
<detailed reasoning about the environmental impact>

JSON:
{
  "index": Number(0-100),
  "tempDrift": Number (in Celsius, can be negative or positive),
  "biodiversity": Number(0-100),
  "seaLevel": Number(in meters, usually 0-1),
  "summary": "one-line description"
}`;

    const g = await safeGemini(prompt);
    const text = await g.response.text();
    const json = extractJson(text);

    if (!json) {
      return NextResponse.json({ error: "Gemini did not return valid JSON", raw: text }, { status: 500 });
    }

    // Ensure numeric fields are numbers
    const result = {
      index: parseInt(json.index) || 50,
      tempDrift: parseFloat(json.tempDrift) || 0,
      biodiversity: parseInt(json.biodiversity) || 50,
      seaLevel: parseFloat(json.seaLevel) || 0,
      summary: json.summary || "Simulation complete"
    };
    

const payloadLocation = body.city || 'Global';

const { data: inserted } = await supabase
  .from("scenarios")
  .insert([
    {
      inputs_json: inputs,
      result_json: result,
      ai_analysis: text.slice(0, 8000),
      location: payloadLocation
    }
  ])
  .select()
  .single();

    // Update gaia_state_cache
    await supabase
      .from("gaia_state_cache")
      .upsert(
        {
          id: 1,
          last_scenario_id: inserted?.id ?? null,
          merged_state: result,
          ai_summary: result.summary,
          updated_at: new Date().toISOString()
        },
        { onConflict: "id" }
      );




    return NextResponse.json({ result, analysis: text });
  } catch (err: any) {
    console.error("/api/simulate/gemini error:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
