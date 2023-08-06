import React from "react";
import beardoil from "../assects/beardoil.jpeg";
import moisturizer from "../assects/moisturizer.png";
import whey from "../assects/whey.png";
import cycle from "../assects/cycle.png";


const Products = () => {
  return (
    <div className="w-full h-full drop-shadow-2xl">
  
 <div className="max-w-[1260px] text-center mx-auto bg-[#644937]/30 rounded-lg z-20 ">
      <div className="grid grid-rows-none md:grid-cols-3 gap-2 md:gap-4 rounded-lg my-36 pt-6 p-4">
        <div className="text-white flex flex-col justify-center pb-4 md:pb-0 ">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold ">
            TOP PRODUCTS
          </p>
          <p className="font-extralight text-sm">
            Some Of Hand Picked Collections for you
          </p>
        </div>
        <img
          className="w-full h-full rounded-lg object-cover max-h-72 md:col-span-2 shadow-md hover:shadow-lg hover:shadow-[#99704d]/70"
          src={cycle}
          alt="/"
        />
        <img
          className="w-full h full rounded-lg object-cover max-h-72 shadow-md hover:shadow-lg hover:shadow-[#99704d]/70"
          width={40}
          height={10}
          src={whey}
          alt="/"
        />
        <img
          className="w-full h-full rounded-lg object-cover max-h-72 shadow-md hover:shadow-lg hover:shadow-[#99704d]/70"
          src={moisturizer}
          alt="/"
        />
        <img
          className="w-full h-full rounded-lg object-cover max-h-72 shadow-md hover:shadow-lg hover:shadow-[#99704d]/70"
          src={beardoil}
          alt="/"
        />
      </div>
    </div>
    </div>
   
  );
};

export default Products;
