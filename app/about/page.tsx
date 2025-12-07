"use client";

import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Loader from "../components/Loader";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  useGSAP(() => {
    if (!isLoading) {
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
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.3,
        }
      );
      gsap.fromTo(
        ".fade-right",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.3,
        }
      );
      gsap.fromTo(
        ".fade-up",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.5,
        }
      );
    }
  }, [isLoading]);

  const interests = [
    "CHILL",
    "LO-FI LOVER",
    "COFFEE",
    "LOVE READING BOOK",
    "AMERICAN BURGER",
    "MATCHA",
  ];

  return (
    <>
      {isLoading && <Loader onComplete={handleLoadComplete} />}
      <div className="relative min-h-screen w-full bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Side - Card with Image Placeholder */}
            <div className="fade-left">
              <div className="relative w-full aspect-[3/4] max-w-[500px] mx-auto lg:mx-0 bg-[#d4d4d4] rounded-3xl overflow-hidden shadow-2xl">
                {/* Image placeholder - you can add an actual image here */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>

                {/* Bottom Card Overlay */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-black text-2xl font-bold uppercase tracking-wide">
                      A GLIMPSE INTO MY
                    </h3>
                    <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-black"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-black text-2xl font-bold uppercase tracking-wide">
                    CREATIVE WORLD
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="fade-right space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                Design is not
                <br />
                just what I do
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Every project I take on is a reflection of my passion for creativity,
                a journey where colors, shapes, and ideas come together to tell a story.
                This portfolio represents more than work; it's a collection of moments
                where vision meets execution, bringing dreams to life with bold, vibrant energy.
              </p>

              {/* Interest Tags */}
              <div className="fade-up flex flex-wrap gap-3 pt-4">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 hover:scale-105 ${
                      interest === "MATCHA"
                        ? "bg-[#F28C0F] border-[#F28C0F] text-white"
                        : "bg-transparent border-white text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    {interest}
                  </span>
                ))}
              </div>

              {/* Inspired by Text */}
              <div className="fade-up pt-8">
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider">
                  INSPIRED BY EVERYDAY
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
