import ContactForm from "@/components/forms/contact-form";
import {
  TypographyH3,
  TypographyLead,
  TypographyP,
} from "@/components/ui/typography";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  openGraph: {
    title: "Contact Me",
    description: "This Page inCludes the data Contact Me",
    url: "/contact",
    siteName: "Portfolio",

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Me",
    description: "This Page inCludes the data Contact Me",

    creator: "@saik98187",
  },
};

type Props = {};

const ContactPage = (props: Props) => {
  const contactInfo = [
    {
      id: 1,
      title: "Facebook",
      label: "Find me on ",
      icon: <Facebook size={24} />,
      href: "https://www.facebook.com/k.sai.140193?mibextid=ZbWKwL",
    },
    {
      id: 2,
      title: "Linkedin",
      label: "Find me on ",
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/kolli-sai-676772233",
    },
    {
      id: 3,
      title: "Twitter",
      label: "Find me on ",
      icon: <Twitter size={24} />,
      href: "https://twitter.com/saik98187?t=mZ9QW3kA9h683zcsNd5pNA&s=09",
    },
    {
      id: 4,
      title: "Github",
      label: "See my projects on ",
      icon: <Github size={24} />,
      href: "https://github.com/Kolli-Sai",
    },
  ];
  return (
    <>
      <div className=" min-h-screen w-full ">
        <div className=" grid grid-cols-1 gap-12 sm:grid-cols-2  py-12">
          <div className=" flex flex-col justify-center items-start">
            <Image
              src={"/contact4.svg"}
              width={500}
              height={500}
              alt="about me"
            />
          </div>
          <div className=" flex flex-col gap-4 justify-center items-end h-full">
            <ContactForm />
          </div>
        </div>

        <TypographyLead className="text-center my-6">
          Reach Me Out
        </TypographyLead>
        <div className=" flex justify-center items-center gap-4 mb-12">
          {contactInfo.map((item) => (
            <HoverCard key={item.id}>
              <HoverCardTrigger>
                <div className=" flex flex-col justify-center items-center gap-2">
                  <div className=" flex justify-center items-center hover:text-primary">
                    <Link href={item.href} target="_blank">{item.icon}</Link>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className=" flex flex-col justify-center items-center gap-2">
                <TypographyP className=" text-center">
                  {item.label}
                  <Link href={item.href} target="_blank"  className=" text-primary underline">
                    {item.title}
                  </Link>
                </TypographyP>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
