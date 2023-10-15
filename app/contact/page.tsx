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

type Props = {};

const ContactPage = (props: Props) => {
  const contactInfo = [
    {
      id: 1,
      title: "Facebook",
      label: "Find me on ",
      icon: <Facebook size={24} />,
      href: "/",
    },
    {
      id: 2,
      title: "Linkedin",
      label: "Find me on ",
      icon: <Linkedin size={24} />,
      href: "/",
    },
    {
      id: 3,
      title: "Twitter",
      label: "Find me on ",
      icon: <Twitter size={24} />,
      href: "/",
    },
    {
      id: 4,
      title: "Github",
      label: "See my projects on ",
      icon: <Github size={24} />,
      href: "/",
    },
  ];
  return (
    <>
      <div className=" min-h-screen w-full">
        <TypographyH3 className=" mb-8">Contact Me</TypographyH3>
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 py-12">
          <div className=" flex flex-col justify-center items-start">
            <Image
              src={"/contact2.svg"}
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
                    <Link href={item.href}>{item.icon}</Link>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className=" flex flex-col justify-center items-center gap-2">
                <TypographyP className=" text-center">
                  {item.label}
                  <Link href={item.href} className=" text-primary underline">
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
