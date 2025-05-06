import Image from "next/image";
import Link from "next/link";
import { InputField } from "@/components/InputField";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 px-2">
      <div className="w-full max-w-md h-fit min-h-[420px] space-y-8 p-8 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl mx-auto border border-blue-100 dark:border-blue-900 backdrop-blur-md">
        <div className="flex flex-col items-center gap-2 mb-2">
          <Image src="/globe.svg" alt="Logo" width={48} height={48} className="mb-1" />
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Sign in to your account</h2>
        </div>
        <form className="space-y-6">
          <div className="grid gap-5">
            {/* Email Field */}
            <InputField
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              label="Email"
              variant="outline"
              size="md"
              placeholder="you@example.com"
              className="mb-0"
            />
            {/* Password Field */}
            <InputField
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              label="Password"
              variant="outline"
              size="md"
              placeholder="••••••••"
              className="mb-0"
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-base">Sign In</button>
        </form>
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">or</span>
        </div>
        <button className="w-full py-2 px-4 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 font-semibold rounded-lg shadow flex items-center justify-center gap-2 transition hover:bg-gray-50 dark:hover:bg-gray-800" disabled>
          {/* Google Icon Placeholder */}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24"><path d="M21.805 10.023h-9.765v3.954h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.125s2.75-6.125 6.125-6.125c1.922 0 3.211.82 3.953 1.523l2.703-2.633c-1.703-1.57-3.891-2.539-6.656-2.539-5.523 0-10 4.477-10 10s4.477 10 10 10c5.742 0 9.547-4.023 9.547-9.695 0-.648-.07-1.141-.156-1.602z" fill="#4285F4"/><path d="M3.545 7.545l3.25 2.383c.883-1.664 2.57-2.789 4.455-2.789 1.07 0 2.07.367 2.844 1.07l2.703-2.633c-1.703-1.57-3.891-2.539-6.656-2.539-2.703 0-5.125 1.07-6.953 2.789z" fill="#34A853"/><path d="M12 22c2.766 0 5.078-.914 6.766-2.484l-3.117-2.57c-.844.57-1.922.914-3.648.914-3.133 0-5.375-2.406-5.617-3.648l-3.25 2.523c1.828 1.719 4.25 2.789 6.953 2.789z" fill="#FBBC05"/><path d="M21.805 10.023h-9.765v3.954h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.125s2.75-6.125 6.125-6.125c1.922 0 3.211.82 3.953 1.523l2.703-2.633c-1.703-1.57-3.891-2.539-6.656-2.539-5.523 0-10 4.477-10 10s4.477 10 10 10c5.742 0 9.547-4.023 9.547-9.695 0-.648-.07-1.141-.156-1.602z" fill="#EA4335"/></svg>
          Sign in with Google (coming soon)
        </button>
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-blue-600 hover:underline font-semibold">Sign up</Link>
        </p>
      </div>
    </div>
  );
}