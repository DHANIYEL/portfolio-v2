"use client";
import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";
import HoverButton from "./HoverButton";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Curve from "./Curve";
import Link from "next/link";

const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: {
    x: "0",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any },
  },
};

const slide = {
  initial: { x: 80 },
  enter: (i: number) => ({
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as any,
      delay: 0.05 * i,
    },
  }),
  exit: (i: number) => ({
    x: 80,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as any,
      delay: 0.05 * i,
    },
  }),
};

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full text-white md:backdrop-blur-sm"
        style={{ zIndex: 50 }}
      >
        <nav className="flex w-full items-center justify-between px-8 py-5 md:bg-black/50">
          {/* Empty spacer for mobile to push hamburger to right */}
          <div className="md:hidden"></div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 flex-1 justify-center">
            {navLinks
              .filter(({ label }) => label !== "Contact")
              .map(({ label, href }) => (
                <li
                  key={label}
                  className="cursor-pointer px-4 py-2 text-sm hover:text-[#be5cff] transition-colors duration-300"
                >
                  <Link href={href}>{label}</Link>
                </li>
              ))}
          </ul>

          {/* Contact Button - Desktop Right Side / Mobile Hamburger */}
          <div className="flex items-center gap-4">
            {/* Contact Button - Desktop Only */}
            <div className="hidden md:block">
              <HoverButton className="effect-button">TEs</HoverButton>
            </div>

            {/* Mobile Menu Button - Right Side - Stays on top */}
            <div className="md:hidden relative" style={{ zIndex: 999 }}>
              <div
                className="hamburger-bg absolute inset-0 rounded-full bg-[#be5cff] transition-transform duration-200 ease-out"
                style={{ willChange: "transform" }}
              ></div>
              <button
                onClick={() => setIsActive(!isActive)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const mouseX = e.clientX - rect.left;
                  const mouseY = e.clientY - rect.top;

                  // Calculate magnetic pull with increased distance
                  const deltaX = (mouseX - centerX) * 0.5;
                  const deltaY = (mouseY - centerY) * 0.5;

                  const icon = e.currentTarget.querySelector(
                    ".hamburger-icon"
                  ) as HTMLElement;
                  const bg = e.currentTarget.parentElement?.querySelector(
                    ".hamburger-bg"
                  ) as HTMLElement;

                  if (icon) {
                    icon.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
                  }
                  if (bg) {
                    bg.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
                  }
                }}
                onMouseLeave={(e) => {
                  const icon = e.currentTarget.querySelector(
                    ".hamburger-icon"
                  ) as HTMLElement;
                  const bg = e.currentTarget.parentElement?.querySelector(
                    ".hamburger-bg"
                  ) as HTMLElement;

                  if (icon) {
                    icon.style.transform = "translate(0px, 0px)";
                  }
                  if (bg) {
                    bg.style.transform = "translate(0px, 0px)";
                  }
                }}
                className="relative p-5 text-white cursor-pointer group overflow-visible bg-transparent"
              >
                <div className="hamburger-icon flex flex-col gap-1.5 w-6 transition-transform duration-200 ease-out">
                  <span
                    className={`block h-0.5 bg-white transition-all duration-300 ${
                      isActive ? "rotate-45 translate-y-2" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 bg-white transition-all duration-300 ${
                      isActive ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 bg-white transition-all duration-300 ${
                      isActive ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Sliding Menu with Curve */}
      <AnimatePresence mode="wait">
        {isActive && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[30]"
              onClick={() => setIsActive(false)}
            />

            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="fixed right-0 top-0 h-screen bg-[#1a1a1a] text-white z-[40] shadow-2xl w-full sm:w-[400px] max-w-[400px]"
            >
              {/* Top section with Close button and Contact */}
              {/* <div className="flex items-center justify-end px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-b border-gray-800">
                <div className="relative">
                  <div
                    className="close-bg absolute inset-0 rounded-full bg-[#be5cff] transition-transform duration-200 ease-out"
                    style={{ willChange: "transform" }}
                  ></div>
                  <button
                    onClick={() => setIsActive(false)}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const mouseX = e.clientX - rect.left;
                      const mouseY = e.clientY - rect.top;

                      // Calculate magnetic pull with increased distance
                      const deltaX = (mouseX - centerX) * 0.5;
                      const deltaY = (mouseY - centerY) * 0.5;

                      const icon = e.currentTarget.querySelector(
                        ".close-icon"
                      ) as HTMLElement;
                      const bg = e.currentTarget.parentElement?.querySelector(
                        ".close-bg"
                      ) as HTMLElement;

                      if (icon) {
                        icon.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
                      }
                      if (bg) {
                        bg.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      const icon = e.currentTarget.querySelector(
                        ".close-icon"
                      ) as HTMLElement;
                      const bg = e.currentTarget.parentElement?.querySelector(
                        ".close-bg"
                      ) as HTMLElement;

                      if (icon) {
                        icon.style.transform = "translate(0px, 0px)";
                      }
                      if (bg) {
                        bg.style.transform = "translate(0px, 0px)";
                      }
                    }}
                    className="relative text-white cursor-pointer p-3 overflow-visible bg-transparent"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="close-icon sm:w-8 sm:h-8 transition-transform duration-200 ease-out"
                    >
                      <path
                        d="M24 8L8 24M8 8L24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div> */}

              <div className="flex flex-col h-full px-6 sm:px-8 md:px-12 pt-24 pb-8 sm:pb-12 md:pb-16">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <div className="text-[0.65rem] sm:text-xs uppercase text-gray-400 mb-4 sm:mb-6 border-b border-gray-700 pb-2 sm:pb-3">
                    Navigation
                  </div>
                  {navLinks
                    // .filter(({ label }) => label !== "Contact")
                    .map((link, index) => (
                      <motion.div
                        key={link.label}
                        custom={index}
                        variants={slide}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                      >
                        <Link
                          href={link.href}
                          className="text-3xl sm:text-4xl md:text-5xl font-light hover:text-[#be5cff] transition-colors duration-300 block py-1 sm:py-2"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-auto">
                  <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
                    <a
                      href="#"
                      className="hover:text-[#be5cff] transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#be5cff] transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="hover:text-[#be5cff] transition-colors"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>

              {/* Curve SVG */}
              <Curve />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
