import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fil.IO - Multimedia Conversion Powerhouse",
  description:
    "Experience creative liberation on our platform as you effortlessly convert images, audio files, and videos without straining your budget. Our user-friendly tools seamlessly bring your vision to life, marrying innovation with affordability. Explore boundless possibilities in multimedia content transformation, making every click a step towards unlocking your digital assets full potential. Join us in the convergence of cutting-edge technology and cost-effectiveness, where affordable power is not just a promise—its a reality, redefining your creative journey within budget constraints.",
  creator: "Anirban Saha",
  keywords:
    "file converter, image converter, video converter, audio converter, unlimited file converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        <div className="min-h-screen bg-black w-full ">{children}</div>
      </body>
    </html>
  );
}
