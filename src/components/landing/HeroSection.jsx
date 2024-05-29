import React from "react";
import graph from "../../../public/images/landing/Rising.svg";
import Image from "next/image";
import GetStartedBtn from "../shared/get-started-btn";

const HeroSection = () => {
  return (
    <section className="container mt-0 sm:mt-6">
      <div className="mx-auto grid max-w-screen-2xl px-4 pt-20 lg:grid-cols-12 lg:gap-8  lg:pt-28 xl:gap-0">
        <div className="mr-auto place-self-center  lg:col-span-7">
          <h1 className="mb-4 max-w-3xl text-4xl leading-none tracking-tight text-white lg:text-5xl xl:text-6xl">
            Fast & secure crypto savings
            <br />
          </h1>

          <p className="md:text-xllg:mb-8 mb-6 max-w-2xl text-gray-300 lg:text-2xl">
          Blitz is a &quot;No-Loss Prize Savings DAO&quot; that merges
            traditional savings mechanisms with the innovative features of
            decentralized finance (DeFi), blockchain technology, and tokenomics.
          </p>

          <div className="mb-4 space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
          <GetStartedBtn/>
          </div>
        </div>
        <div className=" lg:col-span-5 lg:mt-0">
          <Image
            src={graph}
            alt=""
            width={500}
            height={500}
            className="w-[400px]"
          />
          <div className="flex justify-center gap-3 w-[400px] mt-4 font-semibold">
            <span className="py-2 px-3 rounded-3xl border bg-[#0267FF] text-white text-sm w-fit">Save</span>
            <span className="py-2 px-3 rounded-3xl border bg-[#FF8811] text-white text-sm w-fit">Invest</span>
            <span className="py-2 px-3 rounded-3xl border bg-[#11A3FF] text-white text-sm w-fit">Earn</span>
            <span className="py-2 px-3 rounded-3xl border bg-[#9111FF] text-white text-sm w-fit">Save</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
