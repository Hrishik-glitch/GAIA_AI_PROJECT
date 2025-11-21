"use client";

import { useState, useEffect } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [screenImage, setScreenImage] = useState<string | null>(null);
  const [isSharing, setIsSharing] = useState(false);

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
      stream.getTracks().forEach(track => track.stop());
      setIsSharing(true);
    } catch (err) {
      console.error('Screen capture failed:', err);
      alert('Screen capture failed. Please allow screen sharing permissions.');
    }
  }

  async function send(msg: string) {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          { role: "system", content: "You are GAIA." },
          { role: "user", content: msg }
        ],
        screenImage: screenImage
      }),
    });

    const data = await res.json();
    return data.reply;
  }

  async function handleSend() {
    const input = document.getElementById("gaia-input") as HTMLInputElement;
    const text = input.value.trim();
    if (!text) return;

    input.value = "";

    const reply = await send(text);

    setMessages((m) => [...m, { user: text, gaia: reply, screenShared: !!screenImage }]);
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

  return (
    <>
      <button className="gaia-btn icon chat-toggle" onClick={() => setOpen(!open)}>
        {open ? "✖" : "GAIA"}
      </button>

      {open && (
        <div className="chat-popup glass">
          <div className="chat-header">
            <strong>GAIA Assistant</strong>
          </div>

          <div className="chat-window">
            {messages.map((m, i) => (
              <div key={i} className="chat-block">
                <div className="you">You: {m.user}</div>
                <div className="gaia">GAIA: {m.gaia}</div>
              </div>
            ))}
          </div>

          <div className="chat-controls">
            <input id="gaia-input" placeholder="Ask GAIA..." />
            <button className="gaia-btn secondary" style={{ fontSize: '12px', padding: '6px 10px' }} onClick={captureScreen}>
              {isSharing ? "✓ Screen" : "📺 Share"}
            </button>
            <button className="gaia-btn primary" onClick={handleSend}>Send</button>
          </div>

          <div className="chat-actions">
            <button className="gaia-btn pill" onClick={resetChat}>Clear Chat</button>
            <button className="gaia-btn danger" onClick={resetMemory}>
              Reset Memory
            </button>
          </div>
        </div>
      )}
    </>
  );
}
