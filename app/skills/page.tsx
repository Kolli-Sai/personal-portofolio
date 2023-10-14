import { TypographyH3 } from "@/components/ui/typography";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {};

const SkillsPage = (props: Props) => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Prisma",
    "NextAuth.js",
    "TailwindCSS",
    "Shadcn UI",
    "Next UI",
    "Daisy UI",
    "@tanstck/react-query",
    "@tanstack/react-table",
    "React Hook Form",
    "React-router",
    "Redux-toolkit",
    "Zustand",
  ];
  const techStack = [
    'Next.js',
    'NextAuth',
    'TailwindCSS',
    'Shadcn UI',
    'React Hook Form',
    'zod'
  ]
  return (
    <>
      <TypographyH3 className=" text-primary underline underline-offset-4 ">
        Skills
      </TypographyH3>
      <div className=" grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 my-6">
        {skills.map((skill) => (
          <Card key={skill} className=" hover:border-primary">
            <CardHeader>
              <CardTitle>{skill}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
      <TypographyH3 className=" text-primary underline underline-offset-4 mb-6">My Favorite tech Stack</TypographyH3>

      <div>
        <div className=" grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 my-6">
          {techStack.map((skill) => (
            <Card key={skill} className=" hover:border-primary">
              <CardHeader>
                <CardTitle>{skill}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
