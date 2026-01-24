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
      <body className="font-sans bg-gray-50 text-gray-900 relative">
        {/* Global Background Shapes */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Large sky blue orb - top right */}
          <div className="absolute -top-10 -right-10 w-[500px] h-[500px] bg-gradient-to-br from-sky-300/60 to-cyan-300/50 rounded-full blur-3xl"></div>

          {/* Medium green orb - left */}
          <div className="absolute top-32 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-emerald-300/50 to-teal-300/40 rounded-full blur-3xl"></div>

          {/* Small accent orb - bottom right */}
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-br from-cyan-300/40 to-sky-300/35 rounded-full blur-2xl"></div>

          {/* Additional orb - middle */}
          <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-emerald-200/25 rounded-full blur-3xl"></div>

          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
