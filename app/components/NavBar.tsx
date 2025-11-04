"use client";
import React from "react";
import { navLinks } from "../constants";
import HoverButton from "./HoverButton";

const NavBar = () => {
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
          <HoverButton className="effect-button">Contact</HoverButton>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
