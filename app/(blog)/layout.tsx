import "../globals.css";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { VisualEditing, toPlainText } from "next-sanity";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { Suspense } from "react";

import AlertBanner from "./alert-banner";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const subheader = settings?.subheader || demo.subheader;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    ...(subheader && { description: toPlainText(subheader as any) }),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

async function Footer() {
  return (
    <footer className="flex justify-center border border-gray-200 bg-gray-50">
      <div className="mb-12 mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-6">
        <div className="flex flex-col">
          <h3 className="font-bold mb-4">About Me</h3>
          <div className="text-gray-700">
            <p>Lover of Life. Seeker of Joy.</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold mb-4">Drop By</h3>
          <div className="text-gray-700">
            <p>Toulouse, Batroun, or elsewhere</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold mb-4">Get in Touch</h3>
          <div className="flex flex-row gap-6">
            <a href="mailto:marya.sdk@gmail.com" aria-label="Send me an email">
              <MdOutlineEmail className="fill-gray-400" size={25} />
            </a>
            <a
              href={"https://www.linkedin.com/in/marya-sdk/"}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow me on Linkedin"
            >
              <FaLinkedin className="fill-gray-400" size={25} />
            </a>
            <a
              href={"https://www.instagram.com/maryasadek/"}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow me on Instagram"
            >
              <FaInstagram className="fill-gray-400" size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-white text-black`}>
      <body>
        <section className="min-h-screen">
          {draftMode().isEnabled && <AlertBanner />}
          <main>{children}</main>
          <Suspense>
            <Footer />
          </Suspense>
        </section>
        {draftMode().isEnabled && <VisualEditing />}
        <SpeedInsights />
      </body>
    </html>
  );
}
