import React from "react";
import { Button } from "@/components/ui/button";
import GetStartedBtn from "../shared/get-started-btn";

const Explore = () => {
  return (
    <div className="bg-gradient-to-r from-[#171D33] p-12 rounded-3xl  mt-32  max-w-6xl mx-auto drop-shadow-2xl">
      <div className="max-w-xl text-center flex flex-col items-center justify-center  gap-6 mx-auto">
        <p className="text-5xl leading-snug ">
          Get ready to explore the crypto world
        </p>
        <p className="text-lg">
          Join now with Blitz to begin saving and earning in crypto.
        </p>
        <GetStartedBtn/>
      </div>
    </div>
  );
};

export default Explore;
