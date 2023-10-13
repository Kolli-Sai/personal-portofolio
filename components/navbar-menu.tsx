"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiMenuAlt4 } from "react-icons/hi";
import { usePathname, useRouter } from "next/navigation";

export function NavbarMenu() {
  const pathname = usePathname();
  const router = useRouter();

  const [position, setPosition] = React.useState(pathname);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={"icon"}>
          <HiMenuAlt4 className=" h-6 w-6 " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            value="/about"
            onClick={() => router.push("/about")}
          >
            About
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="/skills"
            onClick={() => router.push("/skills")}
          >
            Skills
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="/projects"
            onClick={() => router.push("/projects")}
          >
            Projects
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="/contact"
            onClick={() => router.push("/contact")}
          >
            Contact
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
