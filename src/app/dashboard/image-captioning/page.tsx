"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function ImageCaptioningPage() {
  const [caption, setCaption] = useState("AI-generated caption will appear here.");
  const [loading, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    // Create a URL for the uploaded image to display it
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);

    try {
      setLoading(true);
      const response = await axios.post<{ caption: string }>(
        "http://localhost:5000/caption/image/assamese",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setCaption(response.data.caption || "No caption generated.");
    } catch (error) {
      console.error("Error generating caption:", error);
      setCaption("Failed to generate caption. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-900 dark:via-gray-950 dark:to-green-950 p-4 overflow-auto rounded-2xl">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-green-100 dark:border-green-900 backdrop-blur-md p-8 flex flex-row items-center gap-6">
        <div className="flex-1 flex flex-col items-center gap-4">
          <Image src="/caption.svg" alt="Image Captioning" width={48} height={48} className="mb-2" />
          <h2 className="text-2xl font-bold text-center text-green-900 dark:text-green-200 mb-2">
            Image Captioning
          </h2>
          <p className="text-base text-center text-gray-700 dark:text-gray-300 mb-4">
            Upload an image and let AI describe it for you.
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
        </div>
        <div className="flex-1 flex flex-col items-center gap-4">
          {uploadedImage && (
            <div className="w-full flex justify-center">
              <img src={uploadedImage} alt="Uploaded" className="max-w-full h-auto rounded-lg shadow" />
            </div>
          )}
          <div className="w-full min-h-[60px] bg-green-50 dark:bg-green-900/40 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 text-center p-4">
            {loading ? <span>Loading...</span> : <span>{caption}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
