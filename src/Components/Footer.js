import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full mx-auto">
      <div className="w-full h-full bg-white">
        <div className="w-full max-h-30 flex max-w-[1240px] mx-auto justify-evenly p-4">
          <p className="flex items-center  sm:text-2xl font-spartan">
            FLAT 50% OFF ORDER NOW
          </p>
          <button className="border p-2 px-6 flex items-center gap-2 rounded-lg text-lg font-spartan">
            shop now <AiOutlineArrowRight />
          </button>
        </div>
      </div>

      <div className="w-full h-full sm:flex justify-evenly items-center  bg-black text-white">
        <div className="w-full flex flex-col items-center p-4 gap-2">
          <p className="md:text-3xl text-2xl font-spartan">FOLLOW US</p>
          <div className="flex gap-6 justify-center w-full cursor-pointer">
            <BsGithub size={25} />
            <FaInstagram size={25} />
            <FaTwitter size={25} />
          </div>
        </div>
        <div className="flex w-full h-full justify-center gap-6 md:gap-10 pb-4 pt-4">
          <div className="border-l pl-8 md:pl-16">
            <h2 className="gap-4 py-4 md:text-2xl">Resources</h2>
            <p>Blog</p>
            <p className="gap-2">Feedback</p>
            <p>Community</p>
            <p className="gap-2">Support</p>
          </div>
          <div>
            <h2 className="gap-4 py-4 md:text-2xl">Terms</h2>
            <p>Documents</p>
            <p className="gap-2">Cookies</p>
            <p>Additional</p>
          </div>
          <div>
            <h2 className="gap-4 py-4 md:text-2xl">Company</h2>
            <p>About</p>
            <p className="gap-2">Jobs</p>
            <p>Newsletter</p>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center tracking-wider pb-1 pt-8 bg-black text-slate-400 font-thin text-sm">
        <p>© All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
