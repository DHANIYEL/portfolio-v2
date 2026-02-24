"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import AboutImg from "../assets/images/about-img4.png";
import AboutImgBg from "../assets/images/about-no-bg.png";

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".about-fade-left",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-fade-left",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
    gsap.fromTo(
      ".about-fade-right",
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-fade-right",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
    gsap.fromTo(
      ".about-fade-up",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-fade-up",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  const interests = [
    "CLEAN CODE",
    "SCALABLE SYSTEMS",
    "API ARCHITECTURE",
    "UI ENGINEERING",
    "PERFOMANCE FIRST",
    "PROBLEM SOLVER",
  ];

  return (
    <div
      className="relative w-full text-black px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-24 lg:py-32"
      id="about"
    >
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div> */}
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side - Card with Image Placeholder */}
          <div className="about-fade-left">
            <div className="relative w-full aspect-[3/4] max-w-[500px] mx-auto lg:mx-0">
              {/* Background Card */}
              <div className="hidden-class absolute inset-0 bg-primary rounded-3xl shadow-2xl"></div>

              {/* Floating Image */}
              <div className="absolute -top-20 sm:-top-24 md:-top-40 left-1/2 -translate-x-1/2 w-[105%] aspect-[3/4]">
                {" "}
                <Image
                  src={AboutImgBg}
                  alt="Creative World"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Bottom Card Content */}
              <div
                className="
                hidden-class
    absolute 
    bottom-4 sm:bottom-6 md:bottom-8
    left-4 sm:left-6 md:left-8 
    right-4 sm:right-6 md:right-8 
    bg-black/60 
    backdrop-blur-xl 
    rounded-xl sm:rounded-2xl 
    p-4 sm:p-5 md:p-6 
    shadow-xl
  "
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 ">
                  <h3 className="text-primary text-sm sm:text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wide">
                    A GLIMPSE INTO MY
                  </h3>

                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-primary flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-primary text-sm sm:text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wide">
                  CREATIVE WORLD
                </h3>
              </div>
            </div>
          </div>
          {/* Right Side - Content */}
          <div className="about-fade-right space-y-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-2xl">
              Engineering ideas into
              <br />
              scalable digital experiences
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              I specialize in building modern web and mobile applications using
              scalable architectures and clean development practices. From
              backend APIs to interactive frontends, I focus on performance,
              maintainability, and real-world usability. Each project reflects a
              commitment to solving problems through thoughtful engineering.
            </p>

            {/* Interest Tags */}
            <div className="about-fade-up flex flex-wrap gap-3 pt-4">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 hover:scale-105 ${
                    interest === "PROBLEM SOLVER"
                      ? "bg-primary border-primary text-white"
                      : "bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* Inspired by Text */}
            <div className="fade-up pt-8">
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider">
                BUILT WITH PURPOSE
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
