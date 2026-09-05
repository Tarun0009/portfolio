import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import ScrollProgress from "./components/ui/ScrollProgress";
import SmoothScroll from "./components/ui/SmoothScroll";
import CustomCursor from "./components/ui/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tarunpratapsingh.dev"),
  title: {
    default: "Tarun Pratap Singh | React Native & Frontend Developer",
    template: "%s | Tarun Pratap Singh",
  },
  description:
    "React Native & Frontend Developer specializing in high-performance mobile apps and modern web technologies like Next.js, Remix, and Expo.",
  keywords: [
    "Tarun Pratap Singh",
    "React Native Developer",
    "Frontend Developer",
    "Mobile App Developer",
    "Expo",
    "Next.js Developer",
    "Web Developer",
    "JavaScript Developer",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Tarun Pratap Singh" }],
  creator: "Tarun Pratap Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Tarun Pratap Singh | React Native & Frontend Developer",
    description:
      "React Native & Frontend Developer specializing in high-performance mobile apps and modern web apps.",
    siteName: "Tarun Pratap Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarun Pratap Singh | React Native & Frontend Developer",
    description:
      "React Native & Frontend Developer specializing in high-performance mobile apps and modern web apps.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tarun Pratap Singh",
              jobTitle: "React Native & Frontend Developer",
              url: "https://tarunpratapsingh.dev",
              email: "tarunpratapsingh097@gmail.com",
              sameAs: [
                "https://github.com/Tarun0009",
                "https://www.linkedin.com/in/tarun-pratap-singh-941b91220/",
              ],
              knowsAbout: [
                "React Native",
                "Frontend Development",
                "React.js",
                "Next.js",
                "Remix",
                "Expo",
                "TypeScript",
                "Node.js",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <div className="noise-layer" />
        <SmoothScroll />
        <CustomCursor />
        <ScrollProgress />
        <main className="relative z-10 overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
