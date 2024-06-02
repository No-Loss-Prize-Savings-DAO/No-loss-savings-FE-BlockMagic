"use client";

import { UserCircle2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import ForfeitMembership from "../dao/forfeit-membership";
import { useGetUserDAOStatus } from "@/hooks/useGetUserBalance";

const UserDetails = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const userDaoStatus = useGetUserDAOStatus();

  

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPopoverOpen(true)}
      onMouseLeave={() => setIsPopoverOpen(false)}
    >
      <span>
        <UserCircle2
          className="w-12 h-12 cursor-pointer pb-2"
          data-popover-target="popover-user-profile"
        />
      </span>
      {isPopoverOpen && userDaoStatus && (
        <div
          data-popover
          id="popover-user-profile"
          aria-labelledby="tooltip"
          className="absolute z-10 -right-20 inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 rounded-lg border shadow-sm dark:bg-slate-950 dark:border-gray-800"
          onMouseEnter={() => setIsPopoverOpen(true)}
          onMouseLeave={() => setIsPopoverOpen(false)}
        >
          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <span></span>
              <div>
                <button
                  type="button"
                  className="text-white bg-green-600 hover:bg-green-700 focus:ring-0 font-medium rounded-lg text-xs px-2 py-1"
                >
                  DAO member
                </button>
              </div>
            </div>
            <div>
              <Image
                src="https://aquamarine-famous-penguin-727.mypinata.cloud/ipfs/QmbTwJmaNz8pfjZvhhqJPhiphYHMD2SEyjnhG2wb8LRVTj"
                className="w-48 my-4 mx-auto rounded-lg object-contain"
                width={100}
                height={100}
                priority
              />
            </div>
            <p className="mb-4 text-sm text-center">
              View on{" "}
              <a
                href="https://testnets.opensea.io/collection/dao-membership-nft-5"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                opensea
              </a>
              .
            </p>
       <div className="flex flex-col items-center">
       <ForfeitMembership/>
       </div>
          </div>
          <div data-popper-arrow></div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
