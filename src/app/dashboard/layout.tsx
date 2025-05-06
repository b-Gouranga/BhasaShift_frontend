import Link from "next/link";
import { ReactNode } from "react";
import { DashboardAuthProvider } from "@/lib/dashboard-auth";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardAuthProvider>
      <div className="flex w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 pt-[56px]">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 min-w-[220px] max-w-xs bg-gradient-to-b from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 border-r border-blue-200 dark:border-blue-800 py-10 px-5 gap-4 h-[calc(100vh-56px)] rounded-tr-2xl rounded-br-2xl shadow-xl sticky top-[56px] overflow-y-auto transition-all" style={{ marginTop: 0, marginBottom: 0 }}>
          <div className="flex flex-col items-center mb-8">
            <img src="/globe.svg" alt="Logo" className="w-14 h-14 mb-3" />
            <span className="font-bold text-xl text-blue-800 dark:text-blue-200 tracking-wide">Dashboard</span>
          </div>
          <nav className="flex flex-col gap-2 w-full">
            <Link href="/dashboard/translation" className="sidebar-link rounded-lg px-4 py-2 font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-200/60 dark:hover:bg-blue-900/40 transition flex items-center gap-3 text-base">
              <img src="/file.svg" alt="Translation" className="w-5 h-5" /> Translation
            </Link>
            <Link href="/dashboard/image-generation" className="sidebar-link rounded-lg px-4 py-2 font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-200/60 dark:hover:bg-blue-900/40 transition flex items-center gap-3 text-base">
              <img src="/window.svg" alt="Image Generation" className="w-5 h-5" /> Image Generation
            </Link>
          </nav>
        </aside>
        {/* Main content */}
        <div className="flex-1 flex flex-col h-[calc(100vh-56px)] w-full bg-transparent md:bg-white/90 md:dark:bg-gray-900/90 rounded-none md:rounded-2xl shadow-none md:shadow-2xl border-none md:border border-blue-100 dark:border-blue-900 transition-all p-0 md:p-8 mx-0 md:mx-8" style={{ marginTop: 0, marginBottom: 0 }}>
          <div className="flex-1 flex flex-col justify-center items-center px-0 pt-0 pb-0">
            {children}
          </div>
        </div>
      </div>
    </DashboardAuthProvider>
  );
}
