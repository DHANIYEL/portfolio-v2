"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Curve() {
  const initialPath = `M100 0 L100 ${
    typeof window !== "undefined" ? window.innerHeight : 800
  } Q-100 ${
    typeof window !== "undefined" ? window.innerHeight / 2 : 400
  } 100 0`;
  const targetPath = `M100 0 L100 ${
    typeof window !== "undefined" ? window.innerHeight : 800
  } Q100 ${typeof window !== "undefined" ? window.innerHeight / 2 : 400} 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as any },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any },
    },
  };

  return (
    <svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-[#1a1a1a] stroke-none">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
