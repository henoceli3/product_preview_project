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
  title: "Product preview card component",
  description: "Product preview card component",
  keywords: ["Product", "Preview", "Card", "Component"],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Product preview card component",
    description:
      "A beautiful product preview card component built with Next.js",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Product preview card component",
      },
    ],
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
