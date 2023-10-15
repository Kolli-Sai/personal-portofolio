import { TypographyH3 } from "@/components/ui/typography";

import React from "react";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {};

const SkillsPage = (props: Props) => {
  const skills = [
    {
      id: 1,
      label: "HTML",
      image: "/html.svg",
    },
    {
      id: 2,
      label: "CSS",
      image: "/css.svg",
    },
    {
      id: 3,
      label: "Javascript",
      image: "/js.svg",
    },
    {
      id: 4,
      label: "Typescript",
      image: "/ts.svg",
    },
    {
      id: 5,
      label: "React",
      image: "/react.svg",
    },
    {
      id: 6,
      label: "Next.js",
      image: "/nextjs.svg",
    },
    {
      id: 7,
      label: "TailwindCSS",
      image: "/tailwindcss2.svg",
    },
    {
      id: 8,
      label: "Node.js",
      image: "/nodejs.svg",
    },
    {
      id: 9,
      label: "Express.js",
      image: "/expressjs.svg",
    },
    {
      id: 10,
      label: "MongoDB",
      image: "/mongodb.svg",
    },
    ,
    {
      id: 12,
      label: "Git",
      image: "/git.svg",
    },
    {
      id: 13,
      label: "Github",
      image: "/github.svg",
    },
    {
      id: 14,
      label: "Prisma",
      image: "/prisma.svg",
    },
    {
      id: 15,
      label: "React Hook Form",
      image: "reacthookform.svg",
    },
    {
      id: 16,
      label: "Next Ui",
      image: "nextui.svg",
    },
    // {
    //   id: 17,
    //   label: "Shadcn UI",
    //   image: "shadcn.svg",
    // },
    {
      id: 18,
      label: "zod",
      image: "zod.svg",
    },
    {
      id: 19,
      label: "NextAuth",
      image: "auth.svg",
    },
    {
      id: 20,
      label: "React Query",
      image: "reactquery.svg",
    },
    {
      id: 21,
      label: "React Table",
      image: "reacttable.svg",
    },
    {
      id: 22,
      label: "React Router",
      image: "reactrouter.svg",
    },
  ];
  const favorite = [
    {
      id: 1,
      label: "Next.js",
      image: "/nextjs.svg",
    },

    {
      id: 3,
      label: "TailwindCSS",
      image: "/tailwindcss2.svg",
    },
    {
      id: 4,
      label: "Next UI",
      image: "/nextui.svg",
    },
    {
      id: 5,
      label: "React Hook Form",
      image: "reacthookform.svg",
    },
    {
      id: 6,
      label: "zod",
      image: "zod.svg",
    },
    {
      id: 7,
      label: "React Query",
      image: "reactquery.svg",
    },
    {
      id: 8,
      label: "Typescript",
      image: "/ts.svg",
    },
    {
      id: 9,
      label: "Prisma",
      image: "/prisma.svg",
    },
    {
      id: 2,
      label: "NextAuth",
      image: "/auth.svg",
    },
  ];

  return (
    <div className=" h-screen py-6">
      <TypographyH3 className="mb-8">Tech Stack</TypographyH3>
      <div className=" flex flex-wrap gap-4 my-6">
        {skills.map((skill: any) => (
          <TooltipProvider key={skill.id}>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  key={skill?.id}
                  src={skill.image}
                  width={48}
                  height={48}
                  alt={skill.label}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      <TypographyH3 className="mb-8">My Favorite Tech Stack</TypographyH3>

      <div className=" flex flex-wrap gap-4">
        {favorite.map((skill: any) => (
          <TooltipProvider key={skill.id}>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  key={skill?.id}
                  src={skill.image}
                  width={48}
                  height={48}
                  alt={skill.label}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
