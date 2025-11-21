import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";

// GEMINI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

// SUPABASE
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON!
);

// Extract JSON even when Gemini mixes text + JSON
function extractJson(text: string) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try {
    return JSON.parse(match[0]);
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const currentInputs = body.inputs;

    // Load last 10 symbiosphere logs
    const { data: reports } = await supabase
      .from("symbiosphere_reports")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10);

    const { data: lastScenario } = await supabase
      .from("scenarios")
      .select("result_json")
      .order("id", { ascending: false })
      .limit(1)
      .maybeSingle();

    const prompt = `
You are **GAIA 2.0**, planetary-scale cognitive system.

Goal: Generate an **improved environmental scenario** based on:

1. Current slider inputs  
2. Recent symbiosphere reports  
3. Last predicted scenario (if exists)

--- CURRENT INPUTS ---
${JSON.stringify(currentInputs, null, 2)}

--- SYMBIOSPHERE REPORTS (latest 10) ---
${JSON.stringify(reports || [], null, 2)}

--- LAST PREDICTION ---
${JSON.stringify(lastScenario || {}, null, 2)}

Output a refined scenario that maximizes the Symbiosis Index using realistic environmental tradeoffs.

Respond with:

ANALYSIS:
<free GAIA-style reasoning>

JSON:
{
  "co2": Number(0-100),
  "def": Number(0-100),
  "ren": Number(0-100),
  "pol": Number(0-100),
  "pop": Number(-20 to 80),

  "airweaver": Boolean,
  "airweaver_int": Number(0-100),

  "algae": Boolean,
  "algae_int": Number(0-100),

  "cryo": Boolean,
  "cryo_int": Number(0-100),

  "biosynth": Boolean,
  "biosynth_int": Number(0-100),

  "reforest": Boolean,
  "reforest_int": Number(0-100),

  "ccapture": Boolean,
  "ccapture_int": Number(0-100),

  "transport": Boolean,
  "transport_int": Number(0-100),

  "urbangreen": Boolean,
  "urbangreen_int": Number(0-100)
}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const json = extractJson(text);

    if (!json) {
      return NextResponse.json(
        { error: "Could not extract JSON", raw: text },
        { status: 500 }
      );
    }

    // Save to Supabase
    const { data: saveData } = await supabase
      .from("ai_suggestions")
      .insert([
        {
          inputs_json: currentInputs,
          suggestion_json: json,
          full_text: text.slice(0, 8000)
        }
      ])
      .select()
      .single();

    return NextResponse.json({
      analysis: text,
      suggestion: json,
      id: saveData?.id ?? null
    });
  } catch (err: any) {
    console.error("🔥 Suggest API error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
