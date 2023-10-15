import Link from "next/link";
import React from "react";
import { TypographyH3 } from "./ui/typography";
import ActiveLinks from "./active-links";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";
import { User } from "lucide-react";
import { NavbarMenu } from "./navbar-menu";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" flex justify-between items-center sticky top-0">
      <div>
        <Link href="/">
          <TypographyH3 className=" text-primary flex justify-center items-center">
            <User className=" w-10 h-10 mr-2" />
            Kolli Sai
          </TypographyH3>
        </Link>
      </div>
      <div className={cn("flex justify-start items-center gap-4")}>
        <div className={cn(" justify-start items-center gap-4 hidden sm:flex")}>
          <ActiveLinks />
        </div>
        <div>
          <ThemeSwitcher />
        </div>
        <div className=" sm:hidden">
          <NavbarMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
