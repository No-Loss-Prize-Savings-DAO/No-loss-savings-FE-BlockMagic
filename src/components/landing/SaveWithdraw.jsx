import React from "react";
import map from "../../../public/images/landing/Vector.svg";
import Image from "next/image";
import hane from "../../../public/images/landing/hane.png";
import profits from "../../../public/images/landing/Profits.png";
import seyi from "../../../public/images/landing/seyi.png";
import josim from "../../../public/images/landing/Josim.png";
import ibrahim from "../../../public/images/landing/Ibrahim.png";
import ellipse from "../../../public/images/landing/ellipse.png";

function SaveWithdraw() {
  return (
    <div className="mt-48">
      <div className="flex flex-col items-center">
        <p className="font-medium text-xl text-[#FF8811]">Send and receive</p>
        <p className="text-5xl text-center">
          Easily send and receive
          <br /> cryptocurrency
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${map.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
        className="mt-24"
      >
        <div
          className="relative  pt-16 max-w-6xl mx-auto h-full w-full"
          style={{
            backgroundImage: `url(${ellipse.src})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            
          }}
        >
          <Image
            src={hane}
            className="absolute top-[150px] w-[250px]"
            alt="hane"
          />
          <Image
            src={profits}
            className="absolute lg:left-[35%]  w-[300px]"
            alt="profits"
          />
          <Image
            src={seyi}
            className="absolute lg:left-[75%]  w-[250px]"
            alt="seyi"
          />
          {/* <div className="mt-48 relative"> */}
          <Image
            src={ibrahim}
            className="absolute lg:left-[35%] mt-[400px] w-[300px]"
            alt="profits"
          />
          <Image
            src={josim}
            className="absolute lg:left-[70%]  mt-[400px] w-[250px]"
            alt="seyi"
          />
        </div>
      </div>
    </div>
  );
}

export default SaveWithdraw;
