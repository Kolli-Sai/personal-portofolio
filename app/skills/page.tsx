import React from "react";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiReacttable } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiDaisyui } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TypographyH3 } from "@/components/ui/typography";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Skills",
  openGraph: {
    title: "Skills",
    description: "This Page inCludes the data Skills",
    url: "/skills",
    siteName: "Portfolio",

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills",
    description: "This Page inCludes the data Skills",

    creator: "@saik98187",
  },
};

const SkillsPage = () => {
  const frontend = [
    {
      id: 1,
      label: "HTML5",
      image: SiHtml5,
    },
    {
      id: 2,
      label: "CSS3",
      image: SiCss3,
    },
    {
      id: 3,
      label: "Javascript",
      image: SiJavascript,
    },
    {
      id: 4,
      label: "Typescript",
      image: SiTypescript,
    },
    {
      id: 5,
      label: "React",
      image: SiReact,
    },
    {
      id: 6,
      label: "Redux",
      image: SiRedux,
    },
    {
      id: 7,
      label: "TailwindCSS",
      image: SiTailwindcss,
    },
    {
      id: 8,
      label: "DaisyUI",
      image: SiDaisyui,
    },
  ];

  const backend = [
    {
      id: 1,
      label: "NodeJS",
      image: FaNodeJs,
    },
    {
      id: 2,
      label: "ExpressJS",
      image: SiExpress,
    },
    {
      id: 3,
      label: "MongoDB",
      image: SiMongodb,
    },
    {
      id: 4,
      label: "Prisma",
      image: SiPrisma,
    },
  ];

  const frameworks = [
    {
      id: 1,
      label: "NextJS",
      image: TbBrandNextjs,
    },
  ];

  const otherTechnologies = [
    {
      id: 1,
      label: "React Hook Form",
      image: SiReacthookform,
    },
    {
      id: 2,
      label: "React Query",
      image: SiReactquery,
    },
    {
      id: 3,
      label: "React Table",
      image: SiReacttable,
    },
    {
      id: 4,
      label: "React Router",
      image: SiReactrouter,
    },
    {
      id: 5,
      label: "Zod",
      image: SiZod,
    },
    {
      id: 6,
      label: "Git",
      image: SiGit,
    },
    {
      id: 7,
      label: "Github",
      image: SiGithub,
    },
  ];

  const favoriteTechnologies = [
    {
      id: 1,
      label: "NextJS",
      image: TbBrandNextjs,
    },
    {
      id: 2,
      label: "TailwindCSS",
      image: SiTailwindcss,
    },
    {
      id: 3,
      label: "DaisyUI",
      image: SiDaisyui,
    },
    {
      id: 4,
      label: "React Hook Form",
      image: SiReacthookform,
    },
    {
      id: 5,
      label: "React Query",
      image: SiReactquery,
    },
    {
      id: 6,
      label: "Zod",
      image: SiZod,
    },
    {
      id: 7,
      label: "Prisma",
      image: SiPrisma,
    },
    {
      id: 8,
      label: "MongoDB",
      image: SiMongodb,
    },
  ];

  return (
    <div className=" flex flex-col gap-8">
      <div>
        <TypographyH3 className=" text-primary text-center">Frontend</TypographyH3>
        <div className=" flex flex-wrap gap-3 items-center justify-center my-4">
          {frontend.map((item) => (
            <>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <item.image className="text-4xl hover:text-primary" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          ))}
        </div>
      </div>
      <div>
        <TypographyH3 className=" text-primary text-center">Backend</TypographyH3>
        <div className=" flex flex-wrap  gap-3 items-center justify-center  my-4">
          {backend.map((item) => (
            <>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <item.image className="text-4xl hover:text-primary" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          ))}
        </div>
      </div>
      <div>
        <TypographyH3 className=" text-primary text-center">Frameworks</TypographyH3>
        <div className=" flex flex-wrap  gap-3 items-center justify-center my-4">
          {frameworks.map((item) => (
            <>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <item.image className="text-4xl hover:text-primary" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          ))}
        </div>
      </div>
      <div>
        <TypographyH3 className=" text-primary text-center">
          Other Technologies
        </TypographyH3>
        <div className=" flex flex-wrap  gap-3 items-center justify-center my-4">
          {otherTechnologies.map((item) => (
            <>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <item.image className="text-4xl hover:text-primary" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          ))}
        </div>
      </div>
      <div>
        <TypographyH3 className=" text-primary text-center">
          Favorite Technologies
        </TypographyH3>
        <div className=" flex  flex-wrap gap-3 items-center justify-center my-4">
          {favoriteTechnologies.map((item) => (
            <>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <item.image className="text-4xl hover:text-primary" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
