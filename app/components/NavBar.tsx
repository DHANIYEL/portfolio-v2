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
      <header className="fixed top-0 left-0 w-full text-white z-50 bg-black/50 backdrop-blur-sm">
        <nav className="flex w-full items-center justify-between px-8 py-5">
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
              <HoverButton>Contact</HoverButton>
            </div>

            {/* Mobile Menu Button - Right Side */}
            <button
              onClick={() => setIsActive(!isActive)}
              className="md:hidden p-2 text-white"
            >
              <div className="flex flex-col gap-1.5 w-6">
                <span
                  className={`block h-0.5 bg-white transition-transform ${
                    isActive ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-white transition-opacity ${
                    isActive ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-white transition-transform ${
                    isActive ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              onClick={() => setIsActive(false)}
            />

            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="fixed right-0 top-0 h-screen bg-[#1a1a1a] text-white z-[70] shadow-2xl"
              style={{ width: "400px" }}
            >
              {/* Top section with Close button and Contact */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
                <HoverButton>Contact</HoverButton>

                <button
                  onClick={() => setIsActive(false)}
                  className="text-white hover:text-[#be5cff] transition-colors cursor-pointer"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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

              <div className="flex flex-col h-full px-12 pt-12 pb-12">
                <div className="flex flex-col gap-3">
                  <div className="text-xs uppercase text-gray-400 mb-6 border-b border-gray-700 pb-3">
                    Navigation
                  </div>
                  {navLinks.map((link, index) => (
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
                        className="text-5xl font-light hover:text-[#be5cff] transition-colors duration-300 block py-2"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto">
                  <div className="flex gap-6 text-sm">
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
