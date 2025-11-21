module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/geminiRetry.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "model",
    ()=>model,
    "safeGemini",
    ()=>safeGemini
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
;
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-lite"
});
async function safeGemini(prompt) {
    const MAX_RETRIES = 4;
    let wait = 700;
    for(let attempt = 1; attempt <= MAX_RETRIES; attempt++){
        try {
            return await model.generateContent(prompt);
        } catch (err) {
            const status = err?.status || err?.statusCode || null;
            // model overloaded OR rate limit
            const retriable = status === 503 || status === 429;
            if (attempt === MAX_RETRIES || !retriable) {
                throw err;
            }
            console.warn(`⚠️ Gemini attempt ${attempt} failed — retrying in ${wait}ms`);
            await new Promise((r)=>setTimeout(r, wait));
            wait *= 2; // exponential backoff
        }
    }
}
}),
"[project]/app/api/simulate/gemini/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/simulate/gemini/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$geminiRetry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/geminiRetry.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-route] (ecmascript) <locals>");
;
;
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(process.env.SUPABASE_URL, process.env.SUPABASE_ANON);
function extractJson(text) {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return null;
    try {
        return JSON.parse(match[0]);
    } catch  {
        return null;
    }
}
async function POST(req) {
    try {
        const body = await req.json();
        const inputs = body.inputs;
        if (!inputs) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing simulation inputs"
            }, {
                status: 400
            });
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
        const g = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$geminiRetry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeGemini"])(prompt);
        const text = await g.response.text();
        const json = extractJson(text);
        if (!json) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Gemini did not return valid JSON",
                raw: text
            }, {
                status: 500
            });
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
        const { data: inserted } = await supabase.from("scenarios").insert([
            {
                inputs_json: inputs,
                result_json: result,
                ai_analysis: text.slice(0, 8000),
                location: payloadLocation
            }
        ]).select().single();
        // Update gaia_state_cache
        await supabase.from("gaia_state_cache").upsert({
            id: 1,
            last_scenario_id: inserted?.id ?? null,
            merged_state: result,
            ai_summary: result.summary,
            updated_at: new Date().toISOString()
        }, {
            onConflict: "id"
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            result,
            analysis: text
        });
    } catch (err) {
        console.error("/api/simulate/gemini error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err?.message || String(err)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__33523e5a._.js.map