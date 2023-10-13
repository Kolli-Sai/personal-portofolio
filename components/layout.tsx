import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = (props: Props) => {
  return (
    <section
      className={cn(
        " container mx-auto max-w-7xl px-6 flex-grow",
        props.className
      )}
    >
      {props.children}
    </section>
  );
};

export default Layout;
