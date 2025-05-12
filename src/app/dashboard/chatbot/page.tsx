import Image from "next/image";

export default function ChatbotPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-yellow-100 dark:from-gray-900 dark:via-gray-950 dark:to-yellow-950 p-4">
      <div className="w-full max-w-md bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl border border-yellow-100 dark:border-yellow-900 backdrop-blur-md p-8 flex flex-col items-center gap-6">
        <Image src="/chat.svg" alt="Chatbot" width={48} height={48} className="mb-2" />
        <h2 className="text-2xl font-bold text-center text-yellow-900 dark:text-yellow-200 mb-2">Chatbot</h2>
        <p className="text-base text-center text-gray-700 dark:text-gray-300 mb-4">Chat with our AI assistant in Assamese or English.</p>
        {/* Placeholder for chat UI */}
        <div className="w-full min-h-[120px] bg-yellow-50 dark:bg-yellow-900/40 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 text-center p-4">
          <span>Chat interface coming soon.</span>
        </div>
      </div>
    </div>
  );
}
