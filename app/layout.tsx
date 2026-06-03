import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Fatehin Alam | Full Stack Developer & AI Researcher",
  description:
    "Portfolio of Fatehin Alam — Full Stack Developer, AI Researcher, and Cybersecurity Enthusiast based in Bangladesh. Building intelligent systems and secure software.",
  keywords: [
    "Fatehin Alam",
    "Full Stack Developer",
    "AI Researcher",
    "Cybersecurity",
    "UAV Security",
    "Machine Learning",
    "Next.js",
    "React",
    "Bangladesh",
  ],
  authors: [{ name: "Fatehin Alam", url: "https://github.com/Fatehin03" }],
  creator: "Fatehin Alam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fatehinalam.dev",
    title: "Fatehin Alam | Full Stack Developer & AI Researcher",
    description:
      "Portfolio of Fatehin Alam — Full Stack Developer, AI Researcher, and Cybersecurity Enthusiast.",
    siteName: "Fatehin Alam Portfolio",
    images: [
      {
        url: "/fatehin.jpg",
        width: 1200,
        height: 630,
        alt: "Fatehin Alam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatehin Alam | Full Stack Developer & AI Researcher",
    description:
      "Full Stack Developer, AI Researcher, and Cybersecurity Enthusiast based in Bangladesh.",
    images: ["/fatehin.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="noise">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollProgress />
        <CursorGlow />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
