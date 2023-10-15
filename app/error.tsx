"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyLead } from "@/components/ui/typography";
import { AlertTriangle, MoveLeft, Skull } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center gap-8">
      <div className=" flex justify-start items-center ">
        <AlertTriangle className=" w-12 h-12 text-red-600" />
      </div>
      <TypographyH1 className=" text-red-600 text-center">
      
          {error.message || "An error occurred while rendering the page."}
       
      </TypographyH1>
      <TypographyLead className=" text-justify">
        There was an error while rendering the page. Please try again later. if
        it resolves the content will be displayed here.
      </TypographyLead>
      <div className=" flex justify-center items-center gap-4">
        <Button className=" " variant={"default"} onClick={() => reset()}>
          Try again
        </Button>
        <Button variant={"secondary"} onClick={() => router.back()}>
          <MoveLeft className=" mr-2" size={24} />
          Go back
        </Button>
      </div>
    </div>
  );
}
