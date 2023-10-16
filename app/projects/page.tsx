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
type Props = {};

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
      ],
      live: "",
      source: "",
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
      live: "",
      source: "",
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
      live: "",
      source: "",
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
      live: "",
      source: "",
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
      live: "",
      source: "",
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
                        <Link href={project.live}>
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
                        <Link href={project.source}>
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
