// #16a34a
import { Button } from "@/components/ui/button";
import {
  TypographyH1,
  TypographyLead,
  TypographyMuted,
} from "@/components/ui/typography";
import {
  FileText,
  MoveRightIcon,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const HomePage = () => {
  const links = [
    {
      id: 1,
      label: "View My ",
      title: "Resume",
      icon: <FileText />,
      href: "https://drive.google.com/file/d/1T-CtHlkIGPMZd3MB9YYvLYB1Sg7m2Fe9/view?usp=sharing",
    },
    {
      id: 2,
      label: "Find me on ",
      title: "Linkedin",
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/kolli-sai-676772233",
    },
    {
      id: 3,
      label: "Find me on ",
      title: "Github",
      icon: <Github />,
      href: "https://github.com/Kolli-Sai",
    },
    {
      id: 4,
      label: "Find me on ",
      title: "Twitter",
      icon: <Twitter />,
      href: "https://twitter.com/saik98187?t=mZ9QW3kA9h683zcsNd5pNA&s=09",
    },
  ];

  return (
    <>
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 w-full h-screen">
        <div className=" order-2 sm:order-1 flex flex-col justify-center items-start gap-10">
          <TypographyH1>
            Hola ! <br />
            I&apos;m <span className="text-primary">Kolli Sai</span>
          </TypographyH1>
          <TypographyLead className=" text-justify">
            I&apos;m a full stack web developer, I Love working with React
            Ecosystem especially Next.js. I&apos;m Looking for a opportunity to
            work with a team of developers to build amazing products.
          </TypographyLead>
          <div className=" flex gap-4">
            <Button asChild>
              <Link href="/contact">
                Get in touch
                <MoveRightIcon className=" w-6 h-6 ml-2" />
              </Link>
            </Button>
            <Button variant={"outline"} asChild>
              <Link href="/about">Learn More about me</Link>
            </Button>
          </div>
          <div className=" flex gap-6">
            {links.map((link) => (
              <HoverCard key={link.id}>
                <HoverCardTrigger>
                  <div className=" flex gap-2 items-center">
                    <Link href={link.href} className=" hover:text-primary">
                      {link.icon}
                    </Link>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <TypographyMuted>
                    {link.label}
                    <Link href={link.href} target="_blank">
                      <span className=" text-primary underline">
                        {link.title}
                      </span>
                    </Link>
                  </TypographyMuted>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
        <div className=" order-1 sm:order-2 flex flex-col justify-center items-end">
          <Image
            src={"/home.svg"}
            alt="Picture of the author"
            width={720}
            height={600}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
