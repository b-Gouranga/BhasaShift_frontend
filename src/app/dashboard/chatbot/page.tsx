'use client';

import Image from "next/image";
import { useState } from "react";
import axios from "axios";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      setLoading(true);
      const data = {
        text: input,
      };

      const response = await axios.post<{ processed_text: string }>(
        "http://localhost:6500/process/assamese",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from chatbot API:", response.data);
      const botMessage: Message = { sender: "bot", text: response.data.processed_text || "No response." };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error: any) {
      console.error("Error communicating with chatbot API:", error);
      if (error.response) {
        console.error("Server responded with status:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received. Request details:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
      const errorMessage: Message = { sender: "bot", text: "Failed to get a response. Please try again." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:via-gray-950 dark:to-yellow-950 p-4">
      <div className="w-full max-w-md bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl border border-yellow-100 dark:border-yellow-900 backdrop-blur-md p-8 flex flex-col items-center gap-6">
        <Image src="/chat.svg" alt="Chatbot" width={48} height={48} className="mb-2" />
        <h2 className="text-2xl font-bold text-center text-yellow-900 dark:text-yellow-200 mb-2">Chatbot</h2>
        <p className="text-base text-center text-gray-700 dark:text-gray-300 mb-4">Chat with our AI assistant in Assamese or English.</p>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full min-h-[120px] bg-yellow-50 dark:bg-yellow-900/40 rounded-lg p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                <span className={`inline-block px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-yellow-200 text-yellow-900" : "bg-yellow-900 text-yellow-200"}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:opacity-50"
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
