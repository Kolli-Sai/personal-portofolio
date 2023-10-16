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

export const metadata: Metadata = {
  title: {
    default: "Kolli Sai",
    template: "%s | Kolli Sai",
  },
  description:
    "This is My personal website where you can find my resume and my projects",
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
