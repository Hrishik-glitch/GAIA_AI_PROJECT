import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

export async function safeGemini(prompt: string) {
  const MAX_RETRIES = 4;
  let wait = 700;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await model.generateContent(prompt);
    } catch (err: any) {
      const status = err?.status || err?.statusCode || null;

      // model overloaded OR rate limit
      const retriable = status === 503 || status === 429;

      if (attempt === MAX_RETRIES || !retriable) {
        throw err;
      }

      console.warn(`⚠️ Gemini attempt ${attempt} failed — retrying in ${wait}ms`);
      await new Promise((r) => setTimeout(r, wait));
      wait *= 2; // exponential backoff
    }
  }
}
