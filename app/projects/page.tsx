import {
  TypographyH3,
  TypographyInlineCode,
  TypographyLead,
  TypographyList,
  TypographySmall,
} from "@/components/ui/typography";
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
import { Separator } from "@/components/ui/separator";

type Props = {};

const ProjectsPage = (props: Props) => {
  const projects = [
    {
      id: 1,
      title: "Expense Tracker",
      techStack: [
        "Next.js",
        "NextAuth",
        "TailwindCSS",
        "Shadcn UI",
        "React Hook Form",
        "zod",
        "Prisma",
        "MongoDB",
      ],
      live: "",
      source: "",
    },
    {
      id: 2,
      title: "Todo App",
      techStack: [
        "Next.js",
        "NextAuth",
        "TailwindCSS",
        "Next UI",
        "React Hook Form",
        "zod",
        "Prisma",
        "MongoDB",
      ],
      live: "",
      source: "",
    },
    {
      id: 3,
      title: "URL Shortener",
      techStack: [
        "Next.js",
        "NextAuth",
        "TailwindCSS",
        "Next UI",
        "React Hook Form",
        "zod",
        "Prisma",
        "MongoDB",
      ],

      live: "",
      source: "",
    },
    {
      id: 4,
      title: "Employee Management System",
      techStack: [
        "React",
        "React-router",
        "Tailwindcss",
        "React Hook Form",
        "@tanstck/react-query",
        "firebase",
        "Express js",
        "MongoDB",
      ],
      live: "",
      source: "",
    },
    {
      id: 5,
      title: "Password Vault",
      techStack: [
        "React",
        "React-router",
        "Tailwindcss",
        "Shadcn UI",
        "React Hook Form",
        "@tanstck/react-query",
        "Express js",
        "MongoDB",
      ],
      live: "",
      source: "",
    },
  ];
  return (
    <>
      <TypographyH3 className=" mb-6 text-primary underline underline-offset-4">Projects</TypographyH3>
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className=" hover:border-primary">
            <CardHeader>
              <CardTitle className="text-primary">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographySmall className=" mb-2">Tech Stack : </TypographySmall>
              <CardDescription className=" leading-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <>
                    <TypographySmall key={tech} className="mr-2">
                      {tech}
                    </TypographySmall>
                  </>
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
                        className=" rounded-full"
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
                        className=" rounded-full"
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
    </>
  );
};

export default ProjectsPage;
