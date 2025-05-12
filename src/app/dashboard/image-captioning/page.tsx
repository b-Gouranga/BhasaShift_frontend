import Image from "next/image";

export default function ImageCaptioningPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-900 dark:via-gray-950 dark:to-green-950 p-4">
      <div className="w-full max-w-md bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl border border-green-100 dark:border-green-900 backdrop-blur-md p-8 flex flex-col items-center gap-6">
        <Image src="/caption.svg" alt="Image Captioning" width={48} height={48} className="mb-2" />
        <h2 className="text-2xl font-bold text-center text-green-900 dark:text-green-200 mb-2">Image Captioning</h2>
        <p className="text-base text-center text-gray-700 dark:text-gray-300 mb-4">Upload an image and let AI describe it for you.</p>
        {/* Placeholder for upload and caption result */}
        <div className="w-full flex flex-col items-center gap-4">
          <input type="file" accept="image/*" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100" />
          <div className="w-full min-h-[60px] bg-green-50 dark:bg-green-900/40 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 text-center p-4">
            <span>AI-generated caption will appear here.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
