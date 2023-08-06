import React from "react";
import King from "../assects/king.jpeg";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="w-full h-[800px]">
      <img
        className="w-full h-full object-cover relative"
        alt="King"
        src={King}
      />
      <div className="absolute top-0 w-full h-full text-white flex flex-col justify-center text-center md:text-start md:pl-32">
        <h1 className="text-4xl md:text-6xl font-bold font-heading text-[#99704d]">
          MEN NATION
        </h1>
        <p className="font-extralight md:font-light text-slate-100 text-xs md:text-xl">
          One Stop for All the Products
        </p>
      </div>
      <div className="w-full h-[7%] flex justify-center bg-slate-600">
        <Marquee pauseOnHover autoFill>
          <p className="text-white pl-8 tracking-wide text-xl">
            50% ON FIRST ORDER{" "}
            <span className="font-extralight text-xs"> t&c apply.</span> GRAB
            THE OFFER SOON *VALID ONLY FOR LIMITED TIME*
          </p>
        </Marquee>
      </div>

    </div>
  );
};

export default Hero;
