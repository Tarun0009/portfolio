import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import ThemeProvider from "./providers/ThemeProvider";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollProgress from "./components/ui/ScrollProgress";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
      <body className="antialiased selection:bg-blue-500/30 selection:text-white">
        <ThemeProvider>
          <Preloader />
          <ScrollProgress />
          <CustomCursor />
          <main className="relative z-0 overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
