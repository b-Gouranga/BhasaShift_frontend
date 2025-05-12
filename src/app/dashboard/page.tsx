import { Button } from "@/components/Button";
import Image from "next/image";

export default function DashboardHome() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 flex items-center justify-center px-2">
      <div className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl border border-blue-100 dark:border-blue-900 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-8 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <Image src="/globe.svg" alt="Logo" width={48} height={48} className="mb-1" />
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-1">Welcome to BhasaShift Dashboard</h1>
          <p className="text-base text-center text-gray-700 dark:text-gray-300 max-w-lg">
            Get started with BhasaShift tools. Use the quick links below to access Translation and Image Generation features. Your profile is now accessible from the profile icon in the top navigation bar.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-4">
          <a href="/dashboard/translation" className="group">
            <div className="rounded-xl bg-blue-100 dark:bg-blue-900/40 p-6 flex flex-col items-center shadow hover:shadow-lg transition border border-blue-200 dark:border-blue-800 group-hover:bg-blue-200/80 dark:group-hover:bg-blue-900/60">
              <Image src="/file.svg" alt="Translation" width={32} height={32} className="mb-2" />
              <span className="font-semibold text-blue-800 dark:text-blue-200">Translation</span>
              <span className="text-xs text-gray-500 mt-1">Assamese ↔ English</span>
            </div>
          </a>
          <a href="/dashboard/image-generation" className="group">
            <div className="rounded-xl bg-purple-100 dark:bg-purple-900/40 p-6 flex flex-col items-center shadow hover:shadow-lg transition border border-purple-200 dark:border-purple-800 group-hover:bg-purple-200/80 dark:group-hover:bg-purple-900/60">
              <Image src="/window.svg" alt="Image Generation" width={32} height={32} className="mb-2" />
              <span className="font-semibold text-purple-800 dark:text-purple-200">Image Generation</span>
              <span className="text-xs text-gray-500 mt-1">AI-powered visuals</span>
            </div>
          </a>
          <a href="/dashboard/image-captioning" className="group">
            <div className="rounded-xl bg-green-100 dark:bg-green-900/40 p-6 flex flex-col items-center shadow hover:shadow-lg transition border border-green-200 dark:border-green-800 group-hover:bg-green-200/80 dark:group-hover:bg-green-900/60">
              <Image src="/caption.svg" alt="Image Captioning" width={32} height={32} className="mb-2" />
              <span className="font-semibold text-green-800 dark:text-green-200">Image Captioning</span>
              <span className="text-xs text-gray-500 mt-1">Describe images with AI</span>
            </div>
          </a>
          <a href="/dashboard/chatbot" className="group">
            <div className="rounded-xl bg-yellow-100 dark:bg-yellow-900/40 p-6 flex flex-col items-center shadow hover:shadow-lg transition border border-yellow-200 dark:border-yellow-800 group-hover:bg-yellow-200/80 dark:group-hover:bg-yellow-900/60">
              <Image src="/chat.svg" alt="Chatbot" width={32} height={32} className="mb-2" />
              <span className="font-semibold text-yellow-800 dark:text-yellow-200">Chatbot</span>
              <span className="text-xs text-gray-500 mt-1">Conversational AI</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}