import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brunoAce = localFont({
  src: "../../public/BrunoAceSC-Regular.ttf",
  variable: "--font-bruno-ace",
});

export const metadata: Metadata = {
  title: "Cognoflux | HFT, Algo Trading & Blockchain Development in Noida",
  description: "Leading software company in Noida specialized in High Frequency Trading (HFT), Low Latency Systems, Blockchain Development, and Agentic AI. We hire top Node.js and Java engineers.",
  keywords: [
    "HFT software",
    "Algo Trading software",
    "Blockchain development",
    "Low latency trading software",
    "Software company in Noida",
    "Software jobs in Noida",
    "Node.js developers in Noida",
    "Java engineer in Noida",
    "Agentic AI",
    "Crypto Exchange Development",
    "FinTech Solutions"
  ],
  authors: [{ name: "Cognoflux Team" }],
  openGraph: {
    title: "Cognoflux | Strategic Technology Partner",
    description: "Empowering Business with Intelligent Technology. Specialized in Agentic AI, HFT, and Blockchain solutions.",
    url: "https://cognoflux.com",
    siteName: "Cognoflux",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognoflux | HFT & Blockchain Experts",
    description: "Building the future of finance with HFT, AI, and Blockchain technology.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${brunoAce.variable} antialiased bg-black text-white selection:bg-cyan-500 selection:text-black`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
