import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Disclaimer from "@/components/disclaimer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareTrace",
  description: "Capture, connect, and personalize health insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <div className="mx-auto max-w-6xl px-4 py-6 space-y-6">
          <nav className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
            <div className="font-semibold">CareTrace</div>
            <div className="flex gap-4 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <a href="/dashboard" className="hover:underline">Dashboard</a>
              <a href="/assessments" className="hover:underline">Assessments</a>
              <a href="/connect" className="hover:underline">Connect</a>
              <a href="/export" className="hover:underline">Export</a>
            </div>
          </nav>
          {children}
          <footer className="rounded-xl bg-white p-4 shadow-sm">
            <Disclaimer />
          </footer>
        </div>
      </body>
    </html>
  );
}
