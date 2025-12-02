"use client";

import React from "react";
import NavBar from "./pages/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./pages/Skills";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
