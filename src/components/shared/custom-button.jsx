"use client";

import { Button } from "../ui/button";

export const CustomButton = (buttonText, onClick) => {
  
  return (
    <>
        <Button
          onClick={onClick}
          variant={"outline"}
          className="py-4 px-7 gap-2 rounded-full border bg-[#0267FF] text-sm"
          translate="no"
        >
         {buttonText}
        </Button>
    </>
  );
};
