"use client";

import { Gluten } from "next/font/google";
import Link from "next/link";

import ConnectButton from "@/hooks/useConnectButton";
import { NavMobile } from "./nav-mobile";

export const gluten = Gluten({ subsets: ["latin"] });

export const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 z-50 w-full   bg-opacity-30 backdrop-blur-lg backdrop-filter">
        <div className="mx-auto w-full px-4 sm:w-11/12 md:w-10/12">
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              className={`text-3xl font-semibold text-gray-100 lg:text-5xl`}
            >
              Blitz
            </Link>
            <div className="flex items-center gap-12">
              <div className=" hidden lg:flex items-center gap-12">
                <Link href="/dao" className=" font-medium text-lg">
                  Governance
                </Link>
                <Link href="/whitepaper" className=" font-medium text-lg">
                  Whitepaper
                </Link>
                <Link href="/tokenomics" className=" font-medium text-lg">
                  Tokenomics
                </Link>
              </div>

              <ConnectButton />
              <div className="block lg:hidden">
                <NavMobile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
