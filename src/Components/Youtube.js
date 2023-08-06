import React from "react";
import King2 from "../assects/king2.jpeg";
import YouTube from "react-youtube";

const Youtube1 = () => {
  const opts = {
    height: 280,
    width: 425,
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center relative drop-shadow-2xl">
      <img
        className="w-full h-full object-cover relative"
        alt="King"
        src={King2}
        height={20}
      />
      <div className="w-full flex absolute flex-col md:flex-row justify-between sm:gap-8 items-center max-w-[1240px] p-4">
        <div className="flex flex-col items-center text-center text-slate-50 ">
          <h1 className="font-bold sm:text-3xl text-2xl font-cinzel font-weight-700 max-w-md">
            Customised Workout Plan Bulk / shred
          </h1>
          <p className="font-cinzel pb-2">FOR MEN</p>
          <button className="border px-2 bg-[#99704d] hover:scale-125 ease-in-out mb-2">
            Contact us{" "}
          </button>
        </div>

        <div>
          <YouTube
            className="flex items-center"
            videoId="M04f7hdBWko"
            opts={opts}
          />
        </div>
      </div>
    </div>
  );
};

export default Youtube1;
