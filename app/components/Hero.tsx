"use client";

import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-visible bg-black px-4 md:px-8 py-20">
      {/* Main Title - CREATIVE WORLD */}
      <div className="relative z-10 mb-10 md:mb-20">
        <h1 className="text-white font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] text-center tracking-wider leading-none uppercase">
          DHANIYEL
          <br />
          DARVESH
        </h1>

        {/* Left Card - LIVING COLOR */}
        <div className="max-md:hidden absolute top-[-80px] left-[-120px] w-48 h-64 sm:top-[-60px] sm:left-[-150px] sm:w-56 sm:h-72 md:top-0 md:left-[-200px] md:w-72 md:h-96 bg-white rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.8)] transform -rotate-12 overflow-hidden">
          {/* Purple gradient top */}
          <div className="w-full h-3/5 bg-gradient-to-br from-[#a855f7] to-[#be5cff]"></div>
          {/* White bottom with text */}
          <div className="w-full h-2/5 bg-white p-3 sm:p-4 md:p-6">
            <h3 className="text-black font-bold text-base sm:text-lg md:text-2xl mb-1 sm:mb-2 md:mb-3">
              LIVING COLOR
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
              Consectetur nostra dapibus eu eleifend ipsum laculis luctus dis ac
              turpis sociosqu risus integer pellentesque
            </p>
          </div>
        </div>

        {/* Right Card - INSPIRED */}
        <div className="max-md:hidden absolute top-[-100px] right-[-100px] w-48 h-64 sm:top-[-80px] sm:right-[-120px] sm:w-56 sm:h-72 md:top-[-50px] md:right-[-150px] md:w-72 md:h-96 bg-white rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.8)] transform rotate-12 overflow-hidden">
          {/* Purple gradient top */}
          <div className="w-full h-3/5 bg-gradient-to-br from-[#a855f7] to-[#be5cff]"></div>
          {/* White bottom with text */}
          <div className="w-full h-2/5 bg-white p-3 sm:p-4 md:p-6">
            <h3 className="text-black font-bold text-base sm:text-lg md:text-2xl mb-1 sm:mb-2 md:mb-3">
              INSPIRED
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
              Consectetur nostra dapibus eu eleifend ipsum laculis luctus dis ac
              turpis sociosqu risus integer pellentesque
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-4 left-3 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-12 lg:left-12 text-white max-w-[45%] sm:max-w-[50%] md:max-w-none">
        <p className="text-[0.6rem] leading-tight sm:text-xs sm:leading-normal md:text-sm lg:text-base uppercase tracking-wide">
          {/* HI, DHANIYEL DARVESH
          <br /> */}
          <span className="block text-[0.65rem] sm:text-sm md:text-base lg:text-lg max-w-lg text-[var(--color-primary)] normal-case tracking-normal">
            {[
              "I'm",
              "a",
              "Web",
              "and",
              "App",
              "Developer",
              "crafting",
              "seamless",
              "digital",
              "experiences",
              "with",
              "modern",
              "technologies.",
            ].map((word, index) => (
              <span
                key={index}
                className="cursor-pointer hover:text-white transition-colors duration-300 inline-block mr-1"
              >
                {word}
              </span>
            ))}
          </span>
        </p>
      </div>

      {/* Since Year */}
      <div className="absolute bottom-4 right-3 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 text-white">
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold tracking-wider">
          SINCE 2020
        </p>
      </div>
    </div>
  );
};

export default Hero;
