"use client";
import React from "react";

interface HoverButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const HoverButton: React.FC<HoverButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleButtonMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (onClick) onClick();
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleButtonMouseMove}
      onClick={handleClick}
      className={`hover-button relative overflow-hidden px-6 py-2 border border-primary text-primary/70 hover:text-white cursor-pointer rounded-full transition-all duration-300 ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default HoverButton;
