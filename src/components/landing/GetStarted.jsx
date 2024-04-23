import React from "react";
import { Button } from "@/components/ui/button";
import GetStartedBtn from "../shared/get-started-btn";

function GetStarted() {
  return (
    <div className="mt-32  max-w-6xl mx-auto px-4">
      <h1 className="font-medium text-4xl mb-12">Simple steps to get started</h1>
      <div className="mt-8 grid grid-cols-2 gap-12">
        <div className="flex gap-4 items-center">
          <span className="font-bold text-gray-600 text-5xl">01.</span>
          <span>
            <p className="text-2xl font-medium mb-4">Quick sign-up</p>
            <p className="text-lg">It’ll take you 2 minutes top</p>
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <span className="font-bold text-gray-600 text-5xl">04.</span>
          <span>
            <p className="text-2xl font-medium mb-4">Enter a draw</p>
            <p className="text-lg">It’ll take you 2 minutes top</p>
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <span className="font-bold text-gray-600 text-5xl">02.</span>
          <span>
            <p className="text-2xl font-medium mb-4">Security setup</p>
            <p className="text-lg">It’ll take you 2 minutes top</p>
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <span className="font-bold text-gray-600 text-5xl">05.</span>
          <span>
            <p className="text-2xl font-medium mb-4">Collect your winnings</p>
            <p className="text-lg">It’ll take you 2 minutes top</p>
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <span className="font-bold text-gray-600 text-5xl">03.</span>
          <span>
            <p className="text-2xl font-medium mb-4">Deposit</p>
            <p className="text-lg">It’ll take you 2 minutes top</p>
          </span>
        </div>

        <div className="flex gap-4 items-center">
        <GetStartedBtn/>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
