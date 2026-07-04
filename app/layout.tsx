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
  metadataBase: new URL("https://purtc.presuniv.ac.id"),
  title: {
    default: "PURTC — President University Robotic & Technology Club",
    template: "%s | PURTC",
  },
  description:
    "PURTC is a student community for technology and robotics at President University, Cikarang. Build. Innovate. Lead. Join us and be part of the change.",
  keywords: [
    "PURTC",
    "President University",
    "robotics club",
    "technology club",
    "technology students",
    "robotics community",
    "Cikarang",
    "President University club",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://purtc.presuniv.ac.id",
    siteName: "PURTC",
    title: "PURTC — President University Robotic & Technology Club",
    description:
      "Student community for technology and robotics at President University. Build. Innovate. Lead.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "PURTC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PURTC — Robotic & Technology Club",
    description: "President University Robotic & Technology Club",
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
