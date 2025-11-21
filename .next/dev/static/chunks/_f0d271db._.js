(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Navbar() {
    _s();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const tab = (href, label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: `gaia-btn pill ${path === href ? "primary" : "ghost"}`,
            children: label
        }, void 0, false, {
            fileName: "[project]/components/Navbar.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "brand",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "GAIA Link — Demo"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "muted",
                                children: "Simulation Hub · SymbioSphere · Nexus · Eco-Tracker"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                children: [
                    tab("/", "Home"),
                    tab("/about", "About"),
                    tab("/gaia-link", "GAIA Link"),
                    tab("/symbiosphere", "SymbioSphere"),
                    tab("/nexus", "Nexus"),
                    tab("/eco-tracker", "Eco-Tracker")
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Navbar, "kx72sda92+XlSh1QiZvq/YVQxpY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
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
"[project]/lib/useGaiaState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useGaiaState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useGaiaState() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
_s(useGaiaState, "8XeSSA28qz7hOltG+8ROhH/URvc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/EarthPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/EarthPreview.tsx
__turbopack_context__.s([
    "default",
    ()=>EarthPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useGaiaState.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function EarthPreview({ size = 120, tint, label }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { state, loading, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EarthPreview.useEffect": ()=>{
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
            const secondTint = earthTint.startsWith('rgba') ? earthTint.replace(/(\d+(?:\.\d+)?)\)$/, {
                "EarthPreview.useEffect": (match, a)=>Math.min(1, parseFloat(a) + 0.3) + ')'
            }["EarthPreview.useEffect"]) : earthTint + 'dd';
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
        }
    }["EarthPreview.useEffect"], [
        state,
        loading,
        tint
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8
        },
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(EarthPreview, "I/bjMh7MocSRVw3G7qbAge4LKJE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = EarthPreview;
var _c;
__turbopack_context__.k.register(_c, "EarthPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Filament.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Filament.tsx
__turbopack_context__.s([
    "default",
    ()=>Filament
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// --- Supabase ---
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://hpnjbvqozhbbvlsmjkem.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwbmpidnFvemhiYnZsc21qa2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzYyNzgsImV4cCI6MjA3ODM1MjI3OH0.Il-qvoLYHGVwn_jhl2kSgy8riy2IoVcP8xMBI06iJHE"));
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
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tick, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [symbioData, setSymbioData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        vibration: 1,
        severity: 0,
        color: '#20e07a'
    });
    const [gaiaData, setGaiaData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        variation: 0.5,
        index: index ?? 60
    });
    // -------------------------------------------------------------------------
    // FETCH CITY-SPECIFIC DATA (SymbioSphere + GaiaLink)
    // -------------------------------------------------------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Filament.useEffect": ()=>{
            const fetchData = {
                "Filament.useEffect.fetchData": async ()=>{
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
                }
            }["Filament.useEffect.fetchData"];
            fetchData();
            // LIVE UPDATES
            const symbioChannel = supabase.channel(`symbiosphere_${city}`).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'city_symbiosphere',
                filter: `city=eq.${city}`
            }, {
                "Filament.useEffect.symbioChannel": (payload)=>{
                    if (payload.new) {
                        setSymbioData({
                            vibration: payload.new.vibration,
                            severity: payload.new.severity,
                            color: payload.new.color
                        });
                    }
                }
            }["Filament.useEffect.symbioChannel"]).subscribe();
            const gaiaChannel = supabase.channel(`gaialink_${city}`).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'city_gaialink',
                filter: `city=eq.${city}`
            }, {
                "Filament.useEffect.gaiaChannel": (payload)=>{
                    if (payload.new) {
                        setGaiaData({
                            variation: payload.new.variation,
                            index: payload.new.index
                        });
                    }
                }
            }["Filament.useEffect.gaiaChannel"]).subscribe();
            return ({
                "Filament.useEffect": ()=>{
                    supabase.removeChannel(symbioChannel);
                    supabase.removeChannel(gaiaChannel);
                }
            })["Filament.useEffect"];
        }
    }["Filament.useEffect"], [
        city
    ]);
    // -------------------------------------------------------------------------
    // DRAW LOOP — LOOK *UNCHANGED* — LOGIC UPGRADED
    // -------------------------------------------------------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Filament.useEffect": ()=>{
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
                setTick({
                    "Filament.useEffect.draw": (t)=>t + 1
                }["Filament.useEffect.draw"]);
                raf = requestAnimationFrame(draw);
            }
            raf = requestAnimationFrame(draw);
            return ({
                "Filament.useEffect": ()=>cancelAnimationFrame(raf)
            })["Filament.useEffect"];
        }
    }["Filament.useEffect"], [
        city,
        symbioData,
        gaiaData,
        index,
        symbioSignal,
        tint
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
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
_s(Filament, "t3FUEo1hgV5HliFVeWpu4+t4fJo=");
_c = Filament;
var _c;
__turbopack_context__.k.register(_c, "Filament");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Nexus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nexus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useGaiaState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EarthPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EarthPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Filament$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Filament.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const { state, loading, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [activeCity, setActiveCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Global');
    const [symbioSummary, setSymbioSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [symbioDetails, setSymbioDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [citySymbio, setCitySymbio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Load and filter observations for the active city
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nexus.useEffect": ()=>{
            try {
                const raw = JSON.parse(localStorage.getItem('gaia_obs') || '[]');
                // keep only allowed locations, and group by loc
                const filtered = Array.isArray(raw) ? raw.filter({
                    "Nexus.useEffect": (o)=>{
                        return o && typeof o.loc === 'string' && ALLOWED_LOCATIONS.includes(o.loc);
                    }
                }["Nexus.useEffect"]) : [];
                setCitySymbio(filtered);
            } catch (e) {
                setCitySymbio([]);
            }
        }
    }["Nexus.useEffect"], []);
    // When activeCity changes, compute summary & details from observations limited to this city
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nexus.useEffect": ()=>{
            try {
                const raw = JSON.parse(localStorage.getItem('gaia_obs') || '[]');
                const filtered = (Array.isArray(raw) ? raw : []).filter({
                    "Nexus.useEffect.filtered": (o)=>o && o.loc === activeCity
                }["Nexus.useEffect.filtered"]);
                if (filtered.length === 0) {
                    setSymbioSummary('');
                    setSymbioDetails('');
                    return;
                }
                const criticalCount = filtered.filter({
                    "Nexus.useEffect": (o)=>o.level === 'critical'
                }["Nexus.useEffect"]).length;
                const concernCount = filtered.filter({
                    "Nexus.useEffect": (o)=>o.level === 'concern'
                }["Nexus.useEffect"]).length;
                const goodCount = filtered.filter({
                    "Nexus.useEffect": (o)=>o.level === 'excellent' || o.level === 'good'
                }["Nexus.useEffect"]).length;
                const categories = [
                    ...new Set(filtered.map({
                        "Nexus.useEffect": (o)=>o.type
                    }["Nexus.useEffect"]))
                ];
                const observationDetails = filtered.slice().reverse().map({
                    "Nexus.useEffect.observationDetails": (o)=>{
                        return `${o.type} (${o.level}) — ${o.note || 'no note'}`;
                    }
                }["Nexus.useEffect.observationDetails"]).join(' | ');
                const summary = `${filtered.length} observations for ${activeCity}: ${goodCount} positive, ${concernCount} concerns, ${criticalCount} critical. Categories: ${categories.join(', ')}`;
                setSymbioSummary(summary);
                setSymbioDetails(observationDetails);
            } catch (e) {
                setSymbioSummary('');
                setSymbioDetails('');
            }
        }
    }["Nexus.useEffect"], [
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
    const baseIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Nexus.useMemo[baseIndex]": ()=>{
            const stateIndex = getCityIndexFromState(activeCity);
            if (typeof stateIndex === 'number') return clamp(stateIndex);
            if (result && typeof result.index === 'number') return clamp(result.index);
            if (state && state.gaia_link && typeof state.gaia_link.index === 'number') return clamp(state.gaia_link.index);
            return 50;
        }
    }["Nexus.useMemo[baseIndex]"], [
        activeCity,
        state,
        loading,
        result
    ]);
    const sensitivity = CITY_SENSITIVITY[activeCity];
    // Sensitivity is applied softly: weightedAverage(baseIndex, baseIndex*sensitivity, factor)
    // We only lightly nudge the index to avoid wild jumps; global is more inert.
    const idx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Nexus.useMemo[idx]": ()=>{
            // Apply soft sensitivity multiplier but dampen by factor to avoid explosions
            const damp = activeCity === 'Global' ? 0.35 : 0.85; // global much more damped
            const adjusted = baseIndex * (1 + (sensitivity - 1) * damp);
            return clamp(Math.round(adjusted * 100) / 100, 0, 100);
        }
    }["Nexus.useMemo[idx]"], [
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
    const symbioForCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Nexus.useMemo[symbioForCity]": ()=>{
            try {
                const raw = JSON.parse(localStorage.getItem('gaia_obs') || '[]');
                return (Array.isArray(raw) ? raw : []).filter({
                    "Nexus.useMemo[symbioForCity]": (o)=>o && o.loc === activeCity
                }["Nexus.useMemo[symbioForCity]"]);
            } catch  {
                return [];
            }
        }
    }["Nexus.useMemo[symbioForCity]"], [
        activeCity
    ]);
    // derive symbio signal: vibration average, flux/severity score etc.
    const symbioSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Nexus.useMemo[symbioSignal]": ()=>{
            if (!Array.isArray(symbioForCity) || symbioForCity.length === 0) {
                return {
                    vibration: 0.5,
                    flux: 0.2,
                    severity: 0
                };
            }
            const severityScore = symbioForCity.reduce({
                "Nexus.useMemo[symbioSignal]": (acc, o)=>{
                    const lvl = o.level === 'critical' ? 3 : o.level === 'concern' ? 2 : 1;
                    return acc + lvl;
                }
            }["Nexus.useMemo[symbioSignal]"], 0) / (symbioForCity.length * 3);
            // vibration stronger if more criticals + sensitivity
            const vibration = clamp(0.4 + severityScore * 1.8 * CITY_SENSITIVITY[activeCity], 0.1, 2.5);
            const flux = clamp(0.1 + severityScore * 1.5, 0, 2);
            return {
                vibration,
                flux,
                severity: severityScore
            };
        }
    }["Nexus.useMemo[symbioSignal]"], [
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
    const interpretationText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Nexus.useMemo[interpretationText]": ()=>buildInterpretation()
    }["Nexus.useMemo[interpretationText]"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 8,
                    marginBottom: 8
                },
                children: ALLOWED_LOCATIONS.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-start'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Filament$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                city: activeCity,
                                index: idx,
                                tint: gaiaTint,
                                symbioSignal: symbioSignal
                            }, void 0, false, {
                                fileName: "[project]/components/Nexus.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12,
                                    background: 'rgba(255,255,255,0.02)',
                                    padding: 12,
                                    borderRadius: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            height: 24,
                                            gap: 2,
                                            borderRadius: 6,
                                            overflow: 'hidden',
                                            background: 'rgba(0,0,0,0.2)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginTop: 4,
                                            fontSize: 11
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "muted",
                                                children: "Stress"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 300
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(255,255,255,0.02)',
                                    padding: 12,
                                    borderRadius: 10,
                                    textAlign: 'center',
                                    marginBottom: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 8,
                                            display: 'flex',
                                            justifyContent: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EarthPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                children: state && !loading ? state.mood || (idx > 65 ? 'Harmonic' : idx > 40 ? 'Tense' : 'Stressed') : result ? result.index > 65 ? 'Harmonic' : result.index > 40 ? 'Tense' : 'Stressed' : '—'
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 263,
                                                columnNumber: 15
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
                                                        lineNumber: 271,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 8,
                                            marginTop: 8,
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "muted-block",
                                                children: "Risk"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nexus.tsx",
                                                lineNumber: 279,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginLeft: 'auto',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "muted-block",
                                                        children: "Tint"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Nexus.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 8,
                                                    marginTop: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "gaia-btn ghost",
                                                        onClick: ()=>refresh(),
                                                        disabled: loading,
                                                        children: loading ? 'Syncing...' : 'Sync GAIA State'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Nexus.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'rgba(255,255,255,0.02)',
                    padding: 12,
                    borderRadius: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "muted-block",
                        children: "Interpretation"
                    }, void 0, false, {
                        fileName: "[project]/components/Nexus.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(Nexus, "X/GFCctUs1+b+vCPPO8+ONCoxWk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Nexus;
var _c;
__turbopack_context__.k.register(_c, "Nexus");
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
_s(PreviewCanvas, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = PreviewCanvas;
var _c;
__turbopack_context__.k.register(_c, "PreviewCanvas");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://hpnjbvqozhbbvlsmjkem.supabase.co") || '', ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwbmpidnFvemhiYnZsc21qa2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzYyNzgsImV4cCI6MjA3ODM1MjI3OH0.Il-qvoLYHGVwn_jhl2kSgy8riy2IoVcP8xMBI06iJHE") || '');
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
    const computeWithCity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGaiaSimulation.useCallback[computeWithCity]": (vals, location = 'Global')=>{
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
        }
    }["useGaiaSimulation.useCallback[computeWithCity]"], []);
    // existing simulate wrapper uses computeWithCity('Global') by default previously — keep a local simulate that still computes locally,
    // but note runSimulation in GaiaLink will call server endpoints which also get `city`.
    const simulate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGaiaSimulation.useCallback[simulate]": ()=>{
            const r = computeWithCity(inputs, 'Global');
            setResult(r);
            localStorage.setItem('gaia_result', JSON.stringify(r));
            return r;
        }
    }["useGaiaSimulation.useCallback[simulate]"], [
        inputs,
        computeWithCity
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
                // run Monte Carlo using Global local compute for distribution; caller can specify city-run if desired.
                const r = computeWithCity(base, 'Global');
                results.push(r.index);
            }
            const avg = Math.round(results.reduce({
                "useGaiaSimulation.useCallback[runMonteCarlo].avg": (a, b)=>a + b
            }["useGaiaSimulation.useCallback[runMonteCarlo].avg"], 0) / results.length);
            const baseComputed = computeWithCity(inputs, 'Global');
            baseComputed.index = avg;
            setResult(baseComputed);
            localStorage.setItem('gaia_result', JSON.stringify(baseComputed));
            return baseComputed;
        }
    }["useGaiaSimulation.useCallback[runMonteCarlo]"], [
        inputs,
        computeWithCity
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGaiaSimulation.useEffect": ()=>{
            const raw = localStorage.getItem('gaia_result');
            if (raw) setResult(JSON.parse(raw));
        }
    }["useGaiaSimulation.useEffect"], []);
    // saveScenario now accepts optional location and persists to Supabase with `location` column
    const saveScenario = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGaiaSimulation.useCallback[saveScenario]": async (name, location)=>{
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
        }
    }["useGaiaSimulation.useCallback[saveScenario]"], [
        inputs,
        result,
        computeWithCity
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
        loadScenarioList,
        setResult,
        computeWithCity
    };
}
_s(useGaiaSimulation, "xTQ++bY+46IDpU1OjiCVC0D0bHI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/nexus/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/nexus/page.tsx
__turbopack_context__.s([
    "default",
    ()=>NexusPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Chatbot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nexus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Nexus.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PreviewCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PreviewCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useGaiaSimulation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useGaiaState.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
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
function NexusPage() {
    _s();
    const { result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { state, loading, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/nexus/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        style: {
                            marginBottom: 20,
                            background: 'var(--glass)',
                            borderColor: 'var(--accent)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                style: {
                                    marginTop: 0,
                                    color: 'var(--accent)'
                                },
                                children: "ℹ️ Nexus Overview"
                            }, void 0, false, {
                                fileName: "[project]/app/nexus/page.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                style: {
                                    margin: 0,
                                    paddingLeft: 20,
                                    color: 'var(--muted)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Nexus:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/nexus/page.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            " Analyze simulation results from GAIA Link and SymbioSphere in a unified dashboard."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/nexus/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Scenario Breakdown:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/nexus/page.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            " View detailed impacts on temperature, biodiversity, sea levels, and intervention effectiveness."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/nexus/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Visualizations:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/nexus/page.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this),
                                            " Interactive charts and graphs show trends and projections over time."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/nexus/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Decision Support:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/nexus/page.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this),
                                            " Use data to evaluate the success of different climate strategies."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/nexus/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Global State:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/nexus/page.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this),
                                            " Reflects real-time changes from other modules for comprehensive insights."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/nexus/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/nexus/page.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/nexus/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 18
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nexus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            result: result
                        }, void 0, false, {
                            fileName: "[project]/app/nexus/page.tsx",
                            lineNumber: 45,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/nexus/page.tsx",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
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
                                    children: 'Visual Preview — "Future Earth"'
                                }, void 0, false, {
                                    fileName: "[project]/app/nexus/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "muted",
                                    children: "High-resolution satellite imagery with predictive climate overlay"
                                }, void 0, false, {
                                    fileName: "[project]/app/nexus/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
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
                                                    fileName: "[project]/app/nexus/page.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pill",
                                                    style: {
                                                        position: 'absolute',
                                                        left: 8,
                                                        top: 8
                                                    },
                                                    children: "Current State"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/nexus/page.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/nexus/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
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
                                                    fileName: "[project]/app/nexus/page.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    id: "predTag",
                                                    className: "pill",
                                                    style: {
                                                        position: 'absolute',
                                                        right: 8,
                                                        top: 8
                                                    },
                                                    children: state?.gaia_link?.delta_temp ? `Projected +${state.gaia_link.delta_temp}°C` : 'Projected +2°C'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/nexus/page.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    id: "predTint",
                                                    style: {
                                                        position: 'absolute',
                                                        inset: 0,
                                                        pointerEvents: 'none',
                                                        borderRadius: 12,
                                                        background: state?.earth_tint ? hexToRgba(state.earth_tint, 0.18) : 'rgba(255, 100, 0, 0.15)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/nexus/page.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/nexus/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '100%',
                                                maxWidth: 800,
                                                display: 'flex',
                                                justifyContent: 'flex-end'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "gaia-btn",
                                                onClick: ()=>refresh(),
                                                disabled: loading,
                                                style: {
                                                    marginTop: 8
                                                },
                                                children: [
                                                    loading ? 'Refreshing…' : 'Refresh GAIA State',
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HelpTooltip, {
                                                        title: "Refresh GAIA State",
                                                        children: "Updates the global state with the latest simulation results from other modules."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/nexus/page.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 162
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/nexus/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/nexus/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/nexus/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PreviewCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    index: result?.index
                                }, void 0, false, {
                                    fileName: "[project]/app/nexus/page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/nexus/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/nexus/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/nexus/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/nexus/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(NexusPage, "ISHUURgtm8y2KV9weu8nejt/F44=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = NexusPage;
var _c;
__turbopack_context__.k.register(_c, "NexusPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_f0d271db._.js.map