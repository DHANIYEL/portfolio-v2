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
    title: "CREATIVE FLOW",
    description:
      "Eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer pellentesque",
    image: "/assets/projects/gta.png",
  },
  {
    id: 4,
    title: "CREATIVE FLOW",
    description:
      "Eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer pellentesque",
    image: "/assets/projects/nearwala.png",
  },
];

const Hero = () => {
  const [activeCard, setActiveCard] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (cardRef.current) {
        gsap.to(cardRef.current, {
          x: e.clientX - 160, // Offset to center the card
          y: e.clientY - 200,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    };

    // Change card every 2 seconds when mouse moves
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % projects.length);
    }, 2000);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Animate card change
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          scale: 0.8,
          opacity: 0,
          rotation: -10,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 15,
          duration: 0.5,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [activeCard]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Floating Project Card - Follows cursor */}
      <div
        ref={cardRef}
        className="fixed w-80 rounded-lg shadow-2xl overflow-hidden pointer-events-none z-10"
        style={{
          left: 0,
          top: 0,
        }}
      >
        {/* Image Box */}
        <div className="relative w-full h-50 bg-gray-800">
          <Image
            src={projects[activeCard].image}
            alt={projects[activeCard].title}
            fill
            className="object-cover"
          />
        </div>

        {/* Description Box */}
        <div className="w-full bg-gray-200 p-5">
          <h3 className="text-black font-bold text-lg mb-2">
            {projects[activeCard].title}
          </h3>
          <p className="text-gray-700 text-xs leading-relaxed line-clamp-3">
            {projects[activeCard].description}
          </p>
        </div>
      </div>

      {/* Main Title */}
      <div className="relative z-20 mix-blend-difference">
        <h1 className="text-white font-bold text-7xl md:text-9xl text-center tracking-wider leading-tight">
          DHANIEEL
          <br />
          DAYAN
        </h1>
      </div>
    </div>
  );
};

export default Hero;
