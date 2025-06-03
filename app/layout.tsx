import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const interRegular = Inter({
  variable: "--font-inter-regular",
  subsets: ["latin"],
});

const interLight = Inter({
  variable: "--font-inter-light",
  subsets: ["latin"],
});

const satoshiBold = localFont({
  src: "../public/fonts/Satoshi-Bold.ttf",
  variable: "--font-satoshi-bold",
});

const satoshiMedium = localFont({
  src: "../public/fonts/Satoshi-Medium.ttf",
  variable: "--font-satoshi-medium",
});

export const metadata: Metadata = {
  title: "Launchwell",
  description: "From Idea to Traction—Fast. Structure Beats Hustle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interRegular.variable} ${interLight.variable} ${satoshiBold.variable} ${satoshiMedium.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
