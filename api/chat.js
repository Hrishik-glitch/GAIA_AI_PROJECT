import fs from "fs";
import path from "path";
import NodeCache from "node-cache";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client using environment variables
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Memory cache (lives per-function invocation, but can persist short term)
const memory = new NodeCache({ stdTTL: 3600 }); // 1 hour TTL per user

// Load GAIA Knowledge Base (synchronously on cold start)
let gaiaKnowledge = "";
try {
  gaiaKnowledge = [
    fs.readFileSync(path.resolve("./knowledge/model.txt"), "utf8"),
    fs.readFileSync(path.resolve("./knowledge/ppt.txt"), "utf8"),
    fs.readFileSync(path.resolve("./knowledge/idea.txt"), "utf8"),
    fs.readFileSync(path.resolve("./knowledge/script.txt"), "utf8")
  ].join("\n\n");
  console.log("📚 GAIA Knowledge Base loaded successfully.");
} catch (err) {
  console.warn("⚠️ Could not load knowledge base:", err.message);
  gaiaKnowledge = "";
}

// Gemini setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

// Main serverless function (Vercel-compatible)
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const session = "user-session"; // You can make this dynamic per user later
    const { messages } = req.body;

    const userMsg = messages?.[messages.length - 1]?.content || "Hello";
    const history = memory.get(session) || [];

    // Create the combined prompt
    const prompt = `
You are GAIA 2.0 — the planetary AI consciousness guiding Earth's restoration.

Use this knowledge base to answer precisely and truthfully.

--- KNOWLEDGE BASE ---
${gaiaKnowledge.slice(0, 8000)}
----------------------

--- CHAT MEMORY ---
${history.join("\n")}
----------------------

User: ${userMsg}
GAIA:
`;

    // Generate reply from Gemini
    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    // Save in-memory conversation
    history.push(`User: ${userMsg}`);
    history.push(`GAIA: ${reply}`);
    memory.set(session, history);

    // Save chat in Supabase
    await supabase.from("chat_logs").insert([
      { role: "user", content: userMsg },
      { role: "assistant", content: reply }
    ]);

    // Respond to client
    return res.status(200).json({ reply });
  } catch (err) {
    console.error("🔥 GAIA error:", err);
    return res.status(500).json({ error: "Gemini API or Supabase error" });
  }
}
