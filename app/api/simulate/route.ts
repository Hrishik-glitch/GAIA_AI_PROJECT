// app/api/simulate/route.ts

import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON!
);

// Extract JSON from Gemini mixed response
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
      return NextResponse.json(
        { error: "Missing simulation inputs" },
        { status: 400 }
      );
    }

    // Load symbiosphere data
    const { data: symbio } = await supabase
      .from("symbiosphere_reports")
      .select("ai_json, level, category, created_at")
      .order("id", { ascending: false })
      .limit(10);

    // Load global GAIA state
    const { data: gaiaCache } = await supabase
      .from("gaia_state_cache")
      .select("*")
      .eq("id", 1)
      .maybeSingle();

    const prompt = `
You are GAIA 2.0 — the planetary-scale intelligence.

A new simulation request has arrived. You must produce:

1. A full environmental prediction
2. A clean JSON block with environmental metrics
3. High-level insights
4. Recommended interventions

--- USER INPUTS (SLIDERS) ---
${JSON.stringify(inputs, null, 2)}

--- RECENT SYMBIOSPHERE (LATEST 10) ---
${JSON.stringify(symbio || [], null, 2)}

--- GLOBAL GAIA STATE ---
${JSON.stringify(gaiaCache || {}, null, 2)}

Use real climate logic — increased CO₂ raises ΔT, deforestation affects biodiversity, etc.

Respond like:

ANALYSIS:
<free-form detailed GAIA reasoning>

JSON:
{
  "symbiosis_index": Number(0-100),
  "temperature_rise_celsius": Number,
  "biodiversity_score": Number(0-100),
  "sea_level_rise_meters": Number,
  "pollution_index": Number(0-100),

  "future_tint_hex": "#rrggbb",
  "risk_index": Number(0-1),

  "interventions_effect": {
    "airweaver": Number,
    "algae": Number,
    "cryo": Number,
    "biosynth": Number,
    "reforest": Number,
    "ccapture": Number,
    "transport": Number,
    "urbangreen": Number
  },

  "recommended_actions": [
    "string",
    "string"
  ],

  "summary": "short readable summary"
}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const json = extractJson(text);

    if (!json) {
      return NextResponse.json(
        { error: "Gemini did not return valid JSON", raw: text },
        { status: 500 }
      );
    }

const payloadLocation = body.city || 'Global';

const { data: inserted } = await supabase
  .from("scenarios")
  .insert([
    {
      inputs_json: inputs,
      result_json: json,
      ai_analysis: text.slice(0, 8000),
      location: payloadLocation
    }
  ])
  .select()
  .single();


    // Update GAIA global state
    await supabase
      .from("gaia_state_cache")
      .upsert(
        {
          id: 1,
          last_scenario_id: inserted?.id ?? null,
          merged_state: json,
          ai_summary: json.summary,
          earth_tint: json.future_tint_hex,
          risk_val: json.risk_index,
          updated_at: new Date().toISOString()
        },
        { onConflict: "id" }
      );

    return NextResponse.json({
      success: true,
      analysis: text,
      result: json,
      scenario_id: inserted?.id ?? null
    });

  } catch (err: any) {
    console.error("🔥 SIMULATE API error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
