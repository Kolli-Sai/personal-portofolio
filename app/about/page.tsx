import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyLead,
  TypographyP,
} from "@/components/ui/typography";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className=" h-screen w-full">
      <TypographyH3 className=" mb-8">About Me</TypographyH3>
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 py-12">
        <div className=" flex flex-col justify-center">
          <Image src={"/about2.svg"} width={500} height={500} alt="about me" />
        </div>
        <div className="flex flex-col gap-4 justify-center items-start h-full">
          <TypographyH3 className="text-primary">Kolli Sai</TypographyH3>
          <TypographyP className="text-justify">
            I&apos;m Sai, a passionate individual with a B-Tech degree in Civil
            Engineering from Vishnu Institute of Technology in Bhimavaram.
          </TypographyP>
          <TypographyP className="text-justify">
            During my academic journey, I had the incredible opportunity to
            intern at{" "}
            <Link
              href={"https://www.hashinsert.com/"}
              className="text-primary items-center inline"
            >
              Hash Insert organization{" "}
              <ExternalLink className="w-4 h-4 inline" />
            </Link>{" "}
            as a MERN stack developer. This 8-month training period was
            transformative for me as I delved deep into the world of web
            development.
          </TypographyP>
          <TypographyP className="text-justify">
            Throughout this experience, I honed my skills in HTML, CSS,
            JavaScript, React, Node.js, Express.js, MongoDB, and Next.js. This
            hands-on training not only provided me with technical expertise but
            also instilled in me the confidence to tackle challenging tasks in
            the realm of web development.
          </TypographyP>
          <TypographyP className="text-justify">
            I am excited about the prospect of applying my knowledge and skills
            to real-world projects, contributing meaningfully to the field of
            MERN stack development.
          </TypographyP>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
