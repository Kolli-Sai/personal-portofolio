"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
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
      
        <DropdownMenuItem onClick={()=>router.push('/about')}>
          About
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=>router.push('/projects')}>
          Projects
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=>router.push('/skills')}>
          Skills
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=>router.push('/contact')}>
          Contact
        </DropdownMenuItem>

       
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
