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
"[project]/app/api/simulate/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-route] (ecmascript) <locals>");
;
;
;
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
});
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(process.env.SUPABASE_URL, process.env.SUPABASE_ANON);
// Extract JSON from Gemini mixed response
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
        // Load symbiosphere data
        const { data: symbio } = await supabase.from("symbiosphere_reports").select("ai_json, level, category, created_at").order("id", {
            ascending: false
        }).limit(10);
        // Load global GAIA state
        const { data: gaiaCache } = await supabase.from("gaia_state_cache").select("*").eq("id", 1).maybeSingle();
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Gemini did not return valid JSON",
                raw: text
            }, {
                status: 500
            });
        }
        // Save scenario to Supabase
        const { data: inserted } = await supabase.from("scenarios").insert([
            {
                inputs_json: inputs,
                result_json: json,
                ai_analysis: text.slice(0, 8000)
            }
        ]).select().single();
        // Update GAIA global state
        await supabase.from("gaia_state_cache").upsert({
            id: 1,
            last_scenario_id: inserted?.id ?? null,
            merged_state: json,
            ai_summary: json.summary,
            earth_tint: json.future_tint_hex,
            risk_val: json.risk_index,
            updated_at: new Date().toISOString()
        }, {
            onConflict: "id"
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            analysis: text,
            result: json,
            scenario_id: inserted?.id ?? null
        });
    } catch (err) {
        console.error("🔥 SIMULATE API error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e2a213f1._.js.map