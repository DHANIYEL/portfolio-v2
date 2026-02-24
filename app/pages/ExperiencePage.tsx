"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {ExperienceData} from '../constants/index'

gsap.registerPlugin(ScrollTrigger);

const ExperiencePage = () => {
  useGSAP(() => {
    // Animate header
    gsap.fromTo(
      ".exp-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      }
    );

    // Animate card
    gsap.fromTo(
      ".exp-card",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".exp-card",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Animate intro text
    gsap.fromTo(
      ".exp-intro",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".exp-intro",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Animate timeline items
    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  const timelineData = ExperienceData

  return (
    <div className="relative w-full bg-secondary text-black px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="exp-header mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-4">
            Every masterpiece
            <br />
            begins with a single step
          </h1>
        </div>

        {/* Large Purple Card */}
        {/* <div className="exp-card mb-16 md:mb-20 lg:mb-24">
          <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-secondary to-primary rounded-3xl shadow-2xl"></div>
        </div> */}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side - Intro Text */}
          <div className="exp-intro">
            <p className="text-white text-base sm:text-lg leading-relaxed">
              Every masterpiece begins with a single step. From my early days of
              exploring creativity to mastering the art of design, this timeline
              reflects the evolution of my passion, skills, and vision.
            </p>
          </div>

          {/* Right Side - Timeline */}
          <div className="timeline-container relative">
            {/* Vertical Line */}
            <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-primary hidden sm:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-16">
              {timelineData.map((item, index) => (
                <div key={index} className="timeline-item relative pl-0 sm:pl-8">
                  {/* Dot */}
                  <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-primary hidden sm:block"></div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs sm:text-sm rounded-full font-medium">
                      {item.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;