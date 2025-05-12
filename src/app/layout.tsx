import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChatGPT UI Clone",
  description: "A pixel-perfect ChatGPT UI built with Next.js 14, TailwindCSS v4, and Shadcn UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex`}
      >
        <ThemeProvider>
          {/* Top Navbar */}
          <div className="fixed top-0 left-0 w-full z-30">
            <Navbar />
          </div>
          {/* Main content area (no sidebar) */}
          <div className="flex-1 flex flex-col min-h-screen w-full pt-[56px]">
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

// Add sidebar-link styles to globals.css for pixel-perfect ChatGPT look
