module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Header({ onTabChange }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('link');
    function handleClick(tab) {
        setActive(tab);
        onTabChange(tab);
    }
    function resetDemo() {
        localStorage.removeItem('gaia_result');
        localStorage.removeItem('gaia_obs');
        alert('Demo reset — stored simulations and observations cleared.');
        window.location.reload();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "brand",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "GAIA Link — Demo"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "muted",
                                children: "Simulation Hub · SymbioSphere · Nexus — simplified demo"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${active === 'link' ? 'active' : ''}`,
                        onClick: ()=>handleClick('link'),
                        children: "GAIA Link"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${active === 'symbio' ? 'active' : ''}`,
                        onClick: ()=>handleClick('symbio'),
                        children: "SymbioSphere"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${active === 'nexus' ? 'active' : ''}`,
                        onClick: ()=>handleClick('nexus'),
                        children: "Nexus"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "tab ghost",
                        onClick: resetDemo,
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/useGaiaSimulation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/useGaiaSimulation.ts
__turbopack_context__.s([
    "default",
    ()=>useGaiaSimulation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://hpnjbvqozhbbvlsmjkem.supabase.co") || '', ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwbmpidnFvemhiYnZsc21qa2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzYyNzgsImV4cCI6MjA3ODM1MjI3OH0.Il-qvoLYHGVwn_jhl2kSgy8riy2IoVcP8xMBI06iJHE") || '');
function useGaiaSimulation() {
    const [inputs, setInputs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        co2: 40,
        def: 20,
        ren: 55,
        pol: 35,
        pop: 20,
        airweaver: false,
        airweaver_int: 40,
        algae: false,
        algae_int: 30,
        cryo: false,
        cryo_int: 20,
        biosynth: false,
        biosynth_int: 10,
        reforest: false,
        reforest_int: 30,
        ccapture: false,
        ccapture_int: 25,
        transport: false,
        transport_int: 40,
        urbangreen: false,
        urbangreen_int: 30
    });
    const [method, setMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('manual');
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const clamp = (v, min, max)=>Math.max(min, Math.min(max, v));
    // city modifiers map
    const CITY_MODIFIERS = {
        Global: {
            pollutionSensitivity: 1.0,
            tempMultiplier: 1.0
        },
        Delhi: {
            pollutionSensitivity: 1.25,
            tempMultiplier: 1.08
        },
        Mumbai: {
            pollutionSensitivity: 1.10,
            tempMultiplier: 1.04
        },
        Darjeeling: {
            pollutionSensitivity: 0.85,
            tempMultiplier: 0.95
        }
    };
    // core compute but accepts a location string to apply modifiers
    const computeWithCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((vals, location = 'Global')=>{
        const co2 = clamp(vals.co2, 0, 100);
        const def = clamp(vals.def, 0, 100);
        const pop = clamp(vals.pop, -20, 80);
        const ren = clamp(vals.ren, 0, 100);
        const pol = clamp(vals.pol, 0, 100);
        const interventions = {
            airweaver: vals.airweaver ? clamp(vals.airweaver_int, 0, 100) : 0,
            algae: vals.algae ? clamp(vals.algae_int, 0, 100) : 0,
            cryo: vals.cryo ? clamp(vals.cryo_int, 0, 100) : 0,
            biosynth: vals.biosynth ? clamp(vals.biosynth_int, 0, 100) : 0,
            reforest: vals.reforest ? clamp(vals.reforest_int, 0, 100) : 0,
            ccapture: vals.ccapture ? clamp(vals.ccapture_int, 0, 100) : 0,
            transport: vals.transport ? clamp(vals.transport_int, 0, 100) : 0,
            urbangreen: vals.urbangreen ? clamp(vals.urbangreen_int, 0, 100) : 0
        };
        const mod = CITY_MODIFIERS[location] || CITY_MODIFIERS.Global;
        const pollSens = mod.pollutionSensitivity || 1.0;
        // apply modifiers when computing penalties
        const p_co2 = co2 * 0.32 * pollSens;
        const p_def = def * 0.22 * pollSens;
        const p_pop = (pop > 0 ? pop : 0) * 0.10;
        const base_positive = ren * 0.28 + pol * 0.18;
        function eff(x, weight) {
            return weight * (0.2 + 0.8 * Math.tanh(x / 120 * 2.5));
        }
        const iv = interventions;
        const interventionScore = eff(iv.airweaver, 18) + eff(iv.algae, 12) + eff(iv.cryo, 10) + eff(iv.biosynth, 10) + eff(iv.reforest, 24) + eff(iv.ccapture, 16) + eff(iv.transport, 20) + eff(iv.urbangreen, 12);
        let raw = 50 + base_positive * 0.24 + interventionScore * 0.5 - p_co2 * 0.35 - p_def * 0.28 - p_pop * 0.4;
        if (co2 > 80) raw -= (co2 - 80) * 0.35 * pollSens;
        if (def > 70) raw -= (def - 70) * 0.25 * pollSens;
        const index = Math.round(clamp(raw, 0, 100));
        // apply temp multiplier slightly affected by the city modifier
        const tempDrift = Number((co2 / 100 * 2.5 * (mod.tempMultiplier || 1.0) - interventionScore / 200).toFixed(2));
        const biodiversity = Math.round(50 + (index - 50) * 0.6);
        const seaLevel = Number((def / 100 * 0.15 + co2 / 100 * 0.1 - (iv.reforest ? iv.reforest / 100 * 0.02 : 0)).toFixed(3));
        return {
            index,
            tempDrift,
            biodiversity,
            seaLevel,
            interventionsApplied: interventions,
            city: location
        };
    }, []);
    // existing simulate wrapper uses computeWithCity('Global') by default previously — keep a local simulate that still computes locally,
    // but note runSimulation in GaiaLink will call server endpoints which also get `city`.
    const simulate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const r = computeWithCity(inputs, 'Global');
        setResult(r);
        localStorage.setItem('gaia_result', JSON.stringify(r));
        return r;
    }, [
        inputs,
        computeWithCity
    ]);
    const applyAISuggestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setInputs((prev)=>{
            const base = {
                ...prev
            };
            if (base.co2 > 55) {
                base.ren = clamp(base.ren + 25, 0, 100);
                base.ccapture = true;
                base.ccapture_int = 60;
                base.reforest = true;
                base.reforest_int = 45;
                base.transport = true;
                base.transport_int = 50;
            } else if (base.def > 50) {
                base.reforest = true;
                base.reforest_int = 70;
                base.urbangreen = true;
                base.urbangreen_int = 40;
            } else {
                base.pol = clamp(base.pol + 20, 0, 100);
                base.urbangreen = true;
                base.urbangreen_int = 35;
            }
            return base;
        });
    }, []);
    const runMonteCarlo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((runs = 40)=>{
        const results = [];
        for(let i = 0; i < runs; i++){
            const base = JSON.parse(JSON.stringify(inputs));
            [
                'co2',
                'def',
                'ren',
                'pol',
                'pop'
            ].forEach((k)=>{
                const jitter = Math.random() * 0.5 - 0.25;
                base[k] = clamp(Math.round(base[k] * (1 + jitter)), -20, 100);
            });
            [
                'airweaver',
                'algae',
                'cryo',
                'biosynth',
                'reforest',
                'ccapture',
                'transport',
                'urbangreen'
            ].forEach((k)=>{
                if (base[k]) base[k + '_int'] = clamp(Math.round(base[k + '_int'] * (0.6 + Math.random() * 0.9)), 0, 100);
                else if (Math.random() < 0.08) {
                    base[k + '_int'] = Math.round(Math.random() * 60);
                    base[k] = true;
                }
            });
            // run Monte Carlo using Global local compute for distribution; caller can specify city-run if desired.
            const r = computeWithCity(base, 'Global');
            results.push(r.index);
        }
        const avg = Math.round(results.reduce((a, b)=>a + b, 0) / results.length);
        const baseComputed = computeWithCity(inputs, 'Global');
        baseComputed.index = avg;
        setResult(baseComputed);
        localStorage.setItem('gaia_result', JSON.stringify(baseComputed));
        return baseComputed;
    }, [
        inputs,
        computeWithCity
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const raw = localStorage.getItem('gaia_result');
        if (raw) setResult(JSON.parse(raw));
    }, []);
    // saveScenario now accepts optional location and persists to Supabase with `location` column
    const saveScenario = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (name, location)=>{
        const s = JSON.parse(localStorage.getItem('gaia_scenarios') || '[]');
        const payload = {
            name,
            vals: inputs,
            created: Date.now(),
            location: location || 'Global'
        };
        s.push(payload);
        localStorage.setItem('gaia_scenarios', JSON.stringify(s));
        // attempt remote save
        try {
            const prepared = {
                name,
                inputs_json: inputs,
                result_json: result || computeWithCity(inputs, location || 'Global'),
                ai_analysis: null,
                location: location || 'Global',
                created_at: new Date().toISOString()
            };
            const { error } = await supabase.from('scenarios').insert([
                prepared
            ]);
            if (error) {
                console.warn('Supabase insert (saveScenario) returned error:', error);
                throw error;
            }
            return true;
        } catch (err) {
            console.error('saveScenario remote failed:', err);
            console.error('Error details:', JSON.stringify(err, null, 2));
            throw err;
        }
    }, [
        inputs,
        result,
        computeWithCity
    ]);
    const loadScenarioList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        return JSON.parse(localStorage.getItem('gaia_scenarios') || '[]');
    }, []);
    return {
        inputs,
        setInputs,
        method,
        setMethod,
        result,
        simulate,
        applyAISuggestion,
        runMonteCarlo,
        saveScenario,
        loadScenarioList,
        setResult,
        computeWithCity
    };
}
}),
"[project]/lib/useLastSimulation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/useLastSimulation.ts
__turbopack_context__.s([
    "default",
    ()=>useLastSimulation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://hpnjbvqozhbbvlsmjkem.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwbmpidnFvemhiYnZsc21qa2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzYyNzgsImV4cCI6MjA3ODM1MjI3OH0.Il-qvoLYHGVwn_jhl2kSgy8riy2IoVcP8xMBI06iJHE"));
function useLastSimulation() {
    const [lastResult, setLastResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastAnalysis, setLastAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [scenarios, setScenarios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchLastSimulation();
    }, []);
    async function fetchLastSimulation() {
        try {
            const { data: state } = await supabase.from('gaia_state_cache').select('merged_state, ai_summary, last_scenario_id').eq('id', 1).single();
            if (state?.merged_state) {
                setLastResult(state.merged_state);
                setLastAnalysis(state.ai_summary || '');
            }
        } catch (err) {
            console.error('Failed to fetch last simulation:', err);
        } finally{
            setLoading(false);
        }
    }
    async function fetchScenarios() {
        try {
            const { data } = await supabase.from('scenarios').select('id, inputs_json, result_json, ai_analysis, created_at').order('created_at', {
                ascending: false
            }).limit(20);
            setScenarios(data || []);
        } catch (err) {
            console.error('Failed to fetch scenarios:', err);
        }
    }
    async function loadScenario(id) {
        try {
            const { data } = await supabase.from('scenarios').select('*').eq('id', id).single();
            if (data?.result_json) {
                setLastResult(data.result_json);
                setLastAnalysis(data.ai_analysis || '');
            }
        } catch (err) {
            console.error('Failed to load scenario:', err);
        }
    }
    return {
        lastResult,
        lastAnalysis,
        scenarios,
        loading,
        fetchLastSimulation,
        fetchScenarios,
        loadScenario
    };
}
}),
"[project]/components/Gauge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Gauge.tsx
__turbopack_context__.s([
    "default",
    ()=>Gauge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Gauge({ value }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const c = canvasRef.current;
        if (!c) return;
        const ctx = c.getContext('2d');
        const w = c.width, h = c.height;
        ctx.clearRect(0, 0, w, h);
        const idx = typeof value === 'number' ? value : value === '—' ? 50 : Number(value);
        // background arc
        ctx.beginPath();
        ctx.lineWidth = 12;
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.arc(w / 2, h, w * 0.35, Math.PI, 2 * Math.PI, false);
        ctx.stroke();
        // value arc
        const start = Math.PI, end = Math.PI + idx / 100 * Math.PI;
        const hue = idx > 65 ? 150 : idx > 40 ? 45 : 0;
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${hue},80%,60%,0.95)`;
        ctx.lineCap = 'round';
        ctx.arc(w / 2, h, w * 0.35, start, end, false);
        ctx.lineWidth = 12;
        ctx.stroke();
        // text
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.font = '14px sans-serif';
        ctx.fillText((typeof value === 'number' ? value : String(value)) + ' / 100', w / 2 - 22, h - 18);
    }, [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "gauge-arc",
        width: 180,
        height: 90
    }, void 0, false, {
        fileName: "[project]/components/Gauge.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/RealTimeGraph.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RealTimeGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function RealTimeGraph({ title = 'Series', color = '#2de8a7', data = [], height = 120 }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Simple SVG polyline renderer with axes. Recalculates path when data changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const svg = ref.current;
        if (!svg) return;
        const w = svg.clientWidth || 300;
        const h = height;
        if (!data || data.length === 0) {
            const poly = svg.querySelector('polyline');
            if (poly) poly.setAttribute('points', '');
            // Clear axes
            const existingAxes = svg.querySelectorAll('.axis');
            existingAxes.forEach((el)=>el.remove());
            return;
        }
        const xs = data.map((p)=>p.x);
        const ys = data.map((p)=>p.y);
        const xmin = Math.min(...xs);
        const xmax = Math.max(...xs);
        const ymin = Math.min(...ys);
        const ymax = Math.max(...ys);
        const xRange = xmax - xmin || 1;
        const yRange = ymax - ymin || 1;
        const points = data.map((p)=>{
            const x = (p.x - xmin) / xRange * (w - 40) + 40; // offset for y-axis
            const y = h - 20 - (p.y - ymin) / yRange * (h - 40); // offset for x-axis
            return `${x},${y}`;
        }).join(' ');
        const poly = svg.querySelector('polyline');
        if (poly) poly.setAttribute('points', points);
        // Draw axes
        const existingAxes = svg.querySelectorAll('.axis');
        existingAxes.forEach((el)=>el.remove());
        // Y-axis
        const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        yAxis.setAttribute('x1', '40');
        yAxis.setAttribute('y1', '20');
        yAxis.setAttribute('x2', '40');
        yAxis.setAttribute('y2', (h - 20).toString());
        yAxis.setAttribute('stroke', 'var(--muted)');
        yAxis.setAttribute('stroke-width', '1');
        yAxis.classList.add('axis');
        svg.appendChild(yAxis);
        // X-axis
        const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        xAxis.setAttribute('x1', '40');
        xAxis.setAttribute('y1', (h - 20).toString());
        xAxis.setAttribute('x2', w.toString());
        xAxis.setAttribute('y2', (h - 20).toString());
        xAxis.setAttribute('stroke', 'var(--muted)');
        xAxis.setAttribute('stroke-width', '1');
        xAxis.classList.add('axis');
        svg.appendChild(xAxis);
        // Y-axis labels
        for(let i = 0; i <= 5; i++){
            const val = ymin + yRange / 5 * i;
            const yPos = h - 20 - i / 5 * (h - 40);
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', '35');
            text.setAttribute('y', (yPos + 4).toString());
            text.setAttribute('text-anchor', 'end');
            text.setAttribute('font-size', '10');
            text.setAttribute('fill', 'var(--muted)');
            text.textContent = val.toFixed(1);
            text.classList.add('axis');
            svg.appendChild(text);
        }
        // X-axis labels
        for(let i = 0; i <= 5; i++){
            const val = xmin + xRange / 5 * i;
            const xPos = 40 + i / 5 * (w - 40);
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', xPos.toString());
            text.setAttribute('y', (h - 5).toString());
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('font-size', '10');
            text.setAttribute('fill', 'var(--muted)');
            text.textContent = val.toFixed(1);
            text.classList.add('axis');
            svg.appendChild(text);
        }
    }, [
        data,
        height
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            fontSize: 13
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/RealTimeGraph.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 12,
                            color: 'var(--muted)'
                        },
                        children: [
                            data.length,
                            " pts"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RealTimeGraph.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RealTimeGraph.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ref: ref,
                height: height,
                style: {
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "g1",
                            x1: "0",
                            x2: "0",
                            y1: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: color,
                                    stopOpacity: "0.18"
                                }, void 0, false, {
                                    fileName: "[project]/components/RealTimeGraph.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: color,
                                    stopOpacity: "0.02"
                                }, void 0, false, {
                                    fileName: "[project]/components/RealTimeGraph.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RealTimeGraph.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RealTimeGraph.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: 0,
                        y: 0,
                        width: "100%",
                        height: height,
                        fill: "url(#g1)"
                    }, void 0, false, {
                        fileName: "[project]/components/RealTimeGraph.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        fill: "none",
                        stroke: color,
                        strokeWidth: 2,
                        points: "",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/RealTimeGraph.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RealTimeGraph.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RealTimeGraph.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/GaiaLink.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GaiaLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useGaiaSimulation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useLastSimulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useLastSimulation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Gauge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Gauge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RealTimeGraph$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RealTimeGraph.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
// --- NEW PRESET DATA ---
const presets = [
    {
        name: "Business-as-Usual",
        inputs: {
            co2: 85,
            def: 80,
            ren: 10,
            pol: 20,
            pop: 60,
            airweaver: false,
            algae: false,
            cryo: false,
            biosynth: false,
            reforest: false,
            ccapture: false,
            transport: false,
            urbangreen: false
        }
    },
    {
        name: "Net-Zero by 2050",
        inputs: {
            co2: 25,
            def: 15,
            ren: 90,
            pol: 75,
            pop: 10,
            airweaver: false,
            algae: false,
            cryo: false,
            biosynth: false,
            reforest: true,
            reforest_int: 80,
            ccapture: true,
            ccapture_int: 60,
            transport: true,
            transport_int: 90,
            urbangreen: true,
            urbangreen_int: 50
        }
    },
    {
        name: "Renewable Energy Focus",
        inputs: {
            co2: 30,
            def: 40,
            ren: 95,
            pol: 50,
            pop: 20,
            airweaver: false,
            algae: false,
            cryo: false,
            biosynth: false,
            reforest: false,
            ccapture: false,
            transport: true,
            transport_int: 70,
            urbangreen: false
        }
    },
    {
        name: "Maximum Deforestation",
        inputs: {
            co2: 70,
            def: 95,
            ren: 30,
            pol: 10,
            pop: 70,
            airweaver: false,
            algae: false,
            cryo: false,
            biosynth: false,
            reforest: false,
            ccapture: false,
            transport: false,
            urbangreen: false
        }
    },
    {
        name: "Advanced Geo-Engineering",
        inputs: {
            co2: 60,
            def: 50,
            ren: 40,
            pol: 30,
            pop: 40,
            airweaver: true,
            airweaver_int: 90,
            algae: true,
            algae_int: 70,
            cryo: true,
            cryo_int: 95,
            biosynth: true,
            biosynth_int: 60,
            reforest: false,
            ccapture: false,
            transport: false,
            urbangreen: false
        }
    },
    {
        name: "Heavy Carbon Capture",
        inputs: {
            co2: 50,
            def: 40,
            ren: 60,
            pol: 50,
            pop: 30,
            airweaver: false,
            algae: false,
            cryo: false,
            biosynth: false,
            reforest: false,
            ccapture: true,
            ccapture_int: 95,
            transport: true,
            transport_int: 50,
            urbangreen: false
        }
    },
    {
        name: "Global Green Cities",
        inputs: {
            co2: 40,
            def: 30,
            ren: 70,
            pol: 85,
            pop: 5,
            airweaver: false,
            algae: false,
            cryo: false,
            biosynth: false,
            reforest: false,
            ccapture: false,
            transport: true,
            transport_int: 80,
            urbangreen: true,
            urbangreen_int: 90
        }
    },
    {
        name: "Population Control Focus",
        inputs: {
            co2: 50,
            def: 50,
            ren: 50,
            pol: 50,
            pop: -15,
            airweaver: false,
            algae: false,
            cryo: false,
            biosynth: false,
            reforest: false,
            ccapture: false,
            transport: false,
            urbangreen: false
        }
    },
    {
        name: "Immediate High-Impact Action",
        inputs: {
            co2: 10,
            def: 5,
            ren: 99,
            pol: 99,
            pop: 0,
            airweaver: true,
            airweaver_int: 50,
            algae: true,
            algae_int: 50,
            cryo: false,
            biosynth: false,
            reforest: true,
            reforest_int: 99,
            ccapture: true,
            ccapture_int: 90,
            transport: true,
            transport_int: 95,
            urbangreen: true,
            urbangreen_int: 80
        }
    },
    {
        name: "Stagnation Scenario",
        inputs: {
            co2: 50,
            def: 50,
            ren: 50,
            pol: 50,
            pop: 50,
            airweaver: false,
            algae: false,
            cryo: false,
            biosynth: false,
            reforest: false,
            ccapture: false,
            transport: false,
            urbangreen: false
        }
    },
    {
        name: "Nature-Based Solutions",
        inputs: {
            co2: 60,
            def: 10,
            ren: 50,
            pol: 70,
            pop: 30,
            airweaver: false,
            algae: true,
            algae_int: 80,
            cryo: false,
            biosynth: true,
            biosynth_int: 90,
            reforest: true,
            reforest_int: 95,
            ccapture: false,
            transport: false,
            urbangreen: true,
            urbangreen_int: 60
        }
    },
    {
        name: "Economic Collapse (Low CO₂)",
        inputs: {
            co2: 5,
            def: 5,
            ren: 5,
            pol: 5,
            pop: -20,
            airweaver: false,
            algae: false,
            cryo: false,
            biosynth: false,
            reforest: false,
            ccapture: false,
            transport: false,
            urbangreen: false
        }
    },
    {
        name: "High-Pollution, Low-Deforestation",
        inputs: {
            co2: 80,
            def: 20,
            ren: 30,
            pol: 5,
            pop: 40,
            airweaver: false,
            algae: false,
            cryo: false,
            biosynth: false,
            reforest: false,
            ccapture: false,
            transport: false,
            urbangreen: false
        }
    },
    {
        name: "Global Electrification",
        inputs: {
            co2: 35,
            def: 40,
            ren: 80,
            pol: 60,
            pop: 20,
            airweaver: false,
            algae: false,
            cryo: false,
            biosynth: false,
            reforest: false,
            ccapture: false,
            transport: true,
            transport_int: 99,
            urbangreen: false
        }
    },
    {
        name: "Balanced",
        inputs: {
            co2: 50,
            def: 40,
            ren: 50,
            pol: 50,
            pop: 0,
            airweaver: false,
            algae: false,
            cryo: false,
            biosynth: false,
            reforest: false,
            ccapture: false,
            transport: false,
            urbangreen: false
        }
    },
    {
        name: "High Emissions",
        inputs: {
            co2: 80,
            def: 70,
            ren: 20,
            pol: 65,
            pop: 20,
            airweaver: false,
            algae: false,
            cryo: false,
            biosynth: false,
            reforest: false,
            ccapture: false,
            transport: false,
            urbangreen: false
        }
    },
    {
        name: "Renewable Boost",
        inputs: {
            co2: 30,
            def: 20,
            ren: 85,
            pol: 40,
            pop: 5,
            airweaver: false,
            algae: false,
            cryo: false,
            biosynth: false,
            reforest: false,
            ccapture: false,
            transport: false,
            urbangreen: false
        }
    }
];
function cityImage(city) {
    if (city === "delhi") return "/gaia/cities/delhi.png";
    if (city === "mumbai") return "/gaia/cities/mumbai.jpg";
    if (city === "darjeeling") return "/gaia/cities/darjeeling.png";
    return "/gaia/cities/global.png";
}
function getTintColor(index) {
    if (index == null) return "rgba(255,255,255,0.15)"; // fallback
    if (index < 40) {
        // LOW → RED
        return "rgba(255, 0, 0, 3)";
    } else if (index < 70) {
        // MID → ORANGE
        return "rgba(255, 165, 0, 3)";
    } else {
        // HIGH → GREEN
        return "rgba(0, 255, 100, 3)";
    }
}
function GaiaLink() {
    const { inputs, setInputs, method, setMethod, result, simulate, applyAISuggestion, runMonteCarlo, saveScenario, setResult, computeWithCity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const { lastResult } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useLastSimulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("main");
    const [co2History, setCo2History] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [historyIndex, setHistoryIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    function getPreviousInputs() {
        try {
            const raw = localStorage.getItem("gaia_prev_inputs");
            if (raw) return JSON.parse(raw);
        } catch  {}
        return Object.assign({}, inputs, {
            co2: Math.max(0, (inputs.co2 || 50) - 6),
            def: Math.max(0, (inputs.def || 40) - 4),
            ren: Math.max(0, (inputs.ren || 50) - 5),
            pol: Math.max(0, (inputs.pol || 50) - 3),
            pop: (inputs.pop || 0) - 1
        });
    }
    const prev = getPreviousInputs();
    function buildSeries(xKey, yKey) {
        const points = [];
        for(let i = 0; i < 20; i++){
            const xBase = prev[xKey] ?? 0;
            const yBase = inputs[yKey] ?? 0;
            const x = xBase + Math.sin(i / 3) * Math.max(1, xBase * 0.02);
            const y = yBase + Math.cos(i / 4) * Math.max(1, yBase * 0.02);
            points.push({
                x: Math.round(x * 100) / 100,
                y: Math.round(y * 100) / 100
            });
        }
        return points;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCo2History((prev)=>{
            const updated = [
                ...prev,
                {
                    x: historyIndex,
                    y: inputs.co2 || 50
                }
            ];
            if (updated.length > 50) updated.shift();
            return updated;
        });
        setHistoryIndex((v)=>v + 1);
    }, [
        inputs.co2
    ]);
    function handleInputChange(k, v) {
        setInputs((p)=>({
                ...p,
                [k]: v
            }));
    }
    function localComputeAndSet() {
        const loc = city === "main" ? "Global" : city.charAt(0).toUpperCase() + city.slice(1);
        const r = computeWithCity(inputs, loc);
        setResult(r);
        localStorage.setItem("gaia_result", JSON.stringify(r));
    }
    async function runSimulation() {
        const payloadCity = city === "main" ? "Global" : city.charAt(0).toUpperCase() + city.slice(1);
        try {
            const resp = await fetch("/api/simulate/gemini", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    inputs,
                    city: payloadCity
                })
            });
            if (!resp.ok) {
                const res = await fetch("/api/simulate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        inputs,
                        city: payloadCity
                    })
                });
                const data = await res.json();
                if (data?.result) {
                    setResult(data.result);
                    return;
                }
            }
            const json = await resp.json();
            if (json?.result) setResult(json.result);
        } catch (e) {
            localComputeAndSet();
        }
    }
    function onSimClick() {
        if (method === "preset") return alert("Select a preset first.");
        if (method === "mc") return runMonteCarlo(+document.getElementById("mcRuns")?.value || 40);
        if (method === "ai") {
            applyAISuggestion();
            return alert("AI suggestion applied — press Simulate.");
        }
        runSimulation();
    }
    async function handleSaveScenario() {
        const name = prompt("Name this scenario:", "My Scenario");
        if (!name) return;
        try {
            await saveScenario(name, city === "main" ? "Global" : city.charAt(0).toUpperCase() + city.slice(1));
            alert("Saved.");
        } catch (err) {
            console.error('Failed to save scenario:', err);
            alert(`Failed to save scenario: ${err.message || 'Unknown error'}`);
        }
    }
    // --- NEW PRESET DATA ---
    const presets = [
        {
            name: "Business-as-Usual",
            inputs: {
                co2: 85,
                def: 80,
                ren: 10,
                pol: 20,
                pop: 60,
                airweaver: false,
                algae: false,
                cryo: false,
                biosynth: false,
                reforest: false,
                ccapture: false,
                transport: false,
                urbangreen: false
            }
        },
        {
            name: "Net-Zero by 2050",
            inputs: {
                co2: 25,
                def: 15,
                ren: 90,
                pol: 75,
                pop: 10,
                airweaver: false,
                algae: false,
                cryo: false,
                biosynth: false,
                reforest: true,
                reforest_int: 80,
                ccapture: true,
                ccapture_int: 60,
                transport: true,
                transport_int: 90,
                urbangreen: true,
                urbangreen_int: 50
            }
        },
        {
            name: "Renewable Energy Focus",
            inputs: {
                co2: 30,
                def: 40,
                ren: 95,
                pol: 50,
                pop: 20,
                airweaver: false,
                algae: false,
                cryo: false,
                biosynth: false,
                reforest: false,
                ccapture: false,
                transport: true,
                transport_int: 70,
                urbangreen: false
            }
        },
        {
            name: "Maximum Deforestation",
            inputs: {
                co2: 70,
                def: 95,
                ren: 30,
                pol: 10,
                pop: 70,
                airweaver: false,
                algae: false,
                cryo: false,
                biosynth: false,
                reforest: false,
                ccapture: false,
                transport: false,
                urbangreen: false
            }
        },
        {
            name: "Advanced Geo-Engineering",
            inputs: {
                co2: 60,
                def: 50,
                ren: 40,
                pol: 30,
                pop: 40,
                airweaver: true,
                airweaver_int: 90,
                algae: true,
                algae_int: 70,
                cryo: true,
                cryo_int: 95,
                biosynth: true,
                biosynth_int: 60,
                reforest: false,
                ccapture: false,
                transport: false,
                urbangreen: false
            }
        },
        {
            name: "Heavy Carbon Capture",
            inputs: {
                co2: 50,
                def: 40,
                ren: 60,
                pol: 50,
                pop: 30,
                airweaver: false,
                algae: false,
                cryo: false,
                biosynth: false,
                reforest: false,
                ccapture: true,
                ccapture_int: 95,
                transport: true,
                transport_int: 50,
                urbangreen: false
            }
        },
        {
            name: "Global Green Cities",
            inputs: {
                co2: 40,
                def: 30,
                ren: 70,
                pol: 85,
                pop: 5,
                airweaver: false,
                algae: false,
                cryo: false,
                biosynth: false,
                reforest: false,
                ccapture: false,
                transport: true,
                transport_int: 80,
                urbangreen: true,
                urbangreen_int: 90
            }
        },
        {
            name: "Population Control Focus",
            inputs: {
                co2: 50,
                def: 50,
                ren: 50,
                pol: 50,
                pop: -15,
                airweaver: false,
                algae: false,
                cryo: false,
                biosynth: false,
                reforest: false,
                ccapture: false,
                transport: false,
                urbangreen: false
            }
        },
        {
            name: "Immediate High-Impact Action",
            inputs: {
                co2: 10,
                def: 5,
                ren: 99,
                pol: 99,
                pop: 0,
                airweaver: true,
                airweaver_int: 50,
                algae: true,
                algae_int: 50,
                cryo: false,
                biosynth: false,
                reforest: true,
                reforest_int: 99,
                ccapture: true,
                ccapture_int: 90,
                transport: true,
                transport_int: 95,
                urbangreen: true,
                urbangreen_int: 80
            }
        },
        {
            name: "Stagnation Scenario",
            inputs: {
                co2: 50,
                def: 50,
                ren: 50,
                pol: 50,
                pop: 50,
                airweaver: false,
                algae: false,
                cryo: false,
                biosynth: false,
                reforest: false,
                ccapture: false,
                transport: false,
                urbangreen: false
            }
        },
        {
            name: "Nature-Based Solutions",
            inputs: {
                co2: 60,
                def: 10,
                ren: 50,
                pol: 70,
                pop: 30,
                airweaver: false,
                algae: true,
                algae_int: 80,
                cryo: false,
                biosynth: true,
                biosynth_int: 90,
                reforest: true,
                reforest_int: 95,
                ccapture: false,
                transport: false,
                urbangreen: true,
                urbangreen_int: 60
            }
        },
        {
            name: "Economic Collapse (Low CO₂)",
            inputs: {
                co2: 5,
                def: 5,
                ren: 5,
                pol: 5,
                pop: -20,
                airweaver: false,
                algae: false,
                cryo: false,
                biosynth: false,
                reforest: false,
                ccapture: false,
                transport: false,
                urbangreen: false
            }
        },
        {
            name: "High-Pollution, Low-Deforestation",
            inputs: {
                co2: 80,
                def: 20,
                ren: 30,
                pol: 5,
                pop: 40,
                airweaver: false,
                algae: false,
                cryo: false,
                biosynth: false,
                reforest: false,
                ccapture: false,
                transport: false,
                urbangreen: false
            }
        },
        {
            name: "Global Electrification",
            inputs: {
                co2: 35,
                def: 40,
                ren: 80,
                pol: 60,
                pop: 20,
                airweaver: false,
                algae: false,
                cryo: false,
                biosynth: false,
                reforest: false,
                ccapture: false,
                transport: true,
                transport_int: 99,
                urbangreen: false
            }
        },
        {
            name: "Balanced",
            inputs: {
                co2: 50,
                def: 40,
                ren: 50,
                pol: 50,
                pop: 0,
                airweaver: false,
                algae: false,
                cryo: false,
                biosynth: false,
                reforest: false,
                ccapture: false,
                transport: false,
                urbangreen: false
            }
        },
        {
            name: "High Emissions",
            inputs: {
                co2: 80,
                def: 70,
                ren: 20,
                pol: 65,
                pop: 20,
                airweaver: false,
                algae: false,
                cryo: false,
                biosynth: false,
                reforest: false,
                ccapture: false,
                transport: false,
                urbangreen: false
            }
        },
        {
            name: "Renewable Boost",
            inputs: {
                co2: 30,
                def: 20,
                ren: 85,
                pol: 40,
                pop: 5,
                airweaver: false,
                algae: false,
                cryo: false,
                biosynth: false,
                reforest: false,
                ccapture: false,
                transport: false,
                urbangreen: false
            }
        }
    ];
    function applyPreset(preset) {
        setInputs((prevInputs)=>({
                // Start with default inputs to ensure all keys are present but prioritize preset values
                co2: 50,
                def: 50,
                ren: 50,
                pol: 50,
                pop: 0,
                airweaver: false,
                algae: false,
                cryo: false,
                biosynth: false,
                reforest: false,
                ccapture: false,
                transport: false,
                urbangreen: false,
                airweaver_int: 0,
                algae_int: 0,
                cryo_int: 0,
                biosynth_int: 0,
                reforest_int: 0,
                ccapture_int: 0,
                transport_int: 0,
                urbangreen_int: 0,
                // Override with the preset's specific values
                ...prevInputs,
                ...preset.inputs
            }));
        alert(`Applied "${preset.name}" preset. Now press Simulate.`);
    }
    // --- END NEW PRESET DATA ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "card",
        id: "link",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    marginTop: 0
                },
                children: "GAIA Link — Simulation Hub"
            }, void 0, false, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    marginTop: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${city === "main" ? "active" : ""}`,
                        onClick: ()=>setCity("main"),
                        children: "Global"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${city === "delhi" ? "active" : ""}`,
                        onClick: ()=>setCity("delhi"),
                        children: "Delhi"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${city === "mumbai" ? "active" : ""}`,
                        onClick: ()=>setCity("mumbai"),
                        children: "Mumbai"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${city === "darjeeling" ? "active" : ""}`,
                        onClick: ()=>setCity("darjeeling"),
                        children: "Darjeeling"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 20,
                    display: "flex",
                    gap: 20,
                    flexWrap: "wrap",
                    alignItems: "flex-start"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 300
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "block",
                                    marginBottom: 6
                                },
                                children: "Current satellite view"
                            }, void 0, false, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: cityImage(city),
                                        alt: "current",
                                        style: {
                                            width: city === "main" ? "100%" : "75%",
                                            height: 300,
                                            objectFit: "cover",
                                            borderRadius: 12
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/GaiaLink.tsx",
                                        lineNumber: 385,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pill",
                                        style: {
                                            position: "absolute",
                                            top: 8,
                                            left: 8
                                        },
                                        children: "Current State"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GaiaLink.tsx",
                                        lineNumber: 395,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 300
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "block",
                                    marginBottom: 6
                                },
                                children: "Projected image"
                            }, void 0, false, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this),
                            city === "main" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 480,
                                    height: 300,
                                    borderRadius: 12,
                                    overflow: "hidden",
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
                                        alt: "pred-global",
                                        style: {
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: 12
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/GaiaLink.tsx",
                                        lineNumber: 421,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            borderRadius: 12,
                                            pointerEvents: "none",
                                            zIndex: 2,
                                            background: getTintColor(result?.index),
                                            mixBlendMode: "overlay"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/GaiaLink.tsx",
                                        lineNumber: 432,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pill",
                                        style: {
                                            position: "absolute",
                                            top: 8,
                                            right: 8
                                        },
                                        children: result?.tempDrift ? `Projected +${result.tempDrift}°C` : "Projected"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GaiaLink.tsx",
                                        lineNumber: 445,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 412,
                                columnNumber: 13
                            }, this),
                            city !== "main" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 400,
                                    height: 300,
                                    borderRadius: 12,
                                    overflow: "hidden",
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: cityImage(city),
                                        alt: "pred-city",
                                        style: {
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: 12
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/GaiaLink.tsx",
                                        lineNumber: 467,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            borderRadius: 12,
                                            pointerEvents: "none",
                                            zIndex: 2,
                                            background: getTintColor(result?.index),
                                            mixBlendMode: "overlay"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/GaiaLink.tsx",
                                        lineNumber: 478,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pill",
                                        style: {
                                            position: "absolute",
                                            top: 8,
                                            right: 8
                                        },
                                        children: result?.tempDrift ? `Projected +${result.tempDrift}°C` : "Projected"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GaiaLink.tsx",
                                        lineNumber: 491,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 458,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 405,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 20
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "CO₂ Levels Over Time"
                        }, void 0, false, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 507,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RealTimeGraph$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            title: "CO₂ History",
                            data: co2History,
                            color: "#2de8a7"
                        }, void 0, false, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 508,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/GaiaLink.tsx",
                    lineNumber: 506,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 505,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "muted",
                style: {
                    marginTop: 20
                },
                children: "Choose a simulation method…"
            }, void 0, false, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 12
                },
                className: "subtabs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${method === "manual" ? "active" : ""}`,
                        onClick: ()=>setMethod("manual"),
                        children: "Manual"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 522,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${method === "preset" ? "active" : ""}`,
                        onClick: ()=>setMethod("preset"),
                        children: "Preset"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 529,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${method === "mc" ? "active" : ""}`,
                        onClick: ()=>setMethod("mc"),
                        children: "Monte-Carlo"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 535,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${method === "ai" ? "active" : ""}`,
                        onClick: ()=>setMethod("ai"),
                        children: "AI Suggestion"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 541,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 521,
                columnNumber: 7
            }, this),
            method === "preset" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "method-block",
                style: {
                    marginTop: 12
                },
                children: [
                    "    ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Preset Scenarios (17 Options)"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 553,
                        columnNumber: 5
                    }, this),
                    "    ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 10,
                            marginTop: 10,
                            flexWrap: "wrap"
                        },
                        children: [
                            "      ",
                            presets.map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "gaia-btn",
                                    onClick: ()=>applyPreset(preset),
                                    children: [
                                        "          ",
                                        preset.name,
                                        "        "
                                    ]
                                }, preset.name, true, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 557,
                                    columnNumber: 9
                                }, this)),
                            "    "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 555,
                        columnNumber: 5
                    }, this),
                    "  "
                ]
            }, void 0, true, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 552,
                columnNumber: 3
            }, this),
            method === "mc" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "method-block",
                style: {
                    marginTop: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Monte-Carlo Simulation"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 572,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Number of runs"
                            }, void 0, false, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 575,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "mcRuns",
                                type: "number",
                                min: "10",
                                max: "500",
                                defaultValue: 40,
                                style: {
                                    width: 120,
                                    marginLeft: 10
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 576,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 574,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "gaia-btn primary",
                        style: {
                            marginTop: 10
                        },
                        onClick: ()=>{
                            const runs = +document.getElementById("mcRuns")?.value || 40;
                            runMonteCarlo(runs);
                        },
                        children: "Run Monte-Carlo"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 586,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 571,
                columnNumber: 3
            }, this),
            method === "ai" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "method-block",
                style: {
                    marginTop: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "AI-Optimized Intervention Suggestion"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 603,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        style: {
                            marginTop: 6
                        },
                        children: "GAIA AI will analyze your current sliders and generate an optimized plan."
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 605,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "gaia-btn primary",
                        style: {
                            marginTop: 10
                        },
                        onClick: ()=>{
                            applyAISuggestion();
                            alert("AI suggestion applied — now press Simulate.");
                        },
                        children: "Generate AI Suggestion"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 609,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 602,
                columnNumber: 3
            }, this),
            method === "manual" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "method-manual",
                className: "method-block",
                style: {
                    marginTop: 12
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "controls",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "CO₂ Emissions index"
                                }, void 0, false, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 626,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "0",
                                    max: "100",
                                    value: inputs.co2,
                                    onChange: (e)=>handleInputChange("co2", +e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 627,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 625,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Deforestation pressure"
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 640,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0",
                                            max: "100",
                                            value: inputs.def,
                                            onChange: (e)=>handleInputChange("def", +e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 641,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 639,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Renewables"
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 652,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0",
                                            max: "100",
                                            value: inputs.ren,
                                            onChange: (e)=>handleInputChange("ren", +e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 653,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 651,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 638,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Pollution control"
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 667,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0",
                                            max: "100",
                                            value: inputs.pol,
                                            onChange: (e)=>handleInputChange("pol", +e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 668,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 666,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 160
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Population growth"
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 679,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "-20",
                                            max: "80",
                                            value: inputs.pop,
                                            onChange: (e)=>handleInputChange("pop", +e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 680,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 678,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 665,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divider",
                            style: {
                                height: 1,
                                margin: "6px 0",
                                background: "rgba(255,255,255,0.05)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 692,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: "Advanced interventions"
                        }, void 0, false, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 694,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "toggle",
                            children: [
                                [
                                    "airweaver",
                                    "AirWeaver Towers",
                                    "airweaver_int"
                                ],
                                [
                                    "algae",
                                    "Algae Seeding",
                                    "algae_int"
                                ],
                                [
                                    "cryo",
                                    "Cryo Cooling",
                                    "cryo_int"
                                ],
                                [
                                    "biosynth",
                                    "BioSynth Pods",
                                    "biosynth_int"
                                ],
                                [
                                    "reforest",
                                    "Reforestation",
                                    "reforest_int"
                                ],
                                [
                                    "ccapture",
                                    "Carbon Capture",
                                    "ccapture_int"
                                ],
                                [
                                    "transport",
                                    "Transport Electrification",
                                    "transport_int"
                                ],
                                [
                                    "urbangreen",
                                    "Urban Greening",
                                    "urbangreen_int"
                                ]
                            ].map(([id, label, intKey])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        minWidth: 220
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: !!inputs[id],
                                            onChange: (e)=>handleInputChange(id, e.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 707,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 714,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0",
                                            max: "100",
                                            value: inputs[intKey] || 0,
                                            onChange: (e)=>handleInputChange(intKey, +e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 716,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, id, true, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 706,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 695,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: 8,
                                marginTop: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "gaia-btn primary",
                                    onClick: onSimClick,
                                    children: "Simulate Now"
                                }, void 0, false, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 730,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "gaia-btn ghost",
                                    onClick: handleSaveScenario,
                                    children: "Save Scenario"
                                }, void 0, false, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 733,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "gaia-btn danger",
                                    onClick: ()=>{
                                        localStorage.removeItem("gaia_result");
                                        setResult(null);
                                    },
                                    children: "Reset"
                                }, void 0, false, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 736,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 729,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/GaiaLink.tsx",
                    lineNumber: 624,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 623,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 20,
                    display: "flex",
                    gap: 12,
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gauge",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Gauge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            value: result?.index ?? "—"
                        }, void 0, false, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 760,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 759,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pill",
                            children: result ? `Symbiosis ${result.index} — ΔT: ${result.tempDrift}°C · Bio ${result.biodiversity} · Sea +${result.seaLevel}` : "Run a simulation"
                        }, void 0, false, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 763,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 762,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 751,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/GaiaLink.tsx",
        lineNumber: 332,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/PreviewCanvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/PreviewCanvas.tsx
__turbopack_context__.s([
    "default",
    ()=>PreviewCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function PreviewCanvas({ index }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const c = ref.current;
        if (!c) return;
        const ctx = c.getContext('2d');
        function draw() {
            const w = c.width, h = c.height;
            ctx.clearRect(0, 0, w, h);
            const idx = typeof index === 'number' ? index : JSON.parse(localStorage.getItem('gaia_result') || 'null')?.index || 50;
            const g = ctx.createLinearGradient(0, 0, w, 0);
            g.addColorStop(0, 'rgba(255,255,255,0.02)');
            g.addColorStop(1, 'rgba(255,255,255,0.01)');
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, w, h);
            const threat = 100 - idx;
            ctx.fillStyle = 'rgba(255,80,80,0.18)';
            ctx.fillRect(10, 20, threat / 100 * (w - 20), 60);
            ctx.fillStyle = 'rgba(30,200,110,0.18)';
            ctx.fillRect(10, 20, idx / 100 * (w - 20), 60);
            ctx.fillStyle = 'rgba(255,255,255,0.9)';
            ctx.font = '12px sans-serif';
        }
        draw();
        const t = setInterval(draw, 800);
        return ()=>clearInterval(t);
    }, [
        index
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        id: "previewCanvas",
        ref: ref,
        width: 0,
        height: 0,
        style: {
            marginTop: 12,
            borderRadius: 10,
            background: 'transparent'
        }
    }, void 0, false, {
        fileName: "[project]/components/PreviewCanvas.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
}),
"[project]/lib/useGaiaState.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useGaiaState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useGaiaState() {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function refresh() {
        setLoading(true);
        try {
            const res = await fetch("/api/state", {
                cache: "no-store"
            });
            const json = await res.json();
            setState(json.state);
        } catch (e) {
            console.error("GAIA state load error", e);
        } finally{
            setLoading(false);
        }
    }
    return {
        state,
        loading,
        refresh
    };
}
}),
"[project]/components/EarthPreview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/EarthPreview.tsx
__turbopack_context__.s([
    "default",
    ()=>EarthPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useGaiaState.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function EarthPreview({ size = 120, tint, label }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { state, loading, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        const centerX = w / 2;
        const centerY = h / 2;
        const radius = Math.min(w, h) / 2 - 5;
        // Get tint from prop or state or use default blue
        const earthTint = tint || (!loading && state?.earth_tint ? state.earth_tint : '#1c8cf9');
        // Draw background
        ctx.clearRect(0, 0, w, h);
        // Draw Earth sphere with gradient
        const gradient = ctx.createRadialGradient(centerX - 10, centerY - 10, 0, centerX, centerY, radius);
        const secondTint = earthTint.startsWith('rgba') ? earthTint.replace(/(\d+(?:\.\d+)?)\)$/, (match, a)=>Math.min(1, parseFloat(a) + 0.3) + ')') : earthTint + 'dd';
        gradient.addColorStop(0, earthTint);
        gradient.addColorStop(0.7, secondTint);
        gradient.addColorStop(1, '#021822');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();
        // Draw Earth outline
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
        // Add some landmass texture
        ctx.fillStyle = 'rgba(255,255,255,0.03)';
        for(let i = 0; i < 5; i++){
            const angle = i / 5 * Math.PI * 2;
            const x = centerX + Math.cos(angle) * radius * 0.6;
            const y = centerY + Math.sin(angle) * radius * 0.6;
            ctx.beginPath();
            ctx.arc(x, y, radius * 0.25, 0, Math.PI * 2);
            ctx.fill();
        }
        // Draw risk indicator if available
        if (!loading && state?.risk_val != null) {
            const riskRadius = radius * (1 + state.risk_val * 0.3);
            ctx.strokeStyle = state.risk_val > 0.6 ? 'rgba(255, 100, 100, 0.4)' : 'rgba(100, 200, 100, 0.4)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(centerX, centerY, riskRadius, 0, Math.PI * 2);
            ctx.stroke();
        }
    }, [
        state,
        loading,
        tint
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8
        },
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.7)'
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/EarthPreview.tsx",
                lineNumber: 70,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                width: size,
                height: size,
                style: {
                    borderRadius: '50%',
                    boxShadow: '0 0 20px rgba(58, 209, 255, 0.2)',
                    display: 'block'
                }
            }, void 0, false, {
                fileName: "[project]/components/EarthPreview.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "gaia-btn ghost",
                onClick: ()=>refresh(),
                disabled: loading,
                style: {
                    fontSize: '11px',
                    padding: '4px 10px'
                },
                children: loading ? 'Syncing...' : 'Refresh'
            }, void 0, false, {
                fileName: "[project]/components/EarthPreview.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/EarthPreview.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/SymbioSphere.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/SymbioSphere.tsx
__turbopack_context__.s([
    "default",
    ()=>SymbioSphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EarthPreview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EarthPreview.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function SymbioSphere() {
    const [obs, setObs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setObs(JSON.parse(localStorage.getItem('gaia_obs') || '[]'));
    }, []);
    const [lastAnalysis, setLastAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    function saveObs(obj) {
        const arr = JSON.parse(localStorage.getItem('gaia_obs') || '[]');
        const color = obj.level === 'excellent' ? '#20e07a' : obj.level === 'good' ? '#56c8ff' : obj.level === 'neutral' ? '#ffd265' : obj.level === 'concern' ? '#ff9f6b' : '#ff6b6b';
        arr.push(Object.assign({
            at: Date.now(),
            color
        }, obj));
        localStorage.setItem('gaia_obs', JSON.stringify(arr));
        setObs(arr);
        alert('Observation stored locally. (Demo only)');
    }
    async function submit(e) {
        e.preventDefault();
        const form = e.target;
        const type = form.obsType.value;
        const loc = form.obsLoc.value || 'Unknown';
        if (![
            'Global',
            'Delhi',
            'Mumbai',
            'Darjeeling'
        ].includes(loc)) {
            alert('Invalid location for observation.');
            return;
        }
        const level = form.obsLevel.value;
        const note = form.obsNote.value;
        const fileInput = form.obsPhoto;
        // helper to read file as base64
        const readFileAsBase64 = (file)=>new Promise((resolve, reject)=>{
                const reader = new FileReader();
                reader.onload = (ev)=>resolve(ev.target.result);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        let photoBase64 = undefined;
        if (fileInput.files && fileInput.files[0]) {
            try {
                photoBase64 = await readFileAsBase64(fileInput.files[0]);
                saveObs({
                    type,
                    loc,
                    level,
                    note,
                    photo: photoBase64
                });
            } catch (err) {
                console.error('Failed to read photo', err);
                saveObs({
                    type,
                    loc,
                    level,
                    note
                });
            }
        } else {
            saveObs({
                type,
                loc,
                level,
                note
            });
        }
        // send to server and record extracted analysis
        try {
            await submitReport({
                category: type,
                location: loc,
                level,
                note,
                photoBase64
            });
        } catch (err) {
            console.error('submitReport failed', err);
        }
        form.reset();
    }
    async function submitReport(form) {
        const payload = {
            category: form.category,
            location: form.location,
            level: form.level,
            note: form.note,
            photo: form.photoBase64
        };
        try {
            const res = await fetch('/api/symbiosphere/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            setLastAnalysis(json.extracted || null);
            return json;
        } catch (err) {
            console.error('/api/symbiosphere/report failed', err);
            throw err;
        }
    }
    function resetData() {
        if (confirm('Are you sure you want to clear all observations? This cannot be undone.')) {
            localStorage.removeItem('gaia_obs');
            setObs([]);
            setLastAnalysis(null);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "symbio",
        className: "card",
        style: {
            marginTop: 18
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    marginTop: 0
                },
                children: "SymbioSphere — Crowd Sensing"
            }, void 0, false, {
                fileName: "[project]/components/SymbioSphere.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    marginBottom: 12
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EarthPreview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    size: 100
                }, void 0, false, {
                    fileName: "[project]/components/SymbioSphere.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SymbioSphere.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "muted",
                children: "Submit qualitative observations. No numeric fields required — choose categories and levels; upload a photo if available."
            }, void 0, false, {
                fileName: "[project]/components/SymbioSphere.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                id: "obsForm",
                style: {
                    marginTop: 12,
                    display: 'grid',
                    gap: 10
                },
                onSubmit: submit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "obsType",
                                name: "obsType",
                                className: "form-control",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "air",
                                        children: "Air Quality / Smell"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "water",
                                        children: "Water Condition (stream, shore)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "wildlife",
                                        children: "Wildlife / Biodiversity"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "waste",
                                        children: "Waste / Littering"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "noise",
                                        children: "Noise / Light Pollution"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "soil",
                                        children: "Soil / Crop Health"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "tree",
                                        children: "Tree Planting / Green works"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "obsLoc",
                                name: "obsLoc",
                                type: "text",
                                placeholder: "Location (city / locality)",
                                className: "form-control"
                            }, void 0, false, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SymbioSphere.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "obsLevel",
                                name: "obsLevel",
                                className: "form-control",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "excellent",
                                        children: "Excellent / Healthy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "good",
                                        children: "Good"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "neutral",
                                        children: "Neutral"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "concern",
                                        children: "Concern"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "critical",
                                        children: "Critical / Emergency"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "obsPhoto",
                                name: "obsPhoto",
                                type: "file",
                                accept: "image/*",
                                className: "file-control"
                            }, void 0, false, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SymbioSphere.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "obsNote",
                        name: "obsNote",
                        placeholder: "Describe what you observed (optional)...",
                        className: "form-control obs-note"
                    }, void 0, false, {
                        fileName: "[project]/components/SymbioSphere.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "gaia-btn primary",
                                id: "submitObs",
                                type: "submit",
                                children: "Submit Observation"
                            }, void 0, false, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "gaia-btn ghost",
                                id: "viewObs",
                                type: "button",
                                onClick: ()=>{
                                    document.querySelector('.tab[data-tab=\"symbio\"]')?.dispatchEvent(new Event('click'));
                                },
                                children: "View Live Feed"
                            }, void 0, false, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "gaia-btn danger",
                                type: "button",
                                onClick: resetData,
                                children: "Reset All Data"
                            }, void 0, false, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginLeft: 'auto'
                                },
                                className: "muted-block",
                                children: "Local demo only — observations stored in browser."
                            }, void 0, false, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SymbioSphere.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SymbioSphere.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            lastAnalysis ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 12
                },
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Last server analysis"
                    }, void 0, false, {
                        fileName: "[project]/components/SymbioSphere.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "muted-block",
                        style: {
                            marginTop: 6
                        },
                        children: typeof lastAnalysis === 'string' ? lastAnalysis : JSON.stringify(lastAnalysis, null, 2)
                    }, void 0, false, {
                        fileName: "[project]/components/SymbioSphere.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SymbioSphere.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "obsFeed",
                style: {
                    marginTop: 12,
                    display: 'grid',
                    gap: 8
                },
                children: obs.slice().reverse().map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: 10,
                            borderRadius: 8,
                            background: 'rgba(255,255,255,0.02)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 8,
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            minWidth: 6,
                                            height: 36,
                                            background: o.color,
                                            borderRadius: 4
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    o.type,
                                                    " — ",
                                                    o.loc
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SymbioSphere.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "muted-block",
                                                children: [
                                                    o.level,
                                                    " · ",
                                                    new Date(o.at).toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SymbioSphere.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 8
                                },
                                children: o.note || ''
                            }, void 0, false, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            o.photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 8
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: o.photo,
                                    style: {
                                        maxWidth: 120,
                                        borderRadius: 6
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/SymbioSphere.tsx",
                                    lineNumber: 152,
                                    columnNumber: 51
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 152,
                                columnNumber: 24
                            }, this) : null
                        ]
                    }, i, true, {
                        fileName: "[project]/components/SymbioSphere.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/SymbioSphere.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SymbioSphere.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Filament.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Filament.tsx
__turbopack_context__.s([
    "default",
    ()=>Filament
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
// --- Supabase ---
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://hpnjbvqozhbbvlsmjkem.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwbmpidnFvemhiYnZsc21qa2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzYyNzgsImV4cCI6MjA3ODM1MjI3OH0.Il-qvoLYHGVwn_jhl2kSgy8riy2IoVcP8xMBI06iJHE"));
const CITY_SENSITIVITY = {
    Global: 0.35,
    Delhi: 1.35,
    Mumbai: 1.15,
    Darjeeling: 1.0
};
// These affect only behaviour — NOT visuals.
const FILAMENT_PRESETS = {
    Global: {
        color: '#2de8a7',
        vibration: 0.6,
        complexity: 0.45
    },
    Delhi: {
        color: '#ff4b4b',
        vibration: 1.35,
        complexity: 1.25
    },
    Mumbai: {
        color: '#ff9f3f',
        vibration: 1.1,
        complexity: 1.05
    },
    Darjeeling: {
        color: '#4fd0ff',
        vibration: 0.95,
        complexity: 0.85
    }
};
function Filament({ city, index, symbioSignal, tint }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tick, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [symbioData, setSymbioData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        vibration: 1,
        severity: 0,
        color: '#20e07a'
    });
    const [gaiaData, setGaiaData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        variation: 0.5,
        index: index ?? 60
    });
    // -------------------------------------------------------------------------
    // FETCH CITY-SPECIFIC DATA (SymbioSphere + GaiaLink)
    // -------------------------------------------------------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            try {
                const [symbioRes, gaiaRes] = await Promise.all([
                    fetch(`/api/symbiosphere/city?city=${city}`),
                    fetch(`/api/gaialink/city?city=${city}`)
                ]);
                if (symbioRes.ok) {
                    const s = await symbioRes.json();
                    setSymbioData({
                        vibration: s.vibration ?? 1,
                        severity: s.severity ?? 0.3,
                        color: s.color ?? undefined
                    });
                }
                if (gaiaRes.ok) {
                    const g = await gaiaRes.json();
                    setGaiaData({
                        variation: g.variation ?? 0.5,
                        index: g.index ?? index ?? 60
                    });
                }
            } catch (error) {
                console.error('Filament city fetch error:', error);
            }
        };
        fetchData();
        // LIVE UPDATES
        const symbioChannel = supabase.channel(`symbiosphere_${city}`).on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'city_symbiosphere',
            filter: `city=eq.${city}`
        }, (payload)=>{
            if (payload.new) {
                setSymbioData({
                    vibration: payload.new.vibration,
                    severity: payload.new.severity,
                    color: payload.new.color
                });
            }
        }).subscribe();
        const gaiaChannel = supabase.channel(`gaialink_${city}`).on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'city_gaialink',
            filter: `city=eq.${city}`
        }, (payload)=>{
            if (payload.new) {
                setGaiaData({
                    variation: payload.new.variation,
                    index: payload.new.index
                });
            }
        }).subscribe();
        return ()=>{
            supabase.removeChannel(symbioChannel);
            supabase.removeChannel(gaiaChannel);
        };
    }, [
        city
    ]);
    // -------------------------------------------------------------------------
    // DRAW LOOP — LOOK *UNCHANGED* — LOGIC UPGRADED
    // -------------------------------------------------------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let raf = 0;
        function draw() {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const w = canvas.width, h = canvas.height;
            ctx.clearRect(0, 0, w, h);
            // --- SAME BACKGROUND ---
            const g = ctx.createLinearGradient(0, 0, 0, h);
            g.addColorStop(0, 'rgba(0, 0, 0, 1)');
            g.addColorStop(1, 'rgba(141, 219, 237, 1)');
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, w, h);
            const preset = FILAMENT_PRESETS[city];
            // ---------------------------------------------
            // CITY-SENSITIVE BEHAVIOR INJECTED HERE
            // ---------------------------------------------
            const citySensitivity = CITY_SENSITIVITY[city];
            const actualIndex = gaiaData.index ?? index ?? 60;
            // vibration baseline
            const baseVib = preset.vibration * (symbioSignal?.vibration ?? symbioData.vibration ?? 1);
            // index behavior: worse index = stronger displacement
            const indexFactor = (100 - actualIndex) / 100;
            // final vibration (city-specific amplified)
            const vibration = baseVib * (1 + indexFactor * 1.2) * citySensitivity;
            // flux depends on gaia variation + severity or provided flux
            const severity = symbioSignal?.severity ?? symbioData.severity ?? 0.3;
            const fluxMultiplier = symbioSignal?.flux ?? 1 + severity * 1.1;
            const flux = preset.complexity * (gaiaData.variation ?? 0.5) * fluxMultiplier;
            const chaos = 0.4 + vibration * 1.35 + flux * 0.3;
            const actualColor = tint ?? symbioData.color ?? preset.color ?? '#2de8a7';
            const hexPart = actualColor && actualColor.startsWith('#') ? actualColor.slice(1, 3) : '2d';
            const hueValue = parseInt(hexPart, 16) * 360 / 255;
            const hue = isNaN(hueValue) ? 120 : hueValue;
            const cols = Math.round(16 + 1 / Math.max(1, chaos) * 24);
            // ---------------------------------------------
            // EXACT SAME VISUALS — JUST VARIABLE INPUTS
            // ---------------------------------------------
            for(let i = 0; i < cols; i++){
                const baseX = (i + 0.5) / cols * w;
                let x = baseX + 60 * Math.sin((tick + i * 20) / 60) * chaos * vibration;
                let y = 20;
                ctx.beginPath();
                ctx.moveTo(x, y);
                const segments = 8;
                for(let s = 0; s < segments; s++){
                    const amp = Math.max(0.5, 1 - s / segments) * chaos;
                    const cx = x + (Math.random() - 0.5) * 100 * amp + 30 * Math.sin((tick + i * 10 + s * 5) / 30);
                    const cy = y + (s + 1) * (h / (segments + 1)) + 15 * Math.cos((tick + i * 7 + s * 11) / 35);
                    const nx = baseX + (s + 1) * (w / (segments + 2) - w / (cols * segments)) + Math.sin((tick + s * i) / 25) * 80 * amp;
                    ctx.quadraticCurveTo(cx, cy, nx, cy + 10);
                    x = nx;
                    y = cy + 10;
                }
                const bright = 50 + 25 * Math.sin((tick + i) / 25);
                ctx.lineWidth = 1.0 + 2.0 * indexFactor; // worse index = thicker lines
                ctx.strokeStyle = `hsla(${hue + flux * 45}, 85%, ${bright}%, ${0.4 + (0.8 - chaos / 5)})`;
                ctx.stroke();
            }
            // --- SAME PULSING CORE ---
            const cx = w * 0.75, cy = h * 0.5;
            const pulse = 25 + 40 * Math.abs(Math.sin(tick / 35));
            const core = ctx.createRadialGradient(cx, cy, pulse * 0.05, cx, cy, pulse * 3.5);
            core.addColorStop(0, `hsla(${hue}, 95%, 65%, 0.3)`);
            core.addColorStop(0.5, `hsla(${hue}, 80%, 50%, 0.1)`);
            core.addColorStop(1, 'rgba(10,12,18,0)');
            ctx.fillStyle = core;
            ctx.beginPath();
            ctx.arc(cx, cy, pulse * 3.5, 0, Math.PI * 2);
            ctx.fill();
            setTick((t)=>t + 1);
            raf = requestAnimationFrame(draw);
        }
        raf = requestAnimationFrame(draw);
        return ()=>cancelAnimationFrame(raf);
    }, [
        city,
        symbioData,
        gaiaData,
        index,
        symbioSignal,
        tint
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        width: 800,
        height: 340,
        style: {
            borderRadius: 10,
            display: 'block',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))'
        }
    }, void 0, false, {
        fileName: "[project]/components/Filament.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Nexus.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nexus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useGaiaState.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EarthPreview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EarthPreview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Filament$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Filament.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
/**
 * Nexus.tsx — city-scoped Nexus panel
 *
 * - activeCity: "Global" | "Delhi" | "Mumbai" | "Darjeeling"
 * - Reads symbio observations from localStorage ('gaia_obs') but restricts to allowed cities
 * - Uses CITY_SENSITIVITY to adjust index responsiveness per-city
 * - Determines tint/risk/index per-city (falling back to global GAIA state or passed result)
 * - Passes city-specific props to Filament (pattern, color, vibration, complexity)
 *
 * Note: If you have other places writing to localStorage('gaia_obs'), ensure they store objects
 * with { loc: "Global"|"Delhi"|"Mumbai"|"Darjeeling", type, level, note, vibration? } or use provided helper.
 */ const ALLOWED_LOCATIONS = [
    'Global',
    'Delhi',
    'Mumbai',
    'Darjeeling'
];
const CITY_SENSITIVITY = {
    Global: 0.45,
    Delhi: 1.25,
    Mumbai: 1.1,
    Darjeeling: 0.95 // slightly reactive
};
// default fallback if GAIA global state doesn't contain city entries
function clamp(v, a = 0, b = 100) {
    return Math.max(a, Math.min(b, v));
}
function Nexus({ result }) {
    const { state, loading, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const [activeCity, setActiveCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Global');
    const [symbioSummary, setSymbioSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [symbioDetails, setSymbioDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [citySymbio, setCitySymbio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Load and filter observations for the active city
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const raw = JSON.parse(localStorage.getItem('gaia_obs') || '[]');
            // keep only allowed locations, and group by loc
            const filtered = Array.isArray(raw) ? raw.filter((o)=>{
                return o && typeof o.loc === 'string' && ALLOWED_LOCATIONS.includes(o.loc);
            }) : [];
            setCitySymbio(filtered);
        } catch (e) {
            setCitySymbio([]);
        }
    }, []);
    // When activeCity changes, compute summary & details from observations limited to this city
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const raw = JSON.parse(localStorage.getItem('gaia_obs') || '[]');
            const filtered = (Array.isArray(raw) ? raw : []).filter((o)=>o && o.loc === activeCity);
            if (filtered.length === 0) {
                setSymbioSummary('');
                setSymbioDetails('');
                return;
            }
            const criticalCount = filtered.filter((o)=>o.level === 'critical').length;
            const concernCount = filtered.filter((o)=>o.level === 'concern').length;
            const goodCount = filtered.filter((o)=>o.level === 'excellent' || o.level === 'good').length;
            const categories = [
                ...new Set(filtered.map((o)=>o.type))
            ];
            const observationDetails = filtered.slice().reverse().map((o)=>{
                return `${o.type} (${o.level}) — ${o.note || 'no note'}`;
            }).join(' | ');
            const summary = `${filtered.length} observations for ${activeCity}: ${goodCount} positive, ${concernCount} concerns, ${criticalCount} critical. Categories: ${categories.join(', ')}`;
            setSymbioSummary(summary);
            setSymbioDetails(observationDetails);
        } catch (e) {
            setSymbioSummary('');
            setSymbioDetails('');
        }
    }, [
        activeCity
    ]);
    // helper: get the latest numeric symbiosis index for the city from GAIA state if present
    function getCityIndexFromState(city) {
        // Expected optional shape: state.city_gaia = { Global: { index,...}, Delhi: {...}, ... }
        if (!state || loading) return undefined;
        try {
            const cityData = (state.city_gaia && state.city_gaia[city]) ?? null;
            if (cityData && typeof cityData.index === 'number') return cityData.index;
            // fallback to global gaia_link merged state (if it contains city entries)
            if (state.gaia_link && typeof state.gaia_link.index === 'number') return state.gaia_link.index;
        } catch  {}
        return undefined;
    }
    // compute the active index using priority: city-specific GAIA state -> local result prop -> default 50
    const baseIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const stateIndex = getCityIndexFromState(activeCity);
        if (typeof stateIndex === 'number') return clamp(stateIndex);
        if (result && typeof result.index === 'number') return clamp(result.index);
        if (state && state.gaia_link && typeof state.gaia_link.index === 'number') return clamp(state.gaia_link.index);
        return 50;
    }, [
        activeCity,
        state,
        loading,
        result
    ]);
    const sensitivity = CITY_SENSITIVITY[activeCity];
    // Sensitivity is applied softly: weightedAverage(baseIndex, baseIndex*sensitivity, factor)
    // We only lightly nudge the index to avoid wild jumps; global is more inert.
    const idx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // Apply soft sensitivity multiplier but dampen by factor to avoid explosions
        const damp = activeCity === 'Global' ? 0.35 : 0.85; // global much more damped
        const adjusted = baseIndex * (1 + (sensitivity - 1) * damp);
        return clamp(Math.round(adjusted * 100) / 100, 0, 100);
    }, [
        baseIndex,
        activeCity
    ]);
    // The threat/recovery bar values (0-100)
    const threat = Math.max(0, 100 - idx);
    const recovery = idx;
    // compute tint color by index (red/orange/green), but also allow GAIA's provided tint as possible overlay
    function getTintForIndex(index, gaiaTint) {
        const i = typeof index === 'number' ? index : 50;
        if (i < 40) return 'rgba(255,70,70,0.32)'; // red
        if (i < 70) return 'rgba(255,165,60,0.30)'; // orange
        return 'rgba(45,232,167,0.28)'; // green
    }
    const gaiaRisk = !loading && state?.risk != null ? state.risk : undefined;
    // allow state-provided tint but we override with index range for predictability
    const gaiaTint = getTintForIndex(idx, state?.earth_tint);
    // Prepare Filament "symbio signal" based on observations for the activeCity
    const symbioForCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        try {
            const raw = JSON.parse(localStorage.getItem('gaia_obs') || '[]');
            return (Array.isArray(raw) ? raw : []).filter((o)=>o && o.loc === activeCity);
        } catch  {
            return [];
        }
    }, [
        activeCity
    ]);
    // derive symbio signal: vibration average, flux/severity score etc.
    const symbioSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!Array.isArray(symbioForCity) || symbioForCity.length === 0) {
            return {
                vibration: 0.5,
                flux: 0.2,
                severity: 0
            };
        }
        const severityScore = symbioForCity.reduce((acc, o)=>{
            const lvl = o.level === 'critical' ? 3 : o.level === 'concern' ? 2 : 1;
            return acc + lvl;
        }, 0) / (symbioForCity.length * 3);
        // vibration stronger if more criticals + sensitivity
        const vibration = clamp(0.4 + severityScore * 1.8 * CITY_SENSITIVITY[activeCity], 0.1, 2.5);
        const flux = clamp(0.1 + severityScore * 1.5, 0, 2);
        return {
            vibration,
            flux,
            severity: severityScore
        };
    }, [
        symbioForCity,
        activeCity
    ]);
    // Helper to return interpretation text scoped to city
    function buildInterpretation() {
        const lines = [];
        lines.push(`Simulation & SymbioSphere combined for ${activeCity}:`);
        lines.push(`Index (city-scoped): ${idx.toFixed(1)}/100 — ${idx > 65 ? 'Stable' : idx > 40 ? 'Tense' : 'Stressed'}.`);
        lines.push(`Threat: ${threat.toFixed(0)}% · Recovery: ${recovery.toFixed(0)}%`);
        if (symbioSummary) lines.push(`Observations: ${symbioSummary}`);
        if (symbioDetails) lines.push(`Latest: ${symbioDetails}`);
        if (state?.mood) lines.push(`GAIA mood: ${state.mood}`);
        // add recommended action short hint (simple heuristic)
        if (idx < 40) {
            lines.push('Recommended: urgent local mitigation — emissions cuts, emergency pollution controls, temporary shutdowns of major sources.');
        } else if (idx < 70) {
            lines.push('Recommended: accelerate renewables, targeted reforestation and pollution regulation.');
        } else {
            lines.push('Recommended: maintain current trajectory, focus on resilience and biodiversity support.');
        }
        return lines.join('\n\n');
    }
    const interpretationText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildInterpretation(), [
        idx,
        threat,
        recovery,
        symbioSummary,
        symbioDetails,
        state?.mood,
        activeCity
    ]);
    // small helper: ensure observation saved only if location allowed (callable by other modules)
    function saveObservationRestricted(obs) {
        if (!obs || !obs.loc || typeof obs.loc !== 'string') throw new Error('Invalid observation shape');
        if (!ALLOWED_LOCATIONS.includes(obs.loc)) throw new Error('Observation location not allowed. Allowed: Global, Delhi, Mumbai, Darjeeling');
        const raw = JSON.parse(localStorage.getItem('gaia_obs') || '[]');
        raw.push(obs);
        localStorage.setItem('gaia_obs', JSON.stringify(raw));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 8,
                    marginBottom: 8
                },
                children: ALLOWED_LOCATIONS.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${activeCity === loc ? 'active' : ''}`,
                        onClick: ()=>setActiveCity(loc),
                        children: loc
                    }, loc, false, {
                        fileName: "[project]/components/Nexus.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Nexus.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-start'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Filament$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                city: activeCity,
                                index: idx,
                                tint: gaiaTint,
                                symbioSignal: symbioSignal
                            }, void 0, false, {
                                fileName: "[project]/components/Nexus.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12,
                                    background: 'rgba(255,255,255,0.02)',
                                    padding: 12,
                                    borderRadius: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "muted-block",
                                                children: [
                                                    "Threat vs Recovery (",
                                                    activeCity,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 212,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pill",
                                                style: {
                                                    fontSize: 11
                                                },
                                                children: [
                                                    threat.toFixed(0),
                                                    " / ",
                                                    recovery.toFixed(0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 213,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Nexus.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            height: 24,
                                            gap: 2,
                                            borderRadius: 6,
                                            overflow: 'hidden',
                                            background: 'rgba(0,0,0,0.2)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: threat,
                                                    background: threat > 50 ? 'linear-gradient(90deg, #ff4444, #ff6b6b)' : threat > 25 ? 'linear-gradient(90deg, #ffa500, #ffb84d)' : 'linear-gradient(90deg, #ff9999, #ffcccc)',
                                                    transition: 'all 0.3s ease',
                                                    borderRadius: threat > 0 ? '6px 0 0 6px' : 0,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: 10,
                                                    color: 'rgba(255,255,255,0.7)',
                                                    fontWeight: 600
                                                },
                                                children: threat > 10 && `${threat.toFixed(0)}%`
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 217,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: recovery,
                                                    background: recovery > 70 ? 'linear-gradient(90deg, #2de8a7, #20e07a)' : recovery > 40 ? 'linear-gradient(90deg, #56c8ff, #3ad1ff)' : 'linear-gradient(90deg, #ff9f6b, #ffc46a)',
                                                    transition: 'all 0.3s ease',
                                                    borderRadius: recovery > 0 ? '0 6px 6px 0' : 0,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: 10,
                                                    color: 'rgba(255,255,255,0.9)',
                                                    fontWeight: 600
                                                },
                                                children: recovery > 10 && `${recovery.toFixed(0)}%`
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Nexus.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginTop: 4,
                                            fontSize: 11
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "muted",
                                                children: "Stress"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "muted",
                                                children: "Stability"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Nexus.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nexus.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nexus.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 300
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(255,255,255,0.02)',
                                    padding: 12,
                                    borderRadius: 10,
                                    textAlign: 'center',
                                    marginBottom: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "muted-block",
                                        children: [
                                            "Earth State — ",
                                            activeCity
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Nexus.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 8,
                                            display: 'flex',
                                            justifyContent: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EarthPreview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            size: 140,
                                            tint: gaiaTint,
                                            label: activeCity
                                        }, void 0, false, {
                                            fileName: "[project]/components/Nexus.tsx",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nexus.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nexus.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(255,255,255,0.02)',
                                    padding: 10,
                                    borderRadius: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pill",
                                                id: "nexusMoodTag",
                                                children: state && !loading ? state.mood || (idx > 65 ? 'Harmonic' : idx > 40 ? 'Tense' : 'Stressed') : result ? result.index > 65 ? 'Harmonic' : result.index > 40 ? 'Tense' : 'Stressed' : '—'
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 263,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "muted-block",
                                                        children: "Symbiosis index"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Nexus.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        id: "nexusIndex",
                                                        style: {
                                                            fontWeight: 700,
                                                            fontSize: 22
                                                        },
                                                        children: idx.toFixed(0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Nexus.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Nexus.tsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 8,
                                            marginTop: 8,
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "muted-block",
                                                children: "Risk"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 279,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pill",
                                                style: {
                                                    fontSize: 12
                                                },
                                                children: gaiaRisk ? (gaiaRisk * 100).toFixed(0) + '%' : result?.risk ?? '—'
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 280,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginLeft: 'auto',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "muted-block",
                                                        children: "Tint"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Nexus.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 22,
                                                            height: 22,
                                                            borderRadius: 6,
                                                            background: gaiaTint,
                                                            border: '1px solid rgba(255,255,255,0.06)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Nexus.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Nexus.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "muted-block",
                                                children: "Timeline"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "timeSlider",
                                                type: "range",
                                                min: 0,
                                                max: 100,
                                                defaultValue: 100
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 292,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 8,
                                                    marginTop: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "gaia-btn primary",
                                                        id: "recompute",
                                                        onClick: ()=>{
                                                            alert('Recompute triggered');
                                                        },
                                                        children: "Recompute Visuals"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Nexus.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "gaia-btn ghost",
                                                        onClick: ()=>refresh(),
                                                        disabled: loading,
                                                        children: loading ? 'Syncing...' : 'Sync GAIA State'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Nexus.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "gaia-btn ghost",
                                                        id: "exportPNG",
                                                        onClick: ()=>{
                                                            alert('Export PNG not available');
                                                        },
                                                        children: "Export PNG"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Nexus.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 293,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Nexus.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nexus.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nexus.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nexus.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'rgba(255,255,255,0.02)',
                    padding: 12,
                    borderRadius: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "muted-block",
                        children: "Interpretation"
                    }, void 0, false, {
                        fileName: "[project]/components/Nexus.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "nexusText",
                        style: {
                            marginTop: 8,
                            fontSize: 13,
                            lineHeight: 1.6,
                            whiteSpace: 'pre-line'
                        },
                        children: interpretationText
                    }, void 0, false, {
                        fileName: "[project]/components/Nexus.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nexus.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Nexus.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Chatbot.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Chatbot() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    async function send(msg) {
        const res = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: "system",
                        content: "You are GAIA."
                    },
                    {
                        role: "user",
                        content: msg
                    }
                ]
            })
        });
        const data = await res.json();
        return data.reply;
    }
    async function handleSend() {
        const input = document.getElementById("gaia-input");
        const text = input.value.trim();
        if (!text) return;
        input.value = "";
        const reply = await send(text);
        setMessages((m)=>[
                ...m,
                {
                    user: text,
                    gaia: reply
                }
            ]);
    }
    function resetChat() {
        setMessages([]);
    }
    async function resetMemory() {
        await fetch("/api/resetMemory");
        alert("GAIA memory cleared.");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "gaia-btn icon chat-toggle",
                onClick: ()=>setOpen(!open),
                children: open ? "✖" : "GAIA"
            }, void 0, false, {
                fileName: "[project]/components/Chatbot.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-popup glass",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-header",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "GAIA Assistant"
                        }, void 0, false, {
                            fileName: "[project]/components/Chatbot.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Chatbot.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-window",
                        children: messages.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chat-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "you",
                                        children: [
                                            "You: ",
                                            m.user
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Chatbot.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "gaia",
                                        children: [
                                            "GAIA: ",
                                            m.gaia
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Chatbot.tsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/Chatbot.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Chatbot.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-controls",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "gaia-input",
                                placeholder: "Ask GAIA..."
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "gaia-btn primary",
                                onClick: handleSend,
                                children: "Send"
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chatbot.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "gaia-btn pill",
                                onClick: resetChat,
                                children: "Clear Chat"
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "gaia-btn danger",
                                onClick: resetMemory,
                                children: "Reset Memory"
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chatbot.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Chatbot.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/simulation/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/simulation/page.tsx
__turbopack_context__.s([
    "default",
    ()=>SimulationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GaiaLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GaiaLink.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PreviewCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PreviewCanvas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SymbioSphere$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SymbioSphere.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nexus$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Nexus.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Chatbot.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useGaiaSimulation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useGaiaState.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function SimulationPage() {
    const { result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(); // quick hook use to pass result to Nexus & preview if needed
    const { state, loading, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    function hexToRgba(hex, alpha = 0.18) {
        if (!hex) return `rgba(255,100,0,${alpha})`;
        let h = hex.replace('#', '');
        if (h.length === 3) h = h.split('').map((c)=>c + c).join('');
        const num = parseInt(h, 16);
        const r = num >> 16 & 255;
        const g = num >> 8 & 255;
        const b = num & 255;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onTabChange: ()=>{}
            }, void 0, false, {
                fileName: "[project]/app/simulation/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GaiaLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/simulation/page.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SymbioSphere$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/simulation/page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/simulation/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "card",
                        style: {
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    marginTop: 0
                                },
                                children: "Visual Preview — “Future Earth”"
                            }, void 0, false, {
                                fileName: "[project]/app/simulation/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "muted",
                                children: "High-resolution satellite imagery with predictive climate overlay"
                            }, void 0, false, {
                                fileName: "[project]/app/simulation/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 10,
                                    alignItems: 'center',
                                    marginTop: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative',
                                            width: '100%',
                                            maxWidth: 800
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                id: "earthBase",
                                                src: "https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57730/land_ocean_ice_2048.jpg",
                                                alt: "Earth current state",
                                                style: {
                                                    width: '100%',
                                                    borderRadius: 12,
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    objectFit: 'cover',
                                                    display: 'block'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/simulation/page.tsx",
                                                lineNumber: 40,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pill",
                                                style: {
                                                    position: 'absolute',
                                                    left: 8,
                                                    top: 8
                                                },
                                                children: "Current State"
                                            }, void 0, false, {
                                                fileName: "[project]/app/simulation/page.tsx",
                                                lineNumber: 41,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/simulation/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative',
                                            width: '100%',
                                            maxWidth: 800
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                id: "earthPred",
                                                src: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
                                                alt: "Projected Earth state",
                                                style: {
                                                    width: '100%',
                                                    borderRadius: 12,
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    objectFit: 'cover',
                                                    display: 'block'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/simulation/page.tsx",
                                                lineNumber: 44,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: "predTag",
                                                className: "pill",
                                                style: {
                                                    position: 'absolute',
                                                    right: 8,
                                                    top: 8
                                                },
                                                children: state?.gaia_link?.delta_temp ? `Projected +${state.gaia_link.delta_temp}°C` : 'Projected +2°C'
                                            }, void 0, false, {
                                                fileName: "[project]/app/simulation/page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: "predTint",
                                                style: {
                                                    position: 'absolute',
                                                    inset: 0,
                                                    pointerEvents: 'none',
                                                    borderRadius: 12,
                                                    background: state?.earth_tint ? hexToRgba(state.earth_tint, 0.18) : 'rgba(255, 100, 0, 0.15)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/simulation/page.tsx",
                                                lineNumber: 46,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/simulation/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '100%',
                                            maxWidth: 800,
                                            display: 'flex',
                                            justifyContent: 'flex-end'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "gaia-btn",
                                            onClick: ()=>refresh(),
                                            disabled: loading,
                                            style: {
                                                marginTop: 8
                                            },
                                            children: loading ? 'Refreshing…' : 'Refresh GAIA State'
                                        }, void 0, false, {
                                            fileName: "[project]/app/simulation/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/simulation/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/simulation/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            margin: '6px 0 8px'
                                        },
                                        children: "Scenario Impact"
                                    }, void 0, false, {
                                        fileName: "[project]/app/simulation/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "muted-block",
                                        id: "detailList",
                                        children: 'Run "Simulate Now" to generate the full predicted breakdown (temperature drift, biodiversity loss, sea-level rise, and intervention effectiveness).'
                                    }, void 0, false, {
                                        fileName: "[project]/app/simulation/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/simulation/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PreviewCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                index: result?.index
                            }, void 0, false, {
                                fileName: "[project]/app/simulation/page.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/simulation/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/simulation/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 18
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nexus$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    result: result
                }, void 0, false, {
                    fileName: "[project]/app/simulation/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/simulation/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "footer",
                children: "Demo build — client-only. For full realism you'd replace the preview images + add real satellite APIs & a simulation backend. © GAIA"
            }, void 0, false, {
                fileName: "[project]/app/simulation/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/simulation/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/simulation/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9253cf23._.js.map