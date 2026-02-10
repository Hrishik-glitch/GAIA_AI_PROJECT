import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON!
);

// Extract a JSON block even if Gemini rambling surrounds it
function extractJson(text: string) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try {
    return JSON.parse(match[0]);
  } catch {
    return null;
  }
}

export async function GET() {
  try {
    // 1) Fetch last scenario
    const { data: lastScenario } = await supabase
      .from("scenarios")
      .select("result_json, inputs_json, created_at, city")
      .order("id", { ascending: false })
      .limit(1)
      .maybeSingle();

    // 2) Fetch latest symbiosphere batch
    const { data: symbio } = await supabase
      .from("symbiosphere_reports")
      .select("ai_json, level, category, created_at, city")
      .order("id", { ascending: false })
      .limit(5);

    // 3) Fetch GAIA world-state cache
    const { data: cache } = await supabase
      .from("gaia_state_cache")
      .select("*")
      .eq("id", 1)
      .maybeSingle();

    const prompt = `
You are GAIA 2.0, the planetary cognition engine.

Using the latest system data, produce a **unified GAIA world-state object**.

--- SCENARIO ---
${JSON.stringify(lastScenario || {}, null, 2)}

--- SYMBIOSPHERE (LATEST 5) ---
${JSON.stringify(symbio || [], null, 2)}

--- EXISTING GAIA CACHE ---
${JSON.stringify(cache || {}, null, 2)}

Your job: Merge these signals and produce:
1. GAIA's interpretation of Earth's immediate condition.
2. Nexus visual parameters.
3. GAIA-Link short environmental summary.
4. A global "risk index" (0-1).
5. Color tint for predicted Earth overlay.
6. A friendly short message users can read.
7. City-specific data for Global, Delhi, Mumbai, Darjeeling based on the scenario and symbiosphere data.

Determine the city from the scenario and symbiosphere data (default to Global if not specified).

Respond like this:

ANALYSIS:
<free GAIA internal reasoning>

JSON:
{
  "risk": Number(0-1),
  "earth_tint": "#aabbcc",
  "mood": "Harmonic" | "Tense" | "Critical",
  "nexus": {
    "chaos": Number(0-3),
    "hue": Number(0-360)
  },
  "gaia_link": {
    "delta_temp": Number,
    "biodiversity": Number,
    "sea_level": Number
  },
  "city_gaia": {
    "Global": {
      "index": Number(0-100),
      "risk": Number(0-1),
      "tint": "#aabbcc"
    },
    "Delhi": {
      "index": Number(0-100),
      "risk": Number(0-1),
      "tint": "#aabbcc"
    },
    "Mumbai": {
      "index": Number(0-100),
      "risk": Number(0-1),
      "tint": "#aabbcc"
    },
    "Darjeeling": {
      "index": Number(0-100),
      "risk": Number(0-1),
      "tint": "#aabbcc"
    }
  },
  "summary": "short readable one-sentence summary"
}
`;

    const g = await model.generateContent(prompt);
    const text = g.response.text();
    const json = extractJson(text);

    if (!json)
      return NextResponse.json(
        { error: "Gemini returned no JSON", raw: text },
        { status: 500 }
      );

    // Update global cache
    await supabase
      .from("gaia_state_cache")
      .upsert(
        {
          id: 1,
          merged_state: json,
          ai_summary: json.summary,
          updated_at: new Date().toISOString()
        },
        { onConflict: "id" }
      );

    return NextResponse.json({
      state: json,
      raw: text
    });
  } catch (err: any) {
    console.error("🔥 STATE API error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
