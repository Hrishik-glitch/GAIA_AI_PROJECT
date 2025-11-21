(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Header({ onTabChange }) {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('link');
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "brand",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "GAIA Link — Demo"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${active === 'link' ? 'active' : ''}`,
                        onClick: ()=>handleClick('link'),
                        children: "GAIA Link"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${active === 'symbio' ? 'active' : ''}`,
                        onClick: ()=>handleClick('symbio'),
                        children: "SymbioSphere"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${active === 'nexus' ? 'active' : ''}`,
                        onClick: ()=>handleClick('nexus'),
                        children: "Nexus"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(Header, "L3RdK2fyl0rdkB8EYVZ8Iac3l+0=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/useGaiaSimulation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/useGaiaSimulation.ts
__turbopack_context__.s([
    "default",
    ()=>useGaiaSimulation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useGaiaSimulation() {
    _s();
    const [inputs, setInputs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
    const [method, setMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('manual');
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const clamp = (v, min, max)=>Math.max(min, Math.min(max, v));
    const compute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGaiaSimulation.useCallback[compute]": (vals)=>{
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
            const p_co2 = co2 * 0.32;
            const p_def = def * 0.22;
            const p_pop = (pop > 0 ? pop : 0) * 0.10;
            const base_positive = ren * 0.28 + pol * 0.18;
            function eff(x, weight) {
                return weight * (0.2 + 0.8 * Math.tanh(x / 120 * 2.5));
            }
            const iv = interventions;
            const interventionScore = eff(iv.airweaver, 18) + eff(iv.algae, 12) + eff(iv.cryo, 10) + eff(iv.biosynth, 10) + eff(iv.reforest, 24) + eff(iv.ccapture, 16) + eff(iv.transport, 20) + eff(iv.urbangreen, 12);
            let raw = 50 + base_positive * 0.24 + interventionScore * 0.5 - p_co2 * 0.35 - p_def * 0.28 - p_pop * 0.4;
            if (co2 > 80) raw -= (co2 - 80) * 0.35;
            if (def > 70) raw -= (def - 70) * 0.25;
            const index = Math.round(clamp(raw, 0, 100));
            const tempDrift = Number((co2 / 100 * 2.5 - interventionScore / 200).toFixed(2));
            const biodiversity = Math.round(50 + (index - 50) * 0.6);
            const seaLevel = Number((def / 100 * 0.15 + co2 / 100 * 0.1 - (iv.reforest ? iv.reforest / 100 * 0.02 : 0)).toFixed(3));
            return {
                index,
                tempDrift,
                biodiversity,
                seaLevel,
                interventionsApplied: interventions
            };
        }
    }["useGaiaSimulation.useCallback[compute]"], []);
    const simulate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGaiaSimulation.useCallback[simulate]": ()=>{
            const r = compute(inputs);
            setResult(r);
            localStorage.setItem('gaia_result', JSON.stringify(r));
            return r;
        }
    }["useGaiaSimulation.useCallback[simulate]"], [
        inputs,
        compute
    ]);
    const applyAISuggestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGaiaSimulation.useCallback[applyAISuggestion]": ()=>{
            setInputs({
                "useGaiaSimulation.useCallback[applyAISuggestion]": (prev)=>{
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
                }
            }["useGaiaSimulation.useCallback[applyAISuggestion]"]);
        }
    }["useGaiaSimulation.useCallback[applyAISuggestion]"], []);
    const runMonteCarlo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGaiaSimulation.useCallback[runMonteCarlo]": (runs = 40)=>{
            const results = [];
            for(let i = 0; i < runs; i++){
                const base = JSON.parse(JSON.stringify(inputs));
                [
                    'co2',
                    'def',
                    'ren',
                    'pol',
                    'pop'
                ].forEach({
                    "useGaiaSimulation.useCallback[runMonteCarlo]": (k)=>{
                        const jitter = Math.random() * 0.5 - 0.25;
                        base[k] = clamp(Math.round(base[k] * (1 + jitter)), -20, 100);
                    }
                }["useGaiaSimulation.useCallback[runMonteCarlo]"]);
                [
                    'airweaver',
                    'algae',
                    'cryo',
                    'biosynth',
                    'reforest',
                    'ccapture',
                    'transport',
                    'urbangreen'
                ].forEach({
                    "useGaiaSimulation.useCallback[runMonteCarlo]": (k)=>{
                        if (base[k]) base[k + '_int'] = clamp(Math.round(base[k + '_int'] * (0.6 + Math.random() * 0.9)), 0, 100);
                        else if (Math.random() < 0.08) {
                            base[k + '_int'] = Math.round(Math.random() * 60);
                            base[k] = true;
                        }
                    }
                }["useGaiaSimulation.useCallback[runMonteCarlo]"]);
                const r = compute(base);
                results.push(r.index);
            }
            const avg = Math.round(results.reduce({
                "useGaiaSimulation.useCallback[runMonteCarlo].avg": (a, b)=>a + b
            }["useGaiaSimulation.useCallback[runMonteCarlo].avg"], 0) / results.length);
            const baseComputed = compute(inputs);
            baseComputed.index = avg;
            setResult(baseComputed);
            localStorage.setItem('gaia_result', JSON.stringify(baseComputed));
            return baseComputed;
        }
    }["useGaiaSimulation.useCallback[runMonteCarlo]"], [
        inputs,
        compute
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGaiaSimulation.useEffect": ()=>{
            const raw = localStorage.getItem('gaia_result');
            if (raw) setResult(JSON.parse(raw));
        }
    }["useGaiaSimulation.useEffect"], []);
    // scenario save / load
    const saveScenario = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGaiaSimulation.useCallback[saveScenario]": (name)=>{
            const s = JSON.parse(localStorage.getItem('gaia_scenarios') || '[]');
            s.push({
                name,
                vals: inputs,
                created: Date.now()
            });
            localStorage.setItem('gaia_scenarios', JSON.stringify(s));
        }
    }["useGaiaSimulation.useCallback[saveScenario]"], [
        inputs
    ]);
    const loadScenarioList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGaiaSimulation.useCallback[loadScenarioList]": ()=>{
            return JSON.parse(localStorage.getItem('gaia_scenarios') || '[]');
        }
    }["useGaiaSimulation.useCallback[loadScenarioList]"], []);
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
        loadScenarioList
    };
}
_s(useGaiaSimulation, "RbFwy/srE8V5ioTiSl7CkVzDXC0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Gauge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Gauge.tsx
__turbopack_context__.s([
    "default",
    ()=>Gauge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Gauge({ value }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Gauge.useEffect": ()=>{
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
        }
    }["Gauge.useEffect"], [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
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
_s(Gauge, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = Gauge;
var _c;
__turbopack_context__.k.register(_c, "Gauge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/GaiaLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/GaiaLink.tsx
__turbopack_context__.s([
    "default",
    ()=>GaiaLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useGaiaSimulation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Gauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Gauge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function GaiaLink() {
    _s();
    const { inputs, setInputs, method, setMethod, result, simulate, applyAISuggestion, runMonteCarlo, saveScenario } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [scenarioName, setScenarioName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GaiaLink.useEffect": ()=>{
            // reflect last result into gauge if present
            if (result) {
            // nothing extra here; Gauge reads prop
            }
        }
    }["GaiaLink.useEffect"], [
        result
    ]);
    function handleInputChange(k, v) {
        setInputs((p)=>({
                ...p,
                [k]: v
            }));
    }
    function onSimClick() {
        if (method === 'preset') {
            alert('Pick a preset (buttons below)');
            return;
        }
        if (method === 'mc') {
            runMonteCarlo(+document.getElementById('mcRuns')?.value || 40);
            return;
        }
        if (method === 'ai') {
            applyAISuggestion();
            alert('AI suggestion applied — now run Simulate.');
            return;
        }
        simulate();
    }
    function applyPreset(which) {
        if (which === 'business') {
            setInputs((p)=>({
                    ...p,
                    co2: 65,
                    def: 50,
                    ren: 30,
                    pol: 30,
                    pop: 25,
                    airweaver: false,
                    algae: false,
                    cryo: false,
                    biosynth: false
                }));
        } else if (which === 'greenrush') {
            setInputs((p)=>({
                    ...p,
                    co2: 40,
                    def: 25,
                    ren: 75,
                    pol: 70,
                    pop: 18,
                    reforest: true,
                    reforest_int: 60,
                    transport: true,
                    transport_int: 70
                }));
        } else if (which === 'radical') {
            setInputs((p)=>({
                    ...p,
                    co2: 25,
                    def: 10,
                    ren: 85,
                    pol: 85,
                    pop: 5,
                    reforest: true,
                    reforest_int: 90,
                    algae: true,
                    algae_int: 80,
                    biosynth: true,
                    biosynth_int: 70,
                    ccapture: true,
                    ccapture_int: 70
                }));
        } else if (which === 'tech-fix') {
            setInputs((p)=>({
                    ...p,
                    co2: 48,
                    def: 35,
                    ren: 50,
                    pol: 60,
                    pop: 20,
                    airweaver: true,
                    airweaver_int: 80,
                    cryo: true,
                    cryo_int: 60,
                    ccapture: true,
                    ccapture_int: 80
                }));
        }
        alert('Preset applied: ' + which);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "card",
        id: "link",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    marginTop: 0
                },
                children: "GAIA Link — Simulation Hub"
            }, void 0, false, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "muted",
                children: "Choose a simulation method, tweak levers, or let GAIA suggest optimal mix. Results update live and can be used by Nexus and SymbioSphere."
            }, void 0, false, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 12
                },
                className: "subtabs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${method === 'manual' ? 'active' : ''}`,
                        onClick: ()=>setMethod('manual'),
                        "data-method": "manual",
                        children: "Manual Sliders"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${method === 'preset' ? 'active' : ''}`,
                        onClick: ()=>setMethod('preset'),
                        "data-method": "preset",
                        children: "Preset Scenarios"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${method === 'mc' ? 'active' : ''}`,
                        onClick: ()=>setMethod('mc'),
                        "data-method": "mc",
                        children: "Monte-Carlo"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${method === 'ai' ? 'active' : ''}`,
                        onClick: ()=>setMethod('ai'),
                        "data-method": "ai",
                        children: "AI Suggestion"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            method === 'manual' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "method-manual",
                className: "method-block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "controls",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "CO₂ Emissions index"
                                }, void 0, false, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "co2",
                                    type: "range",
                                    min: "0",
                                    max: "100",
                                    value: inputs.co2,
                                    onChange: (e)=>handleInputChange('co2', +e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "muted-block",
                                    children: "Higher = more emissions."
                                }, void 0, false, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-row",
                            style: {
                                gap: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Deforestation pressure"
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "def",
                                            type: "range",
                                            min: "0",
                                            max: "100",
                                            value: inputs.def,
                                            onChange: (e)=>handleInputChange('def', +e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Renewables adoption"
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "ren",
                                            type: "range",
                                            min: "0",
                                            max: "100",
                                            value: inputs.ren,
                                            onChange: (e)=>handleInputChange('ren', +e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Pollution control & regulation"
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "pol",
                                            type: "range",
                                            min: "0",
                                            max: "100",
                                            value: inputs.pol,
                                            onChange: (e)=>handleInputChange('pol', +e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 170
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Population growth"
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "pop",
                                            type: "range",
                                            min: "-20",
                                            max: "80",
                                            value: inputs.pop,
                                            onChange: (e)=>handleInputChange('pop', +e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divider",
                            style: {
                                height: 1,
                                background: 'rgba(255,255,255,0.03)',
                                margin: '6px 0'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                marginBottom: 6
                            },
                            children: "Advanced interventions (toggle + intensity)"
                        }, void 0, false, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "toggle",
                            style: {
                                flexWrap: 'wrap'
                            },
                            children: [
                                [
                                    'airweaver',
                                    'AirWeaver Towers',
                                    'airweaver_int'
                                ],
                                [
                                    'algae',
                                    'Algae Seeding',
                                    'algae_int'
                                ],
                                [
                                    'cryo',
                                    'CryoSentinel/Reflective Cooling',
                                    'cryo_int'
                                ],
                                [
                                    'biosynth',
                                    'BioSynth Loop Pods',
                                    'biosynth_int'
                                ],
                                [
                                    'reforest',
                                    'Reforestation Campaign',
                                    'reforest_int'
                                ],
                                [
                                    'ccapture',
                                    'Carbon Capture',
                                    'ccapture_int'
                                ],
                                [
                                    'transport',
                                    'Transport Electrification',
                                    'transport_int'
                                ],
                                [
                                    'urbangreen',
                                    'Urban Greening (roofs)',
                                    'urbangreen_int'
                                ]
                            ].map(([id, label, intKey])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        minWidth: 220
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            id: id,
                                            checked: !!inputs[id],
                                            onChange: (e)=>handleInputChange(id, e.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: id,
                                            style: {
                                                display: 'inline',
                                                color: 'var(--muted)'
                                            },
                                            children: [
                                                " ",
                                                label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 110,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 6,
                                                marginTop: 6
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: `${id}_int`,
                                                type: "range",
                                                min: "0",
                                                max: "100",
                                                value: inputs[intKey] || 0,
                                                onChange: (e)=>handleInputChange(intKey, +e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/components/GaiaLink.tsx",
                                                lineNumber: 112,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, id, true, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 8,
                                marginTop: 10,
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn",
                                    id: "simulateBtn",
                                    onClick: onSimClick,
                                    children: "Simulate Now"
                                }, void 0, false, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn ghost",
                                    id: "saveScenario",
                                    onClick: ()=>{
                                        const name = prompt('Name this scenario (short):', 'My Scenario');
                                        if (!name) return;
                                        saveScenario(name);
                                        alert('Scenario saved locally.');
                                    },
                                    children: "Save Scenario"
                                }, void 0, false, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginLeft: 'auto'
                                    },
                                    className: "pill",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        id: "lastMethod",
                                        children: [
                                            "Method: ",
                                            method === 'manual' ? 'Manual' : method === 'preset' ? 'Preset' : method === 'mc' ? 'MonteCarlo' : 'AI Suggest'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GaiaLink.tsx",
                                        lineNumber: 125,
                                        columnNumber: 65
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/GaiaLink.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this),
            method === 'preset' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "method-preset",
                className: "method-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Choose preset"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 8,
                            flexWrap: 'wrap',
                            marginTop: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "small",
                                onClick: ()=>applyPreset('business'),
                                children: "Business as Usual"
                            }, void 0, false, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "small",
                                onClick: ()=>applyPreset('greenrush'),
                                children: "Green Rush (fast renewables)"
                            }, void 0, false, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "small",
                                onClick: ()=>applyPreset('radical'),
                                children: "Radical Restoration"
                            }, void 0, false, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "small",
                                onClick: ()=>applyPreset('tech-fix'),
                                children: "Tech Fix"
                            }, void 0, false, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "muted-block",
                        style: {
                            marginTop: 8
                        },
                        children: "Presets set all levers to a recommended configuration."
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this),
            method === 'mc' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "method-mc",
                className: "method-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Monte-Carlo samples"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 8,
                            alignItems: 'center',
                            marginTop: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "mcRuns",
                                type: "number",
                                min: 10,
                                max: 200,
                                defaultValue: 40,
                                style: {
                                    width: 90,
                                    padding: 8,
                                    borderRadius: 8,
                                    border: '1px solid rgba(255,255,255,0.03)',
                                    background: 'transparent',
                                    color: 'var(--ink)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                id: "runMC",
                                onClick: ()=>{
                                    const runs = +document.getElementById('mcRuns').value || 40;
                                    runMonteCarlo(runs);
                                },
                                children: "Run MC"
                            }, void 0, false, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "muted-block",
                        style: {
                            marginTop: 8
                        },
                        children: "This runs randomized interventions to show distribution of outcomes."
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, this),
            method === 'ai' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "method-ai",
                className: "method-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "AI Suggestion (heuristic)"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "muted-block",
                        children: "Heuristic suggests a balanced mix. (Demo: deterministic advice based on weak rules.)"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 8
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn",
                            id: "aiSuggest",
                            onClick: ()=>{
                                applyAISuggestion();
                                alert('AI Suggestion applied (demo heuristics). Now run Simulate.');
                            },
                            children: "Suggest Best Mix"
                        }, void 0, false, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 12,
                    display: 'flex',
                    gap: 12,
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gauge",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Gauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            value: result?.index ?? '—'
                        }, void 0, false, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "muted-block",
                                children: "Last simulation summary"
                            }, void 0, false, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 6
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "simSummary",
                                    className: "pill",
                                    children: result ? `Symbiosis ${result.index} — ΔT: ${result.tempDrift}°C · Biodiversity ${result.biodiversity} · Sea level +${result.seaLevel} m` : 'Run a simulation to see a short summary.'
                                }, void 0, false, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GaiaLink.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/GaiaLink.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(GaiaLink, "uiWSBDYnUoT175vimFCJSXZZofA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = GaiaLink;
var _c;
__turbopack_context__.k.register(_c, "GaiaLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PreviewCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/PreviewCanvas.tsx
__turbopack_context__.s([
    "default",
    ()=>PreviewCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function PreviewCanvas({ index }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PreviewCanvas.useEffect": ()=>{
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
                ctx.fillText('Threat vs Recovery (visual)', 12, 12);
                ctx.fillText('Index: ' + idx, 12, h - 8);
            }
            draw();
            const t = setInterval(draw, 800);
            return ({
                "PreviewCanvas.useEffect": ()=>clearInterval(t)
            })["PreviewCanvas.useEffect"];
        }
    }["PreviewCanvas.useEffect"], [
        index
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        id: "previewCanvas",
        ref: ref,
        width: 520,
        height: 160,
        style: {
            marginTop: 12,
            borderRadius: 10,
            background: 'transparent'
        }
    }, void 0, false, {
        fileName: "[project]/components/PreviewCanvas.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
_s(PreviewCanvas, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = PreviewCanvas;
var _c;
__turbopack_context__.k.register(_c, "PreviewCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SymbioSphere.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/SymbioSphere.tsx
__turbopack_context__.s([
    "default",
    ()=>SymbioSphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function SymbioSphere() {
    _s();
    const [obs, setObs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SymbioSphere.useEffect": ()=>{
            setObs(JSON.parse(localStorage.getItem('gaia_obs') || '[]'));
        }
    }["SymbioSphere.useEffect"], []);
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
    function submit(e) {
        e.preventDefault();
        const form = e.target;
        const type = form.obsType.value;
        const loc = form.obsLoc.value || 'Unknown';
        const level = form.obsLevel.value;
        const note = form.obsNote.value;
        const fileInput = form.obsPhoto;
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(ev) {
                saveObs({
                    type,
                    loc,
                    level,
                    note,
                    photo: ev.target.result
                });
            };
            reader.readAsDataURL(fileInput.files[0]);
        } else saveObs({
            type,
            loc,
            level,
            note
        });
        form.reset();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "symbio",
        className: "card",
        style: {
            marginTop: 18
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    marginTop: 0
                },
                children: "SymbioSphere — Crowd Sensing"
            }, void 0, false, {
                fileName: "[project]/components/SymbioSphere.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "muted",
                children: "Submit qualitative observations. No numeric fields required — choose categories and levels; upload a photo if available."
            }, void 0, false, {
                fileName: "[project]/components/SymbioSphere.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                id: "obsForm",
                style: {
                    marginTop: 12,
                    display: 'grid',
                    gap: 10
                },
                onSubmit: submit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "obsType",
                                name: "obsType",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "air",
                                        children: "Air Quality / Smell"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "water",
                                        children: "Water Condition (stream, shore)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "species",
                                        children: "Species Sighted (rare/common)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "noise",
                                        children: "Noise / Light Pollution"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "soil",
                                        children: "Soil / Crop Health"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "tree",
                                        children: "Tree Planting / Green works"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "obsLoc",
                                name: "obsLoc",
                                type: "text",
                                placeholder: "Location (city / locality)"
                            }, void 0, false, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SymbioSphere.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "obsLevel",
                                name: "obsLevel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "excellent",
                                        children: "Excellent / Healthy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "good",
                                        children: "Good"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "neutral",
                                        children: "Neutral"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "concern",
                                        children: "Concern"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "critical",
                                        children: "Critical / Emergency"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "obsPhoto",
                                name: "obsPhoto",
                                type: "file",
                                accept: "image/*"
                            }, void 0, false, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SymbioSphere.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "obsNote",
                        name: "obsNote",
                        placeholder: "Describe what you observed (optional)..."
                    }, void 0, false, {
                        fileName: "[project]/components/SymbioSphere.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                id: "submitObs",
                                type: "submit",
                                children: "Submit Observation"
                            }, void 0, false, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn ghost",
                                id: "viewObs",
                                type: "button",
                                onClick: ()=>{
                                    document.querySelector('.tab[data-tab=\"symbio\"]')?.dispatchEvent(new Event('click'));
                                },
                                children: "View Live Feed"
                            }, void 0, false, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginLeft: 'auto'
                                },
                                className: "muted-block",
                                children: "Local demo only — observations stored in browser."
                            }, void 0, false, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SymbioSphere.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SymbioSphere.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "obsFeed",
                style: {
                    marginTop: 12,
                    display: 'grid',
                    gap: 8
                },
                children: obs.slice().reverse().map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: 10,
                            borderRadius: 8,
                            background: 'rgba(255,255,255,0.02)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 8,
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            minWidth: 6,
                                            height: 36,
                                            background: o.color,
                                            borderRadius: 4
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    o.type,
                                                    " — ",
                                                    o.loc
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SymbioSphere.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "muted-block",
                                                children: [
                                                    o.level,
                                                    " · ",
                                                    new Date(o.at).toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SymbioSphere.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SymbioSphere.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 8
                                },
                                children: o.note || ''
                            }, void 0, false, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            o.photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 8
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: o.photo,
                                    style: {
                                        maxWidth: 120,
                                        borderRadius: 6
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/SymbioSphere.tsx",
                                    lineNumber: 78,
                                    columnNumber: 51
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/SymbioSphere.tsx",
                                lineNumber: 78,
                                columnNumber: 24
                            }, this) : null
                        ]
                    }, i, true, {
                        fileName: "[project]/components/SymbioSphere.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/SymbioSphere.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SymbioSphere.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(SymbioSphere, "2+1cHPIy0vOg+U9EtRi2zGiZ1nA=");
_c = SymbioSphere;
var _c;
__turbopack_context__.k.register(_c, "SymbioSphere");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Nexus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Nexus.tsx
__turbopack_context__.s([
    "default",
    ()=>Nexus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Nexus({ result }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tick, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nexus.useEffect": ()=>{
            let raf = 0;
            function draw() {
                const canvas = canvasRef.current;
                if (!canvas) return;
                const ctx = canvas.getContext('2d');
                const w = canvas.width, h = canvas.height;
                ctx.clearRect(0, 0, w, h);
                const g = ctx.createLinearGradient(0, 0, 0, h);
                g.addColorStop(0, 'rgba(4,12,20,0.6)');
                g.addColorStop(1, 'rgba(2,6,10,0.6)');
                ctx.fillStyle = g;
                ctx.fillRect(0, 0, w, h);
                const idx = result?.index ?? 50;
                const chaos = result ? idx > 65 ? 0.6 : idx > 40 ? 1.2 : 2.8 : 1.5;
                const hue = idx > 65 ? 150 : idx > 40 ? 45 : 0;
                const cols = Math.round(18 + 1 / Math.max(1, chaos) * 20);
                for(let i = 0; i < cols; i++){
                    const baseX = (i + 0.5) / cols * w;
                    let x = baseX + 40 * Math.sin((tick + i * 20) / 80);
                    let y = 20;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    const segments = 6;
                    for(let s = 0; s < segments; s++){
                        const cx = x + (Math.random() - 0.5) * 80 * chaos + 20 * Math.sin((tick + i * 10 + s * 5) / 40);
                        const cy = y + (s + 1) * (h / (segments + 1)) + 10 * Math.cos((tick + i * 7 + s * 11) / 40);
                        const nx = baseX + (s + 1) * (w / (segments + 2) - w / (cols * segments)) + Math.sin((tick + s * i) / 30) * 60 * chaos;
                        ctx.quadraticCurveTo(cx, cy, nx, cy + 10);
                        x = nx;
                        y = cy + 10;
                    }
                    ctx.lineWidth = 0.8 + 1.6 * (1 - idx / 100);
                    ctx.strokeStyle = `hsla(${hue},80%,${45 + 20 * Math.sin((tick + i) / 30)}%,${0.35 + (0.7 - chaos / 4)})`;
                    ctx.stroke();
                }
                const cx = w * 0.75, cy = h * 0.5;
                const pulse = 20 + (result ? result.index / 100 * 60 : 30) * Math.abs(Math.sin(tick / 40));
                const g2 = ctx.createRadialGradient(cx, cy, pulse * 0.1, cx, cy, pulse * 3);
                g2.addColorStop(0, `hsla(${hue},90%,60%,${0.22})`);
                g2.addColorStop(1, 'rgba(10,12,18,0)');
                ctx.fillStyle = g2;
                ctx.beginPath();
                ctx.arc(cx, cy, pulse * 3, 0, Math.PI * 2);
                ctx.fill();
                setTick({
                    "Nexus.useEffect.draw": (t)=>t + 1
                }["Nexus.useEffect.draw"]);
                raf = requestAnimationFrame(draw);
            }
            raf = requestAnimationFrame(draw);
            return ({
                "Nexus.useEffect": ()=>cancelAnimationFrame(raf)
            })["Nexus.useEffect"];
        }
    }["Nexus.useEffect"], [
        result,
        tick
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            gap: 12,
            alignItems: 'flex-start'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                id: "nexusCanvas",
                ref: canvasRef,
                width: 800,
                height: 340,
                style: {
                    borderRadius: 10,
                    display: 'block',
                    background: 'linear-gradient(180deg, rgba(2,8,14,0.6), rgba(3,12,20,0.6))'
                }
            }, void 0, false, {
                fileName: "[project]/components/Nexus.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 280
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'rgba(255,255,255,0.02)',
                            padding: 10,
                            borderRadius: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pill",
                                        id: "nexusMoodTag",
                                        children: result ? result.index > 65 ? 'Harmonic' : result.index > 40 ? 'Tense' : 'Stressed' : '—'
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nexus.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "muted-block",
                                                children: "Symbiosis index"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: "nexusIndex",
                                                style: {
                                                    fontWeight: 700,
                                                    fontSize: 22
                                                },
                                                children: result ? result.index : '—'
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Nexus.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nexus.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "muted-block",
                                        children: "Timeline"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nexus.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "timeSlider",
                                        type: "range",
                                        min: 0,
                                        max: 100,
                                        defaultValue: 100
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nexus.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 8,
                                            marginTop: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn",
                                                id: "recompute",
                                                children: "Recompute Visuals"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn ghost",
                                                id: "exportPNG",
                                                onClick: ()=>{
                                                    const canvas = canvasRef.current;
                                                    if (!canvas) return;
                                                    const a = document.createElement('a');
                                                    a.href = canvas.toDataURL('image/png');
                                                    a.download = 'gaia_nexus.png';
                                                    a.click();
                                                },
                                                children: "Export PNG"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Nexus.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nexus.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nexus.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 12,
                            background: 'rgba(255,255,255,0.02)',
                            padding: 10,
                            borderRadius: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "muted-block",
                                children: "Interpretation"
                            }, void 0, false, {
                                fileName: "[project]/components/Nexus.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "nexusText",
                                style: {
                                    marginTop: 8
                                },
                                children: result ? `ΔT ${result.tempDrift}°C · Biodiversity ${result.biodiversity}/100 · Sea +${result.seaLevel}m. Filaments visualize ecosystem stress.` : 'Run a simulation to populate Nexus with a living structure built from the prediction.'
                            }, void 0, false, {
                                fileName: "[project]/components/Nexus.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nexus.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nexus.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Nexus.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(Nexus, "7+JBLtkgtpaVHtKWEAGgVmKh05w=");
_c = Nexus;
var _c;
__turbopack_context__.k.register(_c, "Nexus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Chatbot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Chatbot() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "gaia-btn icon chat-toggle",
                onClick: ()=>setOpen(!open),
                children: open ? "✖" : "GAIA"
            }, void 0, false, {
                fileName: "[project]/components/Chatbot.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-popup glass",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-header",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-window",
                        children: messages.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chat-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-controls",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "gaia-input",
                                placeholder: "Ask GAIA..."
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "gaia-btn pill",
                                onClick: resetChat,
                                children: "Clear Chat"
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(Chatbot, "V+difNoG/GT7O/2VXnkwRL+kHqw=");
_c = Chatbot;
var _c;
__turbopack_context__.k.register(_c, "Chatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/simulation/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/simulation/page.tsx
__turbopack_context__.s([
    "default",
    ()=>SimulationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GaiaLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GaiaLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PreviewCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PreviewCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SymbioSphere$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SymbioSphere.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nexus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Nexus.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Chatbot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useGaiaSimulation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function SimulationPage() {
    _s();
    const { result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(); // quick hook use to pass result to Nexus & preview if needed
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onTabChange: ()=>{}
            }, void 0, false, {
                fileName: "[project]/app/simulation/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GaiaLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/simulation/page.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SymbioSphere$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/simulation/page.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/simulation/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "card",
                        style: {
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    marginTop: 0
                                },
                                children: "Visual Preview — “Future Earth”"
                            }, void 0, false, {
                                fileName: "[project]/app/simulation/page.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "muted",
                                children: "Live NASA satellite view of Earth and predictive model overlay"
                            }, void 0, false, {
                                fileName: "[project]/app/simulation/page.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 10,
                                    alignItems: 'center',
                                    marginTop: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative',
                                            width: '100%',
                                            maxWidth: 800
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                id: "earthBase",
                                                src: "https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image/jpeg&LAYERS=BlueMarble_ShadedRelief_Bathymetry&WIDTH=512&HEIGHT=256&CRS=EPSG:4326&BBOX=-180,-90,180,90",
                                                alt: "Earth live map",
                                                style: {
                                                    width: '100%',
                                                    borderRadius: 12,
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    objectFit: 'cover',
                                                    display: 'block'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/simulation/page.tsx",
                                                lineNumber: 27,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pill",
                                                style: {
                                                    position: 'absolute',
                                                    left: 8,
                                                    top: 8
                                                },
                                                children: "Now"
                                            }, void 0, false, {
                                                fileName: "[project]/app/simulation/page.tsx",
                                                lineNumber: 28,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/simulation/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative',
                                            width: '100%',
                                            maxWidth: 800
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                id: "earthPred",
                                                src: "https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image/jpeg&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&WIDTH=512&HEIGHT=256&CRS=EPSG:4326&BBOX=-180,-90,180,90",
                                                alt: "Predicted Earth map",
                                                style: {
                                                    width: '100%',
                                                    borderRadius: 12,
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    objectFit: 'cover',
                                                    display: 'block',
                                                    mixBlendMode: 'multiply'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/simulation/page.tsx",
                                                lineNumber: 31,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: "predTag",
                                                className: "pill",
                                                style: {
                                                    position: 'absolute',
                                                    right: 8,
                                                    top: 8
                                                },
                                                children: "Predicted"
                                            }, void 0, false, {
                                                fileName: "[project]/app/simulation/page.tsx",
                                                lineNumber: 32,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: "predTint",
                                                style: {
                                                    position: 'absolute',
                                                    inset: 0,
                                                    pointerEvents: 'none',
                                                    borderRadius: 12
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/simulation/page.tsx",
                                                lineNumber: 33,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/simulation/page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/simulation/page.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            margin: '6px 0 8px'
                                        },
                                        children: "Details"
                                    }, void 0, false, {
                                        fileName: "[project]/app/simulation/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "muted-block",
                                        id: "detailList",
                                        children: "Run “Simulate Now” to generate the full predicted breakdown (temperature, biodiversity, sea-level drift, intervention effects)."
                                    }, void 0, false, {
                                        fileName: "[project]/app/simulation/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/simulation/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PreviewCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                index: result?.index
                            }, void 0, false, {
                                fileName: "[project]/app/simulation/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/simulation/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/simulation/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 18
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nexus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    result: result
                }, void 0, false, {
                    fileName: "[project]/app/simulation/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/simulation/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "footer",
                children: "Demo build — client-only. For full realism you'd replace the preview images + add real satellite APIs & a simulation backend. © GAIA"
            }, void 0, false, {
                fileName: "[project]/app/simulation/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/simulation/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/simulation/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(SimulationPage, "O1pNhU6pp8C2d5Q2viZg7uvfIzs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = SimulationPage;
var _c;
__turbopack_context__.k.register(_c, "SimulationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e1c6f1a6._.js.map