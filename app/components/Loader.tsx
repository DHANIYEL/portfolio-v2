"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Generate 4 random stops under 100
    const stops = [
      Math.floor(Math.random() * 25) + 10,  // First stop: 10-35
      Math.floor(Math.random() * 25) + 35,  // Second stop: 35-60
      Math.floor(Math.random() * 25) + 60,  // Third stop: 60-85
      Math.floor(Math.random() * 10) + 85,  // Fourth stop: 85-95
    ].sort((a, b) => a - b); // Ensure they're in order

    // Total duration: 5 seconds = 5000ms
    // 4 stops + 1 final = 5 segments
    // Each segment: animation (800ms) + pause (200ms) = 1000ms
    // Total: 5 * 1000ms = 5000ms (5 seconds)

    let currentStop = 0;

    const animateToNextStop = () => {
      if (currentStop < stops.length) {
        // Animate to the next stop
        setProgress(stops[currentStop]);

        // Wait: 800ms (animation) + 200ms (pause) = 1000ms per stop
        setTimeout(() => {
          currentStop++;
          animateToNextStop();
        }, 1000);
      } else {
        // After all stops, go to 100%
        setProgress(100);
        // Wait for animation to reach 100% (800ms) + additional 300ms
        setTimeout(() => {
          setIsComplete(true);
          // Trigger onComplete callback after 300ms delay at 100%
          if (onComplete) {
            onComplete();
          }
        }, 1100); // 800ms animation + 300ms extra delay
      }
    };

    // Start the animation
    animateToNextStop();
  }, [onComplete]);

  if (isComplete) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
      >
        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-gray-800 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#a855f7] to-[#be5cff]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/* Progress Percentage */}
        <motion.p
          className="mt-10 text-white text-lg font-medium absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {Math.round(progress)}%
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
