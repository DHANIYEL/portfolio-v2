"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import ProjectCard from "../components/ProjectCard";
import { Projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".card");

      cards.forEach((card, i) => {
        const img = card.querySelector(".img-wrapper img");
        const texts = card.querySelectorAll(".card-content");

        // ✅ Set initial state ONLY for this card
        gsap.set(img, {
          clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)",
          autoAlpha: 0,
        });

        gsap.set(texts, {
          y: 20,
          autoAlpha: 0,
        });

        // ✅ Smooth stacking pin
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false,
          scrub: 1, // ✅ smooth pin scrub
        });

        // ✅ Smooth scale effect
        gsap.to(card, {
          scale: 1 - i * 0.03,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          },
        });

        // ✅ Clip + text reveal controlled by scroll (reversible)
        gsap
          .timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "top 20%",
              scrub: 1, // ✅ reversible
            },
          })
          .to(img, {
            clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to(
            texts,
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
            },
            "-=0.5"
          );
      });

      // ✅ important: refresh after setup
      ScrollTrigger.refresh();
    },
    { scope: containerRef }
  );

  return (
    <section className="relative min-h-screen w-full text-black px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* ✅ SAME wrapper like Skills */}
      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl w-full mx-auto"
      >
        {/* ✅ Heading same style */}
        <div className="mb-16 md:mb-20 flex justify-end">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl max-w-2xl text-right font-bold leading-tight">
            My most impactful and innovative works
          </h2>
        </div>

        {/* ✅ Cards */}
        <div className="space-y-20">
          {Projects.map((item) => (
            <ProjectCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
