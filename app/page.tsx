/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  TypographyH1,
  TypographyLead,
  TypographyMuted,
} from "@/components/ui/typography";
import {
  ExternalLink,
  FileText,
  MoveRightIcon,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 w-full h-screen">
        <div className=" order-2 sm:order-1 flex flex-col justify-center items-start gap-10">
          <TypographyH1>
            Hi! <br />
            I'm <span className="text-primary">Kolli Sai</span>
          </TypographyH1>
          <TypographyLead className=" text-justify">
            I'm a full stack web developer, I Love working with React Ecosystem
            especially Next.js.I'm Looking for a opportunity to work with a team
            of developers to build amazing products.
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
            <div>
              <Link href={"/"} className=" flex gap-1 items-center">
                <TypographyMuted>
                  <FileText />
                  Resume
                </TypographyMuted>
              </Link>
            </div>
            <div>
              <Link href={"/"} className=" flex gap-1 items-center">
                <TypographyMuted>
                  <Linkedin />
                  Linkedin
                </TypographyMuted>
              </Link>
            </div>
            <div>
              <Link href={"/"} className=" flex gap-1 items-center">
                <TypographyMuted>
                  <Github />
                  Github
                </TypographyMuted>
              </Link>
            </div>
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
