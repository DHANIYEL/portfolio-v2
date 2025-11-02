"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "LIVING COLOR",
    description:
      "Consectetur nostrud adipibus eu eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer",
    image: "/assets/projects/carhub.png",
  },
  {
    id: 2,
    title: "INSPIRED",
    description:
      "Conetur nostrud adipibus eu eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer",
    image: "/assets/projects/moms.png",
  },
  {
    id: 3,
    title: "CREATIVE FLOW",
    description:
      "Eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer pellentesque",
    image: "/assets/projects/dcars.png",
  },
  {
    id: 4,
    title: "URBAN VIBES",
    description:
      "Eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer pellentesque",
    image: "/assets/projects/gta.png",
  },
  {
    id: 5,
    title: "NEARWALA",
    description:
      "Eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer pellentesque",
    image: "/assets/projects/nearwala.png",
  },
];

const Hero = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMouseMoved, setHasMouseMoved] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Show card on first mouse move
      if (!hasMouseMoved) {
        setHasMouseMoved(true);
        setIsVisible(true);

        // Start interval to change cards after first mouse move
        intervalRef.current = setInterval(() => {
          setActiveCard((prev) => (prev + 1) % projects.length);
        }, 2000);
      }

      if (cardRef.current && isVisible) {
        gsap.to(cardRef.current, {
          x: e.clientX - 160,
          y: e.clientY - 200,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [hasMouseMoved, isVisible]);

  useEffect(() => {
    // Fade out and fade in animation when card changes
    if (imageRef.current && textRef.current && isVisible) {
      const tl = gsap.timeline();

      tl.to([imageRef.current, textRef.current], {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      })
        .set(imageRef.current, {
          // This ensures the image source updates while invisible
        })
        .to([imageRef.current, textRef.current], {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
    }
  }, [activeCard, isVisible]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Floating Project Card - Follows cursor */}
      {isVisible && (
        <div
          ref={cardRef}
          className="fixed w-80 rounded-lg shadow-2xl overflow-hidden pointer-events-none z-10"
          style={{
            left: 0,
            top: 0,
          }}
        >
          {/* Image Box */}
          <div
            ref={imageRef}
            className="relative w-full h-64 bg-gray-800 transition-opacity"
          >
            <Image
              src={projects[activeCard].image}
              alt={projects[activeCard].title}
              fill
              className="object-cover"
            />
          </div>

          {/* Description Box */}
          <div
            ref={textRef}
            className="w-full bg-gray-200 p-5 transition-opacity"
          >
            <h3 className="text-black font-bold text-lg mb-2">
              {projects[activeCard].title}
            </h3>
            <p className="text-gray-700 text-xs leading-relaxed line-clamp-3">
              {projects[activeCard].description}
            </p>
          </div>
        </div>
      )}

      {/* Main Title */}
      <div className="relative z-20 mix-blend-difference">
        <h1 className="text-white font-bold text-7xl md:text-9xl text-center tracking-wider leading-tight">
          DHANIYEL
          <br />
          DARVESH
        </h1>
      </div>
    </div>
  );
};

export default Hero;