import React from "react";
import { Button } from "../ui/button";
import graph from "../../../public/images/landing/Rising.svg";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container mt-0 sm:mt-6">
      <div className="mx-auto grid max-w-screen-2xl px-4 pt-20 lg:grid-cols-12 lg:gap-8  lg:pt-28 xl:gap-0">
        <div className="mr-auto place-self-center  lg:col-span-7">
      
          <h1 className="mb-4 max-w-3xl text-4xl font-light leading-none tracking-tight text-white lg:text-5xl xl:text-6xl">
            Fastest & secure crypto marketplace
            <br />
          </h1>
         
          <p className="md:text-xllg:mb-8 mb-6 max-w-2xl font-mono font-light text-gray-500 lg:text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text
          </p>

          <div className="mb-4 space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
            <Link href="/dashboard">
            <Button
            className="py-6 px-7 gap-2 rounded-full border bg-[#0267FF] text-white text-sm w-fit"
            translate="no"
          >
            Get Started
          </Button>
            </Link>
          </div>
        </div>
        <div className=" lg:col-span-5 lg:mt-0 lg:flex">
          <Image
            src={graph}
            alt=""
            width={500}
            height={500}
            className="w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
