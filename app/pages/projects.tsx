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

useGSAP(() => {
  const cards = gsap.utils.toArray<HTMLElement>(".card");

  const topOffset = 200; // ✅ space from top (navbar safe)

  cards.forEach((card, i) => {
    const img = card.querySelector(".img-wrapper img");
    const texts = card.querySelectorAll(".card-content");

    gsap.set(img, {
      clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)",
      autoAlpha: 0,
    });

    gsap.set(texts, {
      y: 20,
      autoAlpha: 0,
    });

    // ✅ PIN with top spacing
    ScrollTrigger.create({
      trigger: card,
      start: `top+=${topOffset} top`,
      end: `+=${window.innerHeight}`,
      pin: true,
      pinSpacing: false,
      scrub: 1,
      anticipatePin: 1,
    });

    // ✅ Scale stacking smooth
    gsap.to(card, {
      scale: 1 - i * 0.03,
      ease: "none",
      scrollTrigger: {
        trigger: card,
        start: `top+=${topOffset} top`,
        end: `+=${window.innerHeight}`,
        scrub: 1,
      },
    });

    // ✅ Reveal reversible
    gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: `top+=${topOffset + 150} top`,
        end: `top+=${topOffset} top`,
        scrub: 1,
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

  ScrollTrigger.refresh();
}, { scope: containerRef });


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
