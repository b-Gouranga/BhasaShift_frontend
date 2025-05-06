"use client";

import React, { useState } from "react";

const MOCK_IMAGES = [
  "https://placehold.co/300x200?text=Image+1",
  "https://placehold.co/300x200?text=Image+2",
  "https://placehold.co/300x200?text=Image+3",
  "https://placehold.co/300x200?text=Image+4",
];

export default function Page() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const handleGenerate = async () => {
    setLoading(true);
    setImages([]);
    setTimeout(() => {
      setImages(MOCK_IMAGES);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 flex flex-col items-center justify-start w-full px-2 py-8">
        <div className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-xl shadow p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-primary">Generate Images from Assamese Prompt</h1>
          <p className="text-center text-gray-500 mb-8">Type your prompt in Assamese and get AI-generated images instantly!</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Enter Assamese prompt..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-1 p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-primary shadow-sm"
              disabled={loading}
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !prompt}
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-primary/90 disabled:opacity-50 transition"
            >
              {loading ? (
                <span className="flex items-center gap-2"><span className="animate-spin h-5 w-5 border-2 border-t-transparent border-white rounded-full"></span>Generating...</span>
              ) : (
                "Generate Images"
              )}
            </button>
          </div>
          {images.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-center text-primary">Generated Images</h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow border flex flex-col items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
                  {images.map((src, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <img
                        src={src}
                        alt={`Generated ${index + 1}`}
                        className="w-full h-auto rounded-lg border shadow"
                      />
                      <span className="text-xs text-gray-500">Image {index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
