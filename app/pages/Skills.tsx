import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";
import Matter from "matter-js";

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    const Composite = Matter.Composite;
    const MouseConstraint = Matter.MouseConstraint;
    const Mouse = Matter.Mouse;

    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 1;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Create boundaries
    const ground = Bodies.rectangle(width / 2, height + 20, width, 40, {
      isStatic: true,
    });

    const leftWall = Bodies.rectangle(-20, height / 2, 40, height, {
      isStatic: true,
    });

    const rightWall = Bodies.rectangle(width + 20, height / 2, 40, height, {
      isStatic: true,
    });

    Composite.add(world, [ground, leftWall, rightWall]);

    // Physics bodies for each tag
    const skillElements = Array.from(
      containerRef.current.querySelectorAll(".skill-tag")
    );

    const bodies = skillElements.map((el, i) => {
      const w = el.clientWidth;
      const h = el.clientHeight;

      const body = Bodies.rectangle(100 + i * 40, 60 + i * 30, w, h, {
        restitution: 0.4,
        friction: 0.2,
        chamfer: { radius: 20 },
      });

      (body as any).el = el;
      Composite.add(world, body);
      return body;
    });

    // Attach a draggable mouse constraint
    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Composite.add(world, mouseConstraint);

    // Sync DOM with physics
    Matter.Events.on(engine, "afterUpdate", () => {
      bodies.forEach((body) => {
        const el = (body as any).el;
        el.style.transform = `translate(${
          body.position.x - el.clientWidth / 2
        }px, ${body.position.y - el.clientHeight / 2}px) rotate(${
          body.angle
        }rad)`;
      });
    });

    // Correct runner (no deprecated warning)
    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Matter.Engine.clear(engine);
    };
  }, []);

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
        <div className="relative rounded-3xl md:rounded-[3rem] bg-primary p-8 sm:p-10 md:p-12 lg:p-16 !pb-0 shadow-2xl overflow-hidden">
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
          {/* Skills tags floating layout */}
          <div className="relative z-10 min-h-[300px] md:min-h-[350px]">
            <div
              ref={containerRef}
              className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-xl"
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-tag absolute px-6 py-3 bg-white text-primary rounded-full font-bold shadow-lg select-none"
                  style={{ willChange: "transform" }}
                >
                  {skill.name}
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
