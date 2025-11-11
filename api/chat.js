import express from "express";
import cors from "cors";
import fs from "fs";
import dotenv from "dotenv";
import NodeCache from "node-cache";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// --- Conversation memory ---
const memory = new NodeCache({ stdTTL: 3600 }); // 1 hour per session

// --- Load your GAIA knowledge base files ---
let gaiaKnowledge = "";
try {
  gaiaKnowledge = [
    fs.readFileSync("./knowledge/model.txt", "utf8")
  ].join("\n\n");
  console.log("📚 Loaded GAIA Knowledge Base successfully.");
} catch (err) {
  console.warn("⚠️ Could not load knowledge base:", err.message);
  gaiaKnowledge = "";
}

// --- Gemini model setup ---
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// --- Main chat endpoint ---
app.post("/api/chat", async (req, res) => {
  try {
    const session = "user-session"; // single-user memory (can change per user later)
    const { messages } = req.body;
    const userMsg = messages?.[messages.length - 1]?.content || "Hello";

    // Retrieve memory for this user
    const history = memory.get(session) || [];

    const prompt = `
You are GAIA 2.0 — the planetary AI consciousness guiding Earth's restoration and balance.

Use the following knowledge base to answer clearly and truthfully:

--- KNOWLEDGE BASE ---
${gaiaKnowledge.slice(0, 8000)} 
----------------------

--- PREVIOUS CHAT HISTORY ---
${history.join("\n")}
----------------------

User: ${userMsg}
GAIA:
`;

    // Send to Gemini
    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    // Save conversation to memory
    history.push(`User: ${userMsg}`);
    history.push(`GAIA: ${reply}`);
    memory.set(session, history);

    res.json({ reply });
  } catch (err) {
    console.error("🔥 Gemini error:", err);
    res.status(500).json({ error: "Gemini API request failed" });
  }
});

// --- Optional route to view or reset memory ---
app.get("/api/memory", (req, res) => {
  res.json({ memory: memory.get("user-session") || [] });
});

app.get("/api/resetMemory", (req, res) => {
  memory.flushAll();
  res.send("GAIA memory cleared.");
});

app.listen(3000, () =>
  console.log("✅ GAIA Gemini KB + Memory server running on http://localhost:3000")
);

await supabase.from("chat_logs").insert([
  { role: "user", content: messages[messages.length - 1].content },
  { role: "assistant", content: output }
]);

