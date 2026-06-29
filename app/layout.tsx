import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/shared/LoadingScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://purtc.com"),
  title: {
    default: "PURTC Robotics — Next-Generation Industrial Automation",
    template: "%s | PURTC Robotics",
  },
  description:
    "PURTC Robotics delivers cutting-edge autonomous robots for industrial automation, logistics, and enterprise operations. Trusted by 200+ enterprises across 47 countries.",
  keywords: [
    "robotics",
    "industrial automation",
    "autonomous robots",
    "AI robotics",
    "enterprise robots",
    "manufacturing automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://purtc.com",
    siteName: "PURTC Robotics",
    title: "PURTC Robotics — Next-Generation Industrial Automation",
    description:
      "Cutting-edge autonomous robots for industrial automation and enterprise operations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PURTC Robotics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PURTC Robotics",
    description: "Next-Generation Industrial Automation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="bg-bg-primary text-text-primary font-inter antialiased overflow-x-hidden">
        <LoadingScreen />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
