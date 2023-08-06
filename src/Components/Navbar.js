import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handlenav = () => {
    setNav(!nav);
  };
  return (
    <div className=" fixedw-full h-full flex justify-center">
      <div className="flex justify-between text-[#e3c9a9] items-center w-full h-24 max-w-[1350px] px-4 absolute z-10 mx-auto pl-4">
        <h1 className="w-full text-bold text-3xl text-[#e3c9a9] cursor-pointer pl-2">
          ⩕
        </h1>
        <ul className="md:flex hidden cursor-pointer">
          <li className="p-4">WORKOUTS</li>
          <li className="p-4">SUPPLIMENTS</li>
          <li className="p-4">BEARD</li>
          <li className="p-4">FACE</li>
        </ul>
        <div onClick={handlenav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-[#e3c9a9] bg-[#e3c9a9]/10 ease-in-out duration-500 md:hidden"
              : "fixed left-[-100%] "
          }
        >
          <h1 className="w-full text-bold text-3xl text-[#e3c9a9] m-4 pt-3 pl-2">
          ⩕
          </h1>{" "}
          <ul className=" cursor-pointer">
            <li className="p-4 border-b border--[#e3c9a9]">WORKOUTS</li>
            <li className="p-4 border-b border--[#e3c9a9]">SUPPLIMENTS</li>
            <li className="p-4 border-b border--[#e3c9a9]">BEARD</li>
            <li className="p-4">FACE</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
