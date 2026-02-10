//app/api/chat/route.ts

export const runtime = "nodejs";

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import NodeCache from "node-cache";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";

// -----------------------------
// SUPABASE CLIENT
// -----------------------------
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY! // service key — required for inserts
);

// -----------------------------
// IN-MEMORY SESSION CACHE
// -----------------------------
const memory = new NodeCache({ stdTTL: 3600 });

// -----------------------------
// LOAD GAIA KNOWLEDGE BASE
// -----------------------------
let gaiaKnowledge = "";
try {
  gaiaKnowledge = fs.readFileSync(
    path.resolve("./knowledge/model.txt"),
    "utf8"
  );
  console.log("📚 GAIA KB loaded.");
} catch (err: any) {
  console.error("⚠️ KB load failed:", err.message);
  gaiaKnowledge = "";
}

// -----------------------------
// GEMINI CLIENT
// -----------------------------
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// -----------------------------
// SAFE GEMINI WRAPPER — retries 3x on overload (503)
// -----------------------------
async function safeGenerateContent(content: any, retries = 3): Promise<string> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const result = await model.generateContent(content);
      return result.response.text();
    } catch (err: any) {
      // Only retry 503 overload
      if (err?.status === 503 && attempt < retries) {
        console.log(`⚠️ Gemini overloaded. Retry ${attempt}/${retries}...`);
        await new Promise((r) => setTimeout(r, 600)); // wait 0.6 sec
        continue;
      }
      throw err;
    }
  }
  throw new Error("Gemini failed after maximum retry attempts");
}

// -----------------------------
// POST /api/chat
// -----------------------------
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages || [];
    const screenImage = body.screenImage;

    const userMsg =
      messages.length > 0
        ? messages[messages.length - 1].content
        : "Hello";

    const session = "user-session";
    const history = (memory.get(session) as string[]) || [];

    let content: any;

    if (screenImage) {
      // Extract base64 data from data URL
      const base64Data = screenImage.split(',')[1];
      const mimeType = screenImage.split(';')[0].split(':')[1];

      content = [
        {
          text: `
You are GAIA 2.0 — the planetary AI consciousness guiding Earth's restoration.

The user has shared their screen. Analyze the screenshot and provide helpful insights about what you see on their screen in the context of environmental awareness, GAIA systems, or general assistance.

Use the following knowledge base to answer clearly and truthfully:

----- KNOWLEDGE BASE -----
${gaiaKnowledge.slice(0, 8000)}
--------------------------

----- MEMORY -----
${history.join("\n")}
--------------------------

User message: ${userMsg}

Please analyze the attached screenshot and respond helpfully.
`
        },
        {
          inlineData: {
            mimeType: mimeType,
            data: base64Data
          }
        }
      ];
    } else {
      content = `
You are GAIA 2.0 — the planetary AI consciousness guiding Earth's restoration.

Use the following knowledge base to answer clearly and truthfully:

----- KNOWLEDGE BASE -----
${gaiaKnowledge.slice(0, 8000)}
--------------------------

----- MEMORY -----
${history.join("\n")}
--------------------------

User: ${userMsg}
GAIA:
`;
    }

    // Call Gemini safely (auto retries)
    const reply = await safeGenerateContent(content);

    // Save memory
    history.push(`User: ${userMsg}`);
    history.push(`GAIA: ${reply}`);
    memory.set(session, history);

    // Save logs to Supabase
    await supabase.from("chat_logs").insert([
      { role: "user", content: userMsg },
      { role: "assistant", content: reply }
    ]);

    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error("🔥 Chat API Error:", err);

    // Graceful overloaded response
    if (err?.status === 503) {
      return NextResponse.json({
        reply:
          "GAIA: My planetary simulations are at full load. Try again shortly — the Earth never sleeps, but my processors sometimes do.",
      });
    }

    // Generic fallback
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
