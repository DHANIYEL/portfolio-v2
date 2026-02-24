"use client";

import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverButton from "../components/HoverButton";
import Image from "next/image";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import carhub from "../assets/projects/carhub.png";
import moms from "../assets/projects/moms.png";
import gta from "../assets/projects/gta.png";
import dexpress from "../assets/projects/dexpress.png";
import dcars from "../assets/projects/dcars.png";
import cloud from "../assets/projects/cloud.png";
import nearwala from "../assets/projects/nearwala.png";
import nike from "../assets/projects/nike.png";
import gemini from "../assets/projects/gemini-clone.png";
import institute from "../assets/projects/institute.png";
import adtract from "../assets/projects/adtract.png";
import karyz from "../assets/projects/karyz.png";
import envai from "../assets/projects/envai.png";
import gingerblack from "../assets/projects/gingerblack.png";
import food from "../assets/projects/food.png";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showMore, setShowMore] = useState(false);
  useGSAP(() => {
    // Animate gallery header
    gsap.fromTo(
      ".gallery-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".gallery-header",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    // Animate gallery items
    gsap.fromTo(
      ".gallery-item",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );

    // Animate see more button
    gsap.fromTo(
      ".see-more-btn",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".see-more-btn",
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );

    // Animate contact section
    gsap.fromTo(
      ".contact-title",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );

    // Animate contact form
    gsap.fromTo(
      ".contact-form",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  const mainProjects = [
    { img: adtract, url: "https://adtract.com" },
    { img: moms, url: "https://momsandwives.com" },
    { img: gta, url: "https://venture-ai.com" },
    { img: dexpress, url: "https://dexpress.com" },
    { img: dcars, url: "https://dcars.com" },
    { img: nearwala, url: "https://nearwala.com" },
  ];
  const extraProjects = [
    { img: cloud, url: "https://cloud.com" },
    { img: envai, url: "https://envai.com" },
    { img: gemini, url: "https://gemini.com" },
    { img: institute, url: "https://institute.com" },
    { img: carhub, url: "https://carhub.com" },
    { img: karyz, url: "https://karyz.com" },
    { img: gingerblack, url: "https://gingerblack.com" },
    { img: nike, url: "https://nike.com" },
    { img: food, url: "https://food.com" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div
      className="relative w-full bg-gradient-to-b from-secondary via-primary/30 to-primary text-black"
      id="contact"
    >
      {/* Gallery Section */}
      <div className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="gallery-header text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              A Visual Symphony of Creativity
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Step into my world of design, where imagination meets precision.
              This gallery showcases a collection of projects that blend art,
              innovation, and storytelling, each crafted to leave a lasting
              impression.
            </p>
          </div>
          {/* Gallery Grid */}
          <div className="relative">
            <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
              {/* Always Visible */}
              {mainProjects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-item block"
                >
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden">
                    <Image
                      src={project.img}
                      alt={`Project ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      priority
                    />
                  </div>
                </a>
              ))}

              {/* Conditional (Show More) */}
              {extraProjects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`gallery-item block ${showMore ? "" : "hidden"}`}
                >
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden">
                    <Image
                      src={project.img}
                      alt={`Project Extra ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </a>
              ))}

              {/* Gradient Placeholders (Only When Collapsed) */}
              {/* {!showMore &&
                [1, 2, 3].map((item) => (
                  <div key={item} className="gallery-item">
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden">
                      <div className="absolute inset-00" />
                      <img
                        src="../assets/projects/carhub.png"
                        alt={`Project Extra ${item}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                ))} */}
            </div>
          </div>

          {/* See More Button */}
          <div className="see-more-btn text-center">
            <HoverButton
              onClick={() => setShowMore(!showMore)}
              className="border-white text-white"
            >
              {showMore ? "Show Less" : "See More"}
            </HoverButton>
          </div>
        </div>
      </div>

      {/* Contact Section with Purple Gradient Background */}
      <div className="contact-section relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-24 lg:py-32 text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Large Title with Image Placeholder */}
            <div className="contact-title text-center lg:text-left">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
                I'D LOVE TO
                <br />
                HEAR FROM
                <br />
                YOU!
              </h2>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Let's Stay
                  <br />
                  Connected
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Have an idea, opportunity, or challenge in mind? I’m always
                  open to discussing new projects and creating impactful digital
                  solutions.
                </p>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  placeholder="Type your E-mail here..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder:text-gray-700 focus:outline-none focus:border-white/40 transition-all"
                  required
                />
                {/* <button
                  type="submit"
                  className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-all duration-300"
                >
                  Send
                </button> */}
                <HoverButton className="bg-third text-white">Send</HoverButton>
              </form>

              {/* Social Icons */}
              <div className="flex gap-6 justify-start text-white">
                <a
                  href="https://www.instagram.com/dhaniiiyll/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#c95396] transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram size={24} />
                </a>

                <a
                  href="https://github.com/DHANIYEL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="hover:text-third transition-all duration-300 hover:scale-110"
                >
                  <FaGithub size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/dhaniyel-darvesh-256987280/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-[#0aa2f4] transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
