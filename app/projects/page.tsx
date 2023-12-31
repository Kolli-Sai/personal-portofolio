import { TypographyH3, TypographySmall } from "@/components/ui/typography";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { SiHtml5, SiNextdotjs } from "react-icons/si";
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
import { SiFirebase } from "react-icons/si";
import {CgEricsson} from "react-icons/cg";
import { Metadata } from "next";
type Props = {};

export const metadata: Metadata = {
  title: "Projects",
  openGraph: {
    title: "Projects",
    description: "This Page inCludes the data Projects",
    url: "/projects",
    siteName: "Portfolio",

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects",
    description: "This Page inCludes the data Projects",

    creator: "@saik98187",
  },
};

const ProjectsPage = (props: Props) => {
  const projects = [
    {
      id: 1,
      title: "Expense Tracker",
      techStack: [
        {
          id: 1,
          label: "Next.js",
          image: SiNextdotjs,
        },
        {
          id: 2,
          label: "TailwindCSS",
          image: SiTailwindcss,
        },
        {
          id: 3,
          label: "React Hook Form",
          image: SiReacthookform,
        },
        {
          id: 4,
          label: "Typescript",
          image: SiTypescript,
        },
        {
          id: 5,
          label: "Zod",
          image: SiZod,
        },
        {
          id: 6,
          label: "Prisma",
          image: SiPrisma,
        },
        {
          id: 7,
          label: "MongoDB",
          image: SiMongodb,
        },
        {
          id: 8,
          label: 'Shadcn UI',
          image: CgEricsson
        }
      ],
      live: "https://expense-tracker-ecru-two.vercel.app/",
      source: "https://github.com/Kolli-Sai/expense-tracker",
    },
    {
      id: 2,
      title: "Todo App",
      techStack: [
        {
          id: 1,
          label: "Next.js",
          image: SiNextdotjs,
        },
        {
          id: 2,
          label: "TailwindCSS",
          image: SiTailwindcss,
        },
        {
          id: 3,
          label: "React Hook Form",
          image: SiReacthookform,
        },
        {
          id: 4,
          label: "Typescript",
          image: SiTypescript,
        },
        {
          id: 5,
          label: "Zod",
          image: SiZod,
        },
        {
          id: 6,
          label: "Prisma",
          image: SiPrisma,
        },
        {
          id: 7,
          label: "MongoDB",
          image: SiMongodb,
        },
      ],
      live: "https://todo-five-lemon.vercel.app/",
      source: "https://github.com/Kolli-Sai/todo",
    },
    {
      id: 3,
      title: "URL Shortener",
      techStack: [
        {
          id: 1,
          label: "Next.js",
          image: SiNextdotjs,
        },
        {
          id: 2,
          label: "TailwindCSS",
          image: SiTailwindcss,
        },
        {
          id: 3,
          label: "React Hook Form",
          image: SiReacthookform,
        },
        {
          id: 4,
          label: "Typescript",
          image: SiTypescript,
        },
        {
          id: 5,
          label: "Zod",
          image: SiZod,
        },
        {
          id: 6,
          label: "Prisma",
          image: SiPrisma,
        },
        {
          id: 7,
          label: "MongoDB",
          image: SiMongodb,
        },
      ],
      live: "https://url-shortner-drab-delta.vercel.app/",
      source: "https://github.com/Kolli-Sai/url-shortner",
    },
    {
      id: 4,
      title: "Employee Management System",
      techStack: [
        {
          id: 1,
          label: "React",
          image: SiReact,
        },
        {
          id: 2,
          label: "TailwindCSS",
          image: SiTailwindcss,
        },
        {
          id: 3,
          label: "React Hook Form",
          image: SiReacthookform,
        },
        {
          id: 4,
          label: "MongoDB",
          image: SiMongodb,
        },
        {
          id: 5,
          label: "Express",
          image: SiExpress,
        },
        {
          id: 6,
          label: "Firebase",
          image: SiFirebase,
        },
        {
          id: 7,
          label: "React Query",
          image: SiReactquery,
        },
        {
          id: 8,
          label: "React Router",
          image: SiReactrouter,
        },
      ],
      live: "https://fluffy-halva-49f833.netlify.app/",
      source: "https://github.com/hash-insert/Employee-Management-App-ALPHA",
    },
    {
      id: 5,
      title: "Password Vault",
      techStack: [
        {
          id: 1,
          label: "React",
          image: SiReact,
        },
        {
          id: 2,
          label: "TailwindCSS",
          image: SiTailwindcss,
        },
        {
          id: 3,
          label: "React Hook Form",
          image: SiReacthookform,
        },
        {
          id: 4,
          label: "MongoDB",
          image: SiMongodb,
        },
        {
          id: 5,
          label: "Express",
          image: SiExpress,
        },

        {
          id: 7,
          label: "React Query",
          image: SiReactquery,
        },
        {
          id: 8,
          label: "React Router",
          image: SiReactrouter,
        },
      ],
      live: "https://passwords-jekz3evge-kolli-sai.vercel.app/",
      source: "https://github.com/Kolli-Sai/passwords",
    },
  ];

  return (
    <div className=" h-screen ">
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 my-12">
        {projects.map((project) => (
          <Card key={project.id} className=" hover:border-primary">
            <CardHeader>
              <CardTitle className="text-primary">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <TypographySmall className=" mb-2">Tech Stack : </TypographySmall> */}
              <CardDescription className="  flex flex-wrap justify-start items-center gap-3">
                {project.techStack.map((tech) => (
                  <TooltipProvider key={tech.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <tech.image className="text-2xl hover:text-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{tech.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <div className=" flex justify-end gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        asChild
                        size={"icon"}
                        variant={"secondary"}
                        className=" rounded-full cursor-pointer"
                      >
                        <Link href={project.live} target="_blank">
                          <ExternalLink />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Live</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        asChild
                        size={"icon"}
                        variant={"secondary"}
                        className=" rounded-full cursor-pointer"
                      >
                        <Link href={project.source} target="_blank">
                          <Github />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="">
                      <p>Source Code</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
