"use client";
import { Button } from "@/components/ui/button";
import {
  TypographyH1,
  TypographyH2,
  TypographyLead,
} from "@/components/ui/typography";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
type Props = {};

const NotFound = (props: Props) => {
  const router = useRouter();
  return (
    <div className=" h-screen w-full flex flex-col justify-start items-center gap-6">
      <Image
        src="/not-found.svg"
        width={500}
        height={500}
        alt="Not Found Svg"
      />
      <TypographyH1 className=" text-red-600">Page Not Found</TypographyH1>
      <TypographyLead>
        The page you are looking for does not exist. Please try again later.
      </TypographyLead>
      <div className=" flex justify-center">
        <Button onClick={() => router.back()}>
          <MoveLeft className=" mr-2" size={24} />
          Go back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
