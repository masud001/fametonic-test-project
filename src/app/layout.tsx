import type { Metadata } from "next";
import { Urbanist, Figtree } from "next/font/google";
import "./globals.css";
import { HeroProvider } from "@/context/HeroContext";

// Google Fonts Configuration
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  style: ["normal"],
  preload: true,
});
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  style: ["normal"],
  preload: true,
});

// Metadata for the Application
export const metadata: Metadata = {
  title: "Fametonic: The Smart Way to Go Viral on Social Media",
  description:"Fametonic helps you grow your social media influence with AI-powered tools and expert-led courses.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${figtree.variable} antialiased`}>
        <HeroProvider>
          {children}
        </HeroProvider>
      </body>
    </html>
  );
}
