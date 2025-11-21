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
    const [screenImage, setScreenImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSharing, setIsSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function captureScreen() {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({
                video: true
            });
            const video = document.createElement('video');
            video.srcObject = stream;
            await video.play();
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(video, 0, 0);
            const imageData = canvas.toDataURL('image/png');
            setScreenImage(imageData);
            // Stop the stream
            stream.getTracks().forEach((track)=>track.stop());
            setIsSharing(true);
        } catch (err) {
            console.error('Screen capture failed:', err);
            alert('Screen capture failed. Please allow screen sharing permissions.');
        }
    }
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
                ],
                screenImage: screenImage
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
                    gaia: reply,
                    screenShared: !!screenImage
                }
            ]);
        setScreenImage(null);
        setIsSharing(false);
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
                lineNumber: 81,
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
                            lineNumber: 88,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Chatbot.tsx",
                        lineNumber: 87,
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
                                        lineNumber: 94,
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
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/Chatbot.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Chatbot.tsx",
                        lineNumber: 91,
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
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "gaia-btn secondary",
                                style: {
                                    fontSize: '12px',
                                    padding: '6px 10px'
                                },
                                onClick: captureScreen,
                                children: isSharing ? "✓ Screen" : "📺 Share"
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "gaia-btn primary",
                                onClick: handleSend,
                                children: "Send"
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chatbot.tsx",
                        lineNumber: 100,
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
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "gaia-btn danger",
                                onClick: resetMemory,
                                children: "Reset Memory"
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chatbot.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Chatbot.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Chatbot, "mz3msEmvNKzFwV0bg7I2sLK3gp8=");
_c = Chatbot;
var _c;
__turbopack_context__.k.register(_c, "Chatbot");
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
"[project]/lib/useLastSimulation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/useLastSimulation.ts
__turbopack_context__.s([
    "default",
    ()=>useLastSimulation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://hpnjbvqozhbbvlsmjkem.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwbmpidnFvemhiYnZsc21qa2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzYyNzgsImV4cCI6MjA3ODM1MjI3OH0.Il-qvoLYHGVwn_jhl2kSgy8riy2IoVcP8xMBI06iJHE"));
function useLastSimulation() {
    _s();
    const [lastResult, setLastResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastAnalysis, setLastAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [scenarios, setScenarios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLastSimulation.useEffect": ()=>{
            fetchLastSimulation();
        }
    }["useLastSimulation.useEffect"], []);
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
_s(useLastSimulation, "v4iGUJUorHinIhtoK7YJHXLVZyc=");
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
"[project]/components/RealTimeGraph.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RealTimeGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function RealTimeGraph({ title = 'Series', color = '#2de8a7', data = [], height = 120 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Simple SVG polyline renderer with axes. Recalculates path when data changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RealTimeGraph.useEffect": ()=>{
            const svg = ref.current;
            if (!svg) return;
            const w = svg.clientWidth || 300;
            const h = height;
            if (!data || data.length === 0) {
                const poly = svg.querySelector('polyline');
                if (poly) poly.setAttribute('points', '');
                // Clear axes
                const existingAxes = svg.querySelectorAll('.axis');
                existingAxes.forEach({
                    "RealTimeGraph.useEffect": (el)=>el.remove()
                }["RealTimeGraph.useEffect"]);
                return;
            }
            const xs = data.map({
                "RealTimeGraph.useEffect.xs": (p)=>p.x
            }["RealTimeGraph.useEffect.xs"]);
            const ys = data.map({
                "RealTimeGraph.useEffect.ys": (p)=>p.y
            }["RealTimeGraph.useEffect.ys"]);
            const xmin = Math.min(...xs);
            const xmax = Math.max(...xs);
            const ymin = Math.min(...ys);
            const ymax = Math.max(...ys);
            const xRange = xmax - xmin || 1;
            const yRange = ymax - ymin || 1;
            const points = data.map({
                "RealTimeGraph.useEffect.points": (p)=>{
                    const x = (p.x - xmin) / xRange * (w - 40) + 40; // offset for y-axis
                    const y = h - 20 - (p.y - ymin) / yRange * (h - 40); // offset for x-axis
                    return `${x},${y}`;
                }
            }["RealTimeGraph.useEffect.points"]).join(' ');
            const poly = svg.querySelector('polyline');
            if (poly) poly.setAttribute('points', points);
            // Draw axes
            const existingAxes = svg.querySelectorAll('.axis');
            existingAxes.forEach({
                "RealTimeGraph.useEffect": (el)=>el.remove()
            }["RealTimeGraph.useEffect"]);
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
        }
    }["RealTimeGraph.useEffect"], [
        data,
        height
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            fontSize: 13
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/RealTimeGraph.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ref: ref,
                height: height,
                style: {
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "g1",
                            x1: "0",
                            x2: "0",
                            y1: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: color,
                                    stopOpacity: "0.18"
                                }, void 0, false, {
                                    fileName: "[project]/components/RealTimeGraph.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
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
_s(RealTimeGraph, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = RealTimeGraph;
var _c;
__turbopack_context__.k.register(_c, "RealTimeGraph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HelpTooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HelpTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function HelpTooltip({ title, children }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: 'inline-block'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                onMouseEnter: ()=>setOpen(true),
                onMouseLeave: ()=>setOpen(false),
                style: {
                    border: 'none',
                    background: 'transparent',
                    color: 'var(--muted)',
                    cursor: 'help',
                    padding: 4,
                    display: 'inline-block'
                },
                children: "ℹ️"
            }, void 0, false, {
                fileName: "[project]/components/HelpTooltip.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    zIndex: 9999,
                    maxWidth: 320,
                    background: 'var(--panel)',
                    color: 'var(--ink)',
                    border: '1px solid rgba(255,255,255,0.04)',
                    padding: 12,
                    borderRadius: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            display: 'block',
                            marginBottom: 6
                        },
                        children: title || 'Help'
                    }, void 0, false, {
                        fileName: "[project]/components/HelpTooltip.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 13,
                            color: 'var(--muted)'
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/HelpTooltip.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HelpTooltip.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/HelpTooltip.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_s(HelpTooltip, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = HelpTooltip;
var _c;
__turbopack_context__.k.register(_c, "HelpTooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/GaiaLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GaiaLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useGaiaSimulation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useLastSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useLastSimulation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Gauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Gauge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RealTimeGraph$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RealTimeGraph.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HelpTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HelpTooltip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const { inputs, setInputs, method, setMethod, result, simulate, applyAISuggestion, runMonteCarlo, saveScenario, setResult, computeWithCity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { lastResult } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useLastSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("main");
    const [co2History, setCo2History] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [historyIndex, setHistoryIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GaiaLink.useEffect": ()=>{
            setCo2History({
                "GaiaLink.useEffect": (prev)=>{
                    const updated = [
                        ...prev,
                        {
                            x: historyIndex,
                            y: inputs.co2 || 50
                        }
                    ];
                    if (updated.length > 50) updated.shift();
                    return updated;
                }
            }["GaiaLink.useEffect"]);
            setHistoryIndex({
                "GaiaLink.useEffect": (v)=>v + 1
            }["GaiaLink.useEffect"]);
        }
    }["GaiaLink.useEffect"], [
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
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 8,
                    marginTop: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${city === "main" ? "active" : ""}`,
                        onClick: ()=>setCity("main"),
                        children: "Global"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${city === "delhi" ? "active" : ""}`,
                        onClick: ()=>setCity("delhi"),
                        children: "Delhi"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${city === "mumbai" ? "active" : ""}`,
                        onClick: ()=>setCity("mumbai"),
                        children: "Mumbai"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 20,
                    display: "flex",
                    gap: 20,
                    flexWrap: "wrap",
                    alignItems: "flex-start"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 300
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 300
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                            city === "main" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 480,
                                    height: 300,
                                    borderRadius: 12,
                                    overflow: "hidden",
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            city !== "main" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 400,
                                    height: 300,
                                    borderRadius: 12,
                                    overflow: "hidden",
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 20
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "CO₂ Levels Over Time"
                        }, void 0, false, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 507,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RealTimeGraph$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 12
                },
                className: "subtabs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${method === "manual" ? "active" : ""}`,
                        onClick: ()=>setMethod("manual"),
                        children: "Manual"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 522,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${method === "preset" ? "active" : ""}`,
                        onClick: ()=>setMethod("preset"),
                        children: "Preset"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 529,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `subtab ${method === "mc" ? "active" : ""}`,
                        onClick: ()=>setMethod("mc"),
                        children: "Monte-Carlo"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 535,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            method === "preset" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "method-block",
                style: {
                    marginTop: 12
                },
                children: [
                    "    ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Preset Scenarios (17 Options)"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 553,
                        columnNumber: 5
                    }, this),
                    "    ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 10,
                            marginTop: 10,
                            flexWrap: "wrap"
                        },
                        children: [
                            "      ",
                            presets.map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            method === "mc" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "method-block",
                style: {
                    marginTop: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Monte-Carlo Simulation"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 572,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Number of runs"
                            }, void 0, false, {
                                fileName: "[project]/components/GaiaLink.tsx",
                                lineNumber: 575,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            method === "ai" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "method-block",
                style: {
                    marginTop: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "AI-Optimized Intervention Suggestion"
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLink.tsx",
                        lineNumber: 603,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            method === "manual" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "method-manual",
                className: "method-block",
                style: {
                    marginTop: 12
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "controls",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "CO₂ Emissions index ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HelpTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            title: "CO₂ Emissions Index",
                                            children: "Adjust this slider to set the level of carbon dioxide emissions in the simulation. Higher values indicate more emissions, affecting temperature and biodiversity."
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 626,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 626,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Deforestation pressure ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HelpTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    title: "Deforestation Pressure",
                                                    children: "Set the rate of deforestation. Higher values mean more forest loss, impacting biodiversity and carbon sequestration."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GaiaLink.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 640,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Renewables ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HelpTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    title: "Renewables",
                                                    children: "Percentage of energy from renewable sources. Higher values reduce emissions and improve sustainability."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GaiaLink.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 35
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 652,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Pollution control ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HelpTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    title: "Pollution Control",
                                                    children: "Level of pollution control measures. Higher values mean better air and water quality."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GaiaLink.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 667,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 160
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                "Population growth ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HelpTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    title: "Population Growth",
                                                    children: "Adjust population growth rate. Positive values increase demand on resources."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GaiaLink.tsx",
                                                    lineNumber: 679,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 679,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "Advanced interventions ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HelpTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Advanced Interventions",
                                    children: "Enable and adjust intensity of advanced technologies like geo-engineering and reforestation to combat climate change."
                                }, void 0, false, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 694,
                                    columnNumber: 43
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/GaiaLink.tsx",
                            lineNumber: 694,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            ].map(([id, label, intKey])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        minWidth: 220
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: !!inputs[id],
                                            onChange: (e)=>handleInputChange(id, e.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 707,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 714,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: 8,
                                marginTop: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "gaia-btn primary",
                                    onClick: onSimClick,
                                    children: [
                                        "Simulate Now ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HelpTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            title: "Simulate Now",
                                            children: "Runs the simulation based on your current inputs, calculating the impact on Earth's systems like temperature, biodiversity, and sea levels."
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 731,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 730,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "gaia-btn ghost",
                                    onClick: handleSaveScenario,
                                    children: [
                                        "Save Scenario ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HelpTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            title: "Save Scenario",
                                            children: "Saves the current simulation inputs and results for later reference."
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 734,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GaiaLink.tsx",
                                    lineNumber: 733,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "gaia-btn danger",
                                    onClick: ()=>{
                                        localStorage.removeItem("gaia_result");
                                        setResult(null);
                                    },
                                    children: [
                                        "Reset ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HelpTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            title: "Reset",
                                            children: "Clears the current simulation results and resets the form to default values."
                                        }, void 0, false, {
                                            fileName: "[project]/components/GaiaLink.tsx",
                                            lineNumber: 743,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 20,
                    display: "flex",
                    gap: 12,
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gauge",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Gauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(GaiaLink, "EteSVr/5BIIh8kz4bYrWOUrQ+BY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useLastSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = GaiaLink;
var _c;
__turbopack_context__.k.register(_c, "GaiaLink");
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
"[project]/components/GaiaLinkPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GaiaLinkPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Chatbot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GaiaLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GaiaLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useGaiaSimulation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useGaiaState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PreviewCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PreviewCanvas.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function GaiaLinkPage() {
    _s();
    const { result } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { state, loading, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/GaiaLinkPage.tsx",
                lineNumber: 28,
                columnNumber: 5
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
                                children: "ℹ️ GAIA Link Overview"
                            }, void 0, false, {
                                fileName: "[project]/components/GaiaLinkPage.tsx",
                                lineNumber: 31,
                                columnNumber: 9
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
                                                children: "GAIA Link:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GaiaLinkPage.tsx",
                                                lineNumber: 33,
                                                columnNumber: 15
                                            }, this),
                                            " Simulate global climate interventions like carbon capture, renewable energy adoption, and policy changes."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GaiaLinkPage.tsx",
                                        lineNumber: 33,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Controls:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GaiaLinkPage.tsx",
                                                lineNumber: 34,
                                                columnNumber: 15
                                            }, this),
                                            " Adjust sliders for different interventions to see their impact on temperature, biodiversity, and sea levels."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GaiaLinkPage.tsx",
                                        lineNumber: 34,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Preview:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GaiaLinkPage.tsx",
                                                lineNumber: 35,
                                                columnNumber: 15
                                            }, this),
                                            " View predictive Earth imagery with overlays showing projected climate changes."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GaiaLinkPage.tsx",
                                        lineNumber: 35,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Results:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GaiaLinkPage.tsx",
                                                lineNumber: 36,
                                                columnNumber: 15
                                            }, this),
                                            " Analyze scenario outcomes in the Nexus section after running simulations."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GaiaLinkPage.tsx",
                                        lineNumber: 36,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Real-time:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GaiaLinkPage.tsx",
                                                lineNumber: 37,
                                                columnNumber: 15
                                            }, this),
                                            " Changes update the global state, affecting all connected modules."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GaiaLinkPage.tsx",
                                        lineNumber: 37,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GaiaLinkPage.tsx",
                                lineNumber: 32,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GaiaLinkPage.tsx",
                        lineNumber: 30,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GaiaLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/GaiaLinkPage.tsx",
                            lineNumber: 42,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLinkPage.tsx",
                        lineNumber: 41,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "card",
                        style: {
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PreviewCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            index: result?.index
                        }, void 0, false, {
                            fileName: "[project]/components/GaiaLinkPage.tsx",
                            lineNumber: 49,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/GaiaLinkPage.tsx",
                        lineNumber: 45,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GaiaLinkPage.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/GaiaLinkPage.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
_s(GaiaLinkPage, "ISHUURgtm8y2KV9weu8nejt/F44=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaSimulation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useGaiaState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = GaiaLinkPage;
var _c;
__turbopack_context__.k.register(_c, "GaiaLinkPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9513da44._.js.map