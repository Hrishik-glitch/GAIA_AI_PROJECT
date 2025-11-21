import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON!
);

// Extract JSON embedded in mixed Gemini text
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

    const { category, location, level, note, photo } = body;

    const prompt = `
You are GAIA 2.0 — a planetary-scale cognitive system.

A new **SymbioSphere environmental report** has arrived.

--- RAW REPORT ---
Category: ${category}
Level: ${level}
Location: ${location}
User Notes: ${note || "none"}
Photo Attached: ${photo ? "YES" : "NO"}
------------------

Analyze this report deeply and produce:

ANALYSIS:
Free GAIA reasoning (ecology, atmospheric chemistry, ecosystems).

JSON:
{
  "pollution_risk": Number(0-1),
  "biodiversity_change": Number(-1 to 1),
  "water_quality_shift": Number(-1 to 1),
  "heat_stress": Number(0-1),

  "summary": "short readable explanation",
  "recommended_interventions": ["...", "..."]
}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const json = extractJson(text);

    if (!json) {
      return NextResponse.json(
        { error: "Gemini returned no valid JSON", raw: text },
        { status: 500 }
      );
    }

    // Store full report
    await supabase.from("symbiosphere_reports").insert([
      {
        category,
        location,
        level,
        note,
        image_base64: photo || null,
        ai_analysis: text.slice(0, 8000),
        ai_json: json
      }
    ]);

    // Update global GAIA state
    await supabase
      .from("gaia_state_cache")
      .upsert(
        {
          id: 1,
          last_event: "symbiosphere_update",
          symbio_analysis: json,
          updated_at: new Date().toISOString()
        },
        { onConflict: "id" }
      );

    return NextResponse.json({
      message: "Report processed successfully",
      analysis: text,
      extracted: json
    });
  } catch (err: any) {
    console.error("🔥 SymbioSphere error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
