"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TypographyLead, TypographyP, TypographySmall } from "./ui/typography";
import { cn } from "@/lib/utils";
type Props = {};

const ActiveLinks = (props: Props) => {
  const data = [
    {
      id: 1,
      href: "/about",
      label: "About",
    },
    {
      id: 2,
      href: "/skills",
      label: "Skills",
    },
    {
      id: 3,
      href: "/projects",
      label: "Projects",
    },
    {
      id: 4,
      href: "/contact",
      label: "Contact",
    },
  ];
  const pathname = usePathname();
  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <Link href={item.href}>
            <TypographyLead
              className={cn({
                "text-primary   ": pathname === item.href,
              })}
            >
              {item.label}
            </TypographyLead>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ActiveLinks;
