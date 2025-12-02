"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor-circle");

    let mouseX = 0, mouseY = 0;        // actual mouse position
    let cursorX = 0, cursorY = 0;      // rendered cursor position
    const speed = 0.12;                // lower = slower + smoother

    // Track mouse instantly
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement;

      // Hover scale logic
      if (
        target.tagName === "H1" ||
        target.tagName === "A" ||
        target.tagName === "P" ||
        target.tagName === "SPAN" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("cursor-grow")
      ) {
        cursor!.style.width = "45px";
        cursor!.style.height = "45px";
        cursor!.style.borderWidth = "3px";
      } else {
        cursor!.style.width = "22px";
        cursor!.style.height = "22px";
        cursor!.style.borderWidth = "2px";
      }
    };

    // Smooth animation loop
    const follow = () => {
      if (!cursor) return;

      // LERP movement
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";

      requestAnimationFrame(follow);
    };

    window.addEventListener("mousemove", handleMouseMove);
    follow(); // start animation loop

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
