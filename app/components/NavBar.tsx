"use client";
import React from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const handleButtonMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <header className="fixed top-0 left-0 w-full text-white z-50 bg-black/50 backdrop-blur-sm">
      <nav className="flex w-full items-center justify-between px-8 py-5">
        <ul className="flex gap-8 flex-1 justify-center">
          {navLinks.map(({ label }) => (
            <li
              key={label}
              className="cursor-pointer px-4 py-2 text-sm hover:text-[#be5cff] transition-colors duration-300"
            >
              {label}
            </li>
          ))}
        </ul>
        <div>
          <button
            onMouseMove={handleButtonMouseMove}
            className="contact-button relative overflow-hidden px-6 py-2 border border-white cursor-pointer rounded-full transition-all duration-300"
          >
            <span className="relative z-10">Contact</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;