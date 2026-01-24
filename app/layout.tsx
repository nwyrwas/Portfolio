import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nicholas Wyrwas – Aspiring Software Engineer | Marine Corps Veteran",
  description: "Software engineering graduate and U.S. Marine Corps veteran focused on building reliable, scalable applications. Portfolio showcasing projects, technical growth, and problem-solving approach.",
  keywords: ["software engineer",
    "software engineering graduate",
    "full-stack developer",
    "web development",
    "backend development",
    "frontend development",
    "API development",
    "Marine Corps veteran",],
  authors: [{ name: "Nicholas Wyrwas" }],
  creator: "Nicholas Wyrwas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://linkedin.com/in/nicholas-wyrwas",
    title: "Nicholas Wyrwas - Software Engineer",
    description: "Software engineering graduate and Marine Corps veteran building modern web applications with a focus on reliability, performance, and continuous learning.",
    siteName: "Nicholas Wyrwas Portfolio",
    images: [
      {
        url: "https://linkedin.com/in/nicholas-wyrwas",
        width: 1200,
        height: 630,
        alt: "Your Name Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicholas Wyrwas – Software Engineer",
    description: "Software engineering graduate and Marine Corps veteran focused on building reliable, well-structured applications.",
    images: ["https://github.com/nwyrwas"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
