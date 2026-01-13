"use client";

import React from "react";
import NavBar from "./pages/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <NavBar />
      <Hero />
      <About />

      {/* 🔥 Shared gradient wrapper for Skills + Projects */}
      <div className="relative">
        {/* Background gradient layer */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="
              absolute -top-1/2 left-1/2 -translate-x-1/2
              w-[40%] h-[40%]
              bg-gradient-to-b
              from-primary/30 via-primary/20 to-transparent
              blur-3xl
            "
          />
        </div>

        {/* Content */}
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
