import "../globals.css";

import { Inter } from "next/font/google";

export const metadata = {
  title: "Playground",
  description: "Next JS Playground entry point",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-white text-black`}>
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
