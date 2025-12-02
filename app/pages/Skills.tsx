import React from "react";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section className="relative min-h-screen w-full bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-24 lg:py-32 flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Main heading */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl max-w-5xl font-bold leading-tight">
            I transform ideas into compellin' visuals that leave a lasting
            impact.
          </h2>
        </div>

        {/* Skills card */}
        <div className="relative rounded-3xl md:rounded-[3rem] bg-primary p-8 sm:p-10 md:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Description text */}
          <div className="relative z-10 mb-12 md:mb-16 max-w-2xl">
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-medium">
              I transform ideas into compelling visuals that leave a lasting
              impact. From bold graphic designs to intricate 3D modeling, my
              work bridges creativity and functionality.
            </p>
          </div>

          {/* Skills tags floating layout */}
          <div className="relative z-10 min-h-[300px] md:min-h-[350px]">
            <div className="relative w-full h-full flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="animate-float"
                  style={{
                    animationDelay: skill.delay,
                    animationDuration: "3s",
                    transform: `rotate(${skill.rotation})`,
                  }}
                >
                  <div
                    className="bg-white text-primary px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base lg:text-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap"
                    style={{
                      transform: `rotate(${skill.rotation})`,
                    }}
                  >
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(var(--rotation));
          }
          50% {
            transform: translateY(-10px) rotate(var(--rotation));
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
