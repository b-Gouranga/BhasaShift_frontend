"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Page() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! Paste BhasaShift text and I'll translate it to English." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages(msgs => [
      ...msgs,
      { role: "user", content: input }
    ]);
    setLoading(true);
    setInput("");
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { role: "assistant", content: `[Mock] English translation of: ${input}` }
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="w-full px-4 py-6 border-b flex items-center gap-2 sticky top-0 bg-background z-10">
        <span className="text-2xl font-bold text-primary">BhasaShift ↔ English Translator</span>
      </header>
      <main className="flex-1 flex flex-col w-full px-2 py-4 gap-4">
        <div ref={chatRef} className="flex-1 flex flex-col gap-4 overflow-y-auto pb-2">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`relative flex items-end gap-2 max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                {/* Avatar */}
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    <span role="img" aria-label="bot">🤖</span>
                  </div>
                )}
                {/* Bubble */}
                <div className={`rounded-2xl px-4 py-3 shadow text-base whitespace-pre-line text-left border ${msg.role === "user" ? "bg-primary text-white border-primary/40 rounded-br-md" : "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-800 rounded-bl-md"}`}>{msg.content}</div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="relative flex items-end gap-2 max-w-[80%]">
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  <span role="img" aria-label="bot">🤖</span>
                </div>
                <div className="rounded-2xl px-4 py-3 shadow text-base bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-800 animate-pulse">Translating...</div>
              </div>
            </div>
          )}
        </div>
        <form
          className="w-full flex gap-2 items-end bg-background py-2 sticky bottom-0 z-10"
          onSubmit={e => {
            e.preventDefault();
            if (!loading) handleSend();
          }}
        >
          <textarea
            className="flex-1 resize-none p-3 border rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary min-h-[48px] max-h-32 shadow-sm"
            placeholder="Type or paste BhasaShift text..."
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={loading}
            rows={1}
            autoFocus
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-primary text-white px-6 py-2 rounded-2xl font-semibold shadow hover:bg-primary/90 disabled:opacity-50 transition"
          >
            {loading ? <span className="animate-spin inline-block w-5 h-5 border-2 border-t-transparent border-white rounded-full"></span> : "Send"}
          </button>
        </form>
      </main>
    </div>
  );
}
