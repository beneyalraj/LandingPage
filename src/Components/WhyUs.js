import React from "react";

const WhyUs = () => {
  return (
    <div className="w-full h-full pb-8">
      <div className="max-w-[1240px] h-full flex flex-col mx-auto justify-center items-center">
        <h2 className="text-4xl font-bold pb-8">WHY US?</h2>
        <div className="grid sm:grid-cols-3 sm:gap-8 gap-4 justify-center text-center p-8 max-w-[900px] pb-8 ">
          
          <div className="w-full h-full min-h-[200px] rounded-lg flex flex-col items-center bg-slate-200 justify-evenly shadow-md hover:shadow-lg hover:shadow-[#99704d]" >
            <p className="text-2xl md:text-3xl pt-6 font-semibold">QUALITY</p>
            <p className="p-4">Best products out in the market with premium quality and authorised proof documents</p>
          </div>
          <div className="w-full h-full min-h-[200px] rounded-lg flex flex-col items-center bg-slate-200 justify-evenly shadow-md hover:shadow-lg hover:shadow-[#99704d]">
            <p className="text-2xl md:text-3xl pt-6 font-semibold">AFFORDABLE</p>
            <p className="p-4">Over 2000 products sold under 24 hours. Products available with unbelieveable discounts</p>
          </div>
          <div className="w-full h-full min-h-[200px] rounded-lg flex flex-col items-center bg-slate-200 shadow-md hover:shadow-lg justify-evenly hover:shadow-[#99704d]">
            <p className="text-2xl md:text-3xl pt-6 font-semibold">ACCOUNTABLE</p>
            <p className="p-4">Guaranteed delivery within 48hrs of order. fully refundable incase of shipping damages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
