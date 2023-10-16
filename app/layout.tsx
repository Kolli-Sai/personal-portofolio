import React from "react";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Layout from "@/components/layout";
import { Separator } from "@/components/ui/separator";
import Providers from "./providers";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import { getBaseUrl } from "@/lib/secrets";

export const metadata: Metadata = {
  title: {
    default: "Kolli Sai",
    template: "%s | Kolli Sai",
  },
  description:
    "This is My personal website where you can find my resume and my projects",
  creator: "Kolli Sai",
  publisher: "Kolli Sai",
  generator: "Next js",
  authors: [{ name: "Kolli Sai", url: "https://kolli-sai.vercel.app" }],
  applicationName: "Kolli Sai",
  keywords: [
    "Kolli Sai",
    "Kolli Sai portfolio",
    "Kolli Sai resume",
    "Kolli Sai projects",
    "Kolli Sai website",
  ],
  referrer: "no-referrer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  colorScheme: "dark light",
  themeColor: "#16a34a",
  metadataBase: new URL(getBaseUrl()),
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["saik98187@gmail.com", "https://kolli-sai.vercel.app"],
    },
  },
  bookmarks: ["/", "/about", "/projects", "/skills", "/contact"],
  category: "technology",
  openGraph: {
    title: "Kolli Sai",
    description:
      "This is My personal website where you can find my resume and my projects",
    url: "/",
    siteName: "Portfolio",

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolli Sai",
    description:
      "This is My personal website where you can find my resume and my projects",
    // siteId: "1467726470533754880",
    // creatorId: "1467726470533754880",
    creator: "@saik98187",
  },
};

type Props = {
  children: React.ReactNode;
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const RootLayout = (props: Props) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn({
          [poppins.className]: true,
        })}
      >
        <Providers>
          <Layout className=" py-6">
            <Navbar />
          </Layout>
          <Separator className=" text-primary bg-primary" />
          <Layout className=" py-6">
            <main>{props.children}</main>
          </Layout>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
