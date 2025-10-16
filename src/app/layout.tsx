import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vikas Verma | Frontend Developer Portfolio",
  description:
    "Portfolio of Vikas Verma, a Frontend Developer specialized in React, Next.js, and modern web UI development.",
  keywords: [
    "Vikas Verma",
    "Frontend Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Portfolio",
    "UI Developer",
  ],
  authors: [{ name: "Vikas Verma", url: "https://vikasverma.dev" }],
  creator: "Vikas Verma",
  publisher: "Vikas Verma",
  openGraph: {
    title: "Vikas Verma | Frontend Developer Portfolio",
    description:
      "Explore my projects and experience as a Frontend Developer specializing in React and Next.js.",
    url: "https://vikasverma.dev",
    siteName: "Vikas Verma Portfolio",
    images: [
      {
        url: "https://vikasverma.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vikas Verma Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Verma | Frontend Developer Portfolio",
    description:
      "Showcasing my web projects and frontend experience using React and Next.js.",
    creator: "@vikasverma",
    images: ["https://vikasverma.dev/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://vikasverma.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
