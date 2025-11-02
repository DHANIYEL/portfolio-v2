"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "LIVING COLOR",
    description:
      "Consectetur nostrud adipibus eu eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer",
    image: "/assets/projects/carhub.png",
    slug: "living-color",
  },
  {
    id: 2,
    title: "INSPIRED",
    description:
      "Conetur nostrud adipibus eu eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer",
    image: "/assets/projects/moms.png",
    slug: "inspired",
  },
  {
    id: 3,
    title: "CREATIVE FLOW",
    description:
      "Eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer pellentesque",
    image: "/assets/projects/dcars.png",
    slug: "creative-flow",
  },
  {
    id: 4,
    title: "URBAN VIBES",
    description:
      "Eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer pellentesque",
    image: "/assets/projects/gta.png",
    slug: "urban-vibes",
  },
  {
    id: 5,
    title: "NEARWALA",
    description:
      "Eleifend ipsum lacinia luctus dis ac turpis sociosqu risus integer pellentesque",
    image: "/assets/projects/nearwala.png",
    slug: "nearwala",
  },
];

const Hero = () => {
  const router = useRouter();
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMouseMoved, setHasMouseMoved] = useState(false);
  const [hideCard, setHideCard] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Hide card when mouse is in navbar area (top 100px)
      if (e.clientY < 100) {
        setHideCard(true);
      } else {
        setHideCard(false);
      }

      // Show card on first mouse move
      if (!hasMouseMoved) {
        setHasMouseMoved(true);
        setIsVisible(true);

        // Start interval to change cards after first mouse move
        intervalRef.current = setInterval(() => {
          setActiveCard((prev) => (prev + 1) % projects.length);
        }, 2000);
      }

      if (cardRef.current && isVisible && !hideCard && !hasClicked) {
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
  }, [hasMouseMoved, isVisible, hideCard, hasClicked]);

  useEffect(() => {
    // Fade out and fade in animation when card changes
    if (imageRef.current && textRef.current && isVisible && !hasClicked) {
      const tl = gsap.timeline();

      tl.to([imageRef.current, textRef.current], {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      })
        .set(imageRef.current, {})
        .to([imageRef.current, textRef.current], {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
    }
  }, [activeCard, isVisible, hasClicked]);

  const handleCardClick = () => {
    if (hasClicked) return;
    
    setHasClicked(true);

    // Stop the interval when clicked
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Animate card expanding to fullscreen
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        x: window.innerWidth / 2 - 160,
        y: window.innerHeight / 2 - 200,
        scale: 3,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          // Navigate to project page after animation
          router.push(`/projects/${projects[activeCard].slug}`);
        },
      });

      // Fade out everything except the card
      gsap.to("h1", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Floating Project Card - Follows cursor */}
      {isVisible && !hideCard && (
        <div
          ref={cardRef}
          onClick={handleCardClick}
          className="fixed w-80 rounded-lg shadow-2xl overflow-hidden z-10 cursor-pointer transition-transform hover:scale-105"
          style={{
            left: 0,
            top: 0,
            pointerEvents: hasClicked ? "none" : "auto",
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
        <h1 className="text-white font-bold text-5xl md:text-9xl text-center tracking-wider leading-tight">
          DHANIYEL
          <br />
          DARVESH
        </h1>
      </div>
    </div>
  );
};

export default Hero;