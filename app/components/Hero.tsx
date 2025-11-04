"use client";

import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black px-8">
      {/* Main Title - CREATIVE WORLD */}
      <div className="relative z-10 mb-20">
        <h1 className="text-white font-bold text-6xl md:text-[12rem] text-center tracking-wider leading-none uppercase">
          CREATIVE
          <br />
          WORLD
        </h1>

        {/* Left Card - LIVING COLOR */}
        <div className="absolute top-0 left-[-200px] w-72 h-96 bg-white rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.8)] transform -rotate-12 overflow-hidden">
          {/* Purple gradient top */}
          <div className="w-full h-3/5 bg-gradient-to-br from-[#a855f7] to-[#be5cff]"></div>
          {/* White bottom with text */}
          <div className="w-full h-2/5 bg-white p-6">
            <h3 className="text-black font-bold text-2xl mb-3">
              LIVING COLOR
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Consectetur nostra dapibus eu eleifend ipsum laculis luctus dis ac
              turpis sociosqu risus integer pellentesque
            </p>
          </div>
        </div>

        {/* Right Card - INSPIRED */}
        <div className="absolute top-[-50px] right-[-150px] w-72 h-96 bg-white rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.8)] transform rotate-12 overflow-hidden">
          {/* Purple gradient top */}
          <div className="w-full h-3/5 bg-gradient-to-br from-[#a855f7] to-[#be5cff]"></div>
          {/* White bottom with text */}
          <div className="w-full h-2/5 bg-white p-6">
            <h3 className="text-black font-bold text-2xl mb-3">INSPIRED</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Consectetur nostra dapibus eu eleifend ipsum laculis luctus dis ac
              turpis sociosqu risus integer pellentesque
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-12 left-12 text-white">
        <p className="text-sm md:text-base uppercase tracking-wide">
          HI, LOREM IPSUM DOLOR AMET
          <br />
          SIET HORICON DOUR DA
        </p>
      </div>

      {/* Since Year */}
      <div className="absolute bottom-12 right-12 text-white">
        <p className="text-2xl md:text-4xl font-bold tracking-wider">
          SINCE 2024
        </p>
      </div>
    </div>
  );
};

export default Hero;
