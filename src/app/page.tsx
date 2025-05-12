import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-blue-950 text-foreground font-sans">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 sm:py-24 gap-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-blue-400">
          Empower BhasaShift Creativity
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-gray-300">
          Instantly translate Assamese to English and generate stunning images from Assamese prompts. Break language barriers and unleash your imagination with BhasaShift.
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row gap-4 p-6 rounded-xl w-fit">
            <Link
              href="/dashboard/translation"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gray-900 via-gray-950 to-blue-950 text-gray-100 px-6 py-3 font-medium text-lg shadow-lg transition hover:from-blue-900 hover:via-blue-950 hover:to-blue-950 hover:scale-105 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-400 border-2 border-transparent hover:border-blue-400 duration-200"
            >
              <span className="mr-2">🌐</span>
              Translate Assamese to English
            </Link>
            <Link
              href="/dashboard/image-generation"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gray-900 via-gray-950 to-blue-950 text-gray-100 px-6 py-3 font-medium text-lg shadow-lg transition hover:from-blue-900 hover:via-blue-950 hover:to-blue-950 hover:scale-105 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-400 border-2 border-transparent hover:border-blue-400 duration-200"
            >
              <span className="mr-2">🎨</span>
              Generate Images from Assamese Prompts
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-blue-950">
        <style>{`
          .flip-card {
            perspective: 1200px;
          }
          .flip-card-inner {
            transition: transform 1.2s cubic-bezier(.4,2,.6,1);
            transform-style: preserve-3d;
            position: relative;
            width: 100%;
            height: 280px;
          }
          .flip-card-front, .flip-card-back {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            backface-visibility: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 0.75rem;
            box-shadow: var(--tw-shadow-lg);
            border-width: 1px;
            border-color: rgb(147 197 253 / var(--tw-border-opacity, 1));
          }
          .dark .flip-card-front, .dark .flip-card-back {
            border-color: rgb(30 64 175 / var(--tw-border-opacity, 1));
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
          .flip-card:hover .flip-card-inner,
          .flip-card:focus-within .flip-card-inner {
            transform: rotateY(180deg);
          }
        `}</style>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Card 1: Seamless Translation */}
            <div className="flip-card focus:outline-none transition-transform duration-200 hover:scale-105" tabIndex={0}>
              <div className="flip-card-inner">
                <div className="flip-card-front border-blue-300 dark:border-blue-800 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-950 dark:to-blue-900">
                  <div className="flex flex-col items-center w-full">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-4 shadow mb-3 flex items-center justify-center" style={{ width: 56, height: 56 }}>
                      {/* globe.svg */}
                      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="32" height="32"><g clipPath="url(#a)"><path fillRule="evenodd" clipRule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#2563eb"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
                    </div>
                    <div className="w-12 h-1 bg-blue-200 dark:bg-blue-800 rounded-full mb-3" />
                    <h3 className="font-bold text-xl mb-1 text-center">Seamless Translation</h3>
                  </div>
                </div>
                <div className="flip-card-back border-blue-300 dark:border-blue-800 bg-background flex flex-col items-center justify-center">
                  <p className="text-muted-foreground text-center text-base px-4 mb-4">Translate Assamese text to English with high accuracy and speed.</p>
                  <button className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-sm font-medium shadow hover:bg-blue-200 dark:hover:bg-blue-800 transition">Learn more <span className="text-lg">→</span></button>
                </div>
              </div>
            </div>
            {/* Card 2: AI Image Generation */}
            <div className="flip-card focus:outline-none transition-transform duration-200 hover:scale-105" tabIndex={0}>
              <div className="flip-card-inner">
                <div className="flip-card-front border-blue-300 dark:border-blue-800 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-950 dark:to-blue-900">
                  <div className="flex flex-col items-center w-full">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-4 shadow mb-3 flex items-center justify-center" style={{ width: 56, height: 56 }}>
                      {/* file.svg */}
                      <svg fill="none" viewBox="0 0 16 16" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clipRule="evenodd" fill="#2563eb" fillRule="evenodd"/></svg>
                    </div>
                    <div className="w-12 h-1 bg-blue-200 dark:bg-blue-800 rounded-full mb-3" />
                    <h3 className="font-bold text-xl mb-1 text-center">AI Image Generation</h3>
                  </div>
                </div>
                <div className="flip-card-back border-blue-300 dark:border-blue-800 bg-background flex flex-col items-center justify-center">
                  <p className="text-muted-foreground text-center text-base px-4 mb-4">Create unique images from Assamese prompts using advanced AI models.</p>
                  <button className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-sm font-medium shadow hover:bg-blue-200 dark:hover:bg-blue-800 transition">Learn more <span className="text-lg">→</span></button>
                </div>
              </div>
            </div>
            {/* Card 3: Fast & Responsive */}
            <div className="flip-card focus:outline-none transition-transform duration-200 hover:scale-105" tabIndex={0}>
              <div className="flip-card-inner">
                <div className="flip-card-front border-blue-300 dark:border-blue-800 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-950 dark:to-blue-900">
                  <div className="flex flex-col items-center w-full">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-4 shadow mb-3 flex items-center justify-center" style={{ width: 56, height: 56 }}>
                      {/* window.svg */}
                      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="32" height="32"><path fillRule="evenodd" clipRule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#2563eb"/></svg>
                    </div>
                    <div className="w-12 h-1 bg-blue-200 dark:bg-blue-800 rounded-full mb-3" />
                    <h3 className="font-bold text-xl mb-1 text-center">Fast & Responsive</h3>
                  </div>
                </div>
                <div className="flip-card-back border-blue-300 dark:border-blue-800 bg-background flex flex-col items-center justify-center">
                  <p className="text-muted-foreground text-center text-base px-4 mb-4">Enjoy a smooth, mobile-friendly experience on any device.</p>
                  <button className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-sm font-medium shadow hover:bg-blue-200 dark:hover:bg-blue-800 transition">Learn more <span className="text-lg">→</span></button>
                </div>
              </div>
            </div>
            {/* Card 4: Image Captioning */}
            <div className="flip-card focus:outline-none transition-transform duration-200 hover:scale-105" tabIndex={0}>
              <div className="flip-card-inner">
                <div className="flip-card-front border-blue-300 dark:border-blue-800 bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-green-950 dark:via-gray-950 dark:to-green-900">
                  <div className="flex flex-col items-center w-full">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 shadow mb-3 flex items-center justify-center" style={{ width: 56, height: 56 }}>
                      {/* caption.svg */}
                      <img src="/caption.svg" alt="Image Captioning" width={32} height={32} />
                    </div>
                    <div className="w-12 h-1 bg-green-200 dark:bg-green-800 rounded-full mb-3" />
                    <h3 className="font-bold text-xl mb-1 text-center">Image Captioning</h3>
                  </div>
                </div>
                <div className="flip-card-back border-green-300 dark:border-green-800 bg-background flex flex-col items-center justify-center">
                  <p className="text-muted-foreground text-center text-base px-4 mb-4">Upload an image and let AI describe it for you in English or Assamese.</p>
                  <button className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 text-sm font-medium shadow hover:bg-green-200 dark:hover:bg-green-800 transition">Learn more <span className="text-lg">→</span></button>
                </div>
              </div>
            </div>
            {/* Card 5: Chatbot */}
            <div className="flip-card focus:outline-none transition-transform duration-200 hover:scale-105" tabIndex={0}>
              <div className="flip-card-inner">
                <div className="flip-card-front border-blue-300 dark:border-blue-800 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 dark:from-yellow-950 dark:via-gray-950 dark:to-yellow-900">
                  <div className="flex flex-col items-center w-full">
                    <div className="bg-yellow-100 dark:bg-yellow-900 rounded-full p-4 shadow mb-3 flex items-center justify-center" style={{ width: 56, height: 56 }}>
                      {/* chat.svg */}
                      <img src="/chat.svg" alt="Chatbot" width={32} height={32} />
                    </div>
                    <div className="w-12 h-1 bg-yellow-200 dark:bg-yellow-800 rounded-full mb-3" />
                    <h3 className="font-bold text-xl mb-1 text-center">AI Chatbot</h3>
                  </div>
                </div>
                <div className="flip-card-back border-yellow-300 dark:border-yellow-800 bg-background flex flex-col items-center justify-center">
                  <p className="text-muted-foreground text-center text-base px-4 mb-4">Chat with our AI assistant in Assamese or English for instant help and conversation.</p>
                  <button className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 text-sm font-medium shadow hover:bg-yellow-200 dark:hover:bg-yellow-800 transition">Learn more <span className="text-lg">→</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About</h2>
          <p className="text-lg text-muted-foreground">
            This project bridges the gap between Assamese and English, making creative tools accessible to everyone. Whether you want to translate text or generate images from your ideas, our platform is designed to be intuitive, fast, and inclusive.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-border bg-background text-center text-sm text-muted-foreground">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} BhasaShift</span>
          <span className="hidden sm:inline">|</span>
          <a href="#about" className="hover:underline">About</a>
          <span className="hidden sm:inline">|</span>
          <a href="#features" className="hover:underline">Features</a>
        </div>
      </footer>
    </div>
  );
}
