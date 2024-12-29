import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative py-5 overflow-hidden max-w-screen-xl mx-auto">
      {/* image */}
      <div className="relative">
        <Image
          src="/images/home.png"
          alt="homeBanner"
          className="w-full h-full object-cover px-4 md:px-0 rounded-md"
          width={1920}
          height={1080}
        />
      </div>
      {/* text */}
      <div>
        <div className="absolute inset-0 flex flex-col justify-center px-10">
          <h2 className="text-xl md:text-4xl lg:text-6xl text-white font-bold">
            Mi Air Purifier
          </h2>
          <p className="text-base md:text-lg font-semibold leading-6 text-white max-w-[250px] mt-4">
            The new tech gift you are wishing for right here.
          </p>
          <button className="w-44  h-8 md:h-10 rounded-full flex items-center justify-center bg-white text-black hover:bg-black hover:text-white duration-200 mt-4">
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
