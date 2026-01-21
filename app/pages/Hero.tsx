"use client";

import React, { useState, useEffect } from "react";
// import Loader from "../components/Loader";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  // const handleLoadComplete = () => {
  //   setIsLoading(false);
  // };

  useGSAP(() => {
    if (true) {
      gsap.fromTo(
        ".fade-in",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        ".fade-left",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        ".fade-right",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
        }
      );
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-scale", // your class selector
        start: "top 80%", // animation starts when top of element hits 80% of viewport
        end: "bottom 20%", // ends near bottom
        scrub: true, // syncs with scroll
        markers: false, // toggle true for debugging
      },
    });

    // tl.fromTo(
    //   ".text-scale",
    //   { scale: 1, opacity: 1 },
    //   { scale: 0.6, opacity: 0.6, ease: "power2.out" }
    // );
  }, [isLoading]);
  return (
    <>
      {/* {isLoading && <Loader onComplete={handleLoadComplete} />} */}
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-visible px-4 md:px-8 py-20">
        {/* Main Title - CREATIVE WORLD */}
        <div className="relative z-10 mb-10 md:mb-20">
          <h1 className="text-primary font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] text-center tracking-wider leading-none uppercase fade-in text-scale">
            DHANIYEL
            {/* Create */}
            <br />
            DARVESH
            {/* Designs */}
          </h1>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-4 left-3 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-12 lg:left-12 text-black max-w-[45%] sm:max-w-[50%] md:max-w-none">
          <p className="text-[0.6rem] leading-tight sm:text-xs sm:leading-normal md:text-sm lg:text-base uppercase tracking-wide">
            {/* HI, DHANIYEL DARVESH
          <br /> */}
            <span className="block text-[0.65rem] sm:text-sm md:text-base lg:text-lg max-w-lg text-[var(--color-primary)] normal-case tracking-normal fade-right">
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
                  className="cursor-pointer hover:text-black transition-colors duration-300 inline-block mr-1"
                >
                  {word}
                </span>
              ))}
            </span>
          </p>
        </div>

        {/* Since Year */}
        <div className="absolute bottom-4 right-3 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 text-black">
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold tracking-wider fade-left">
            SINCE 2020
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
