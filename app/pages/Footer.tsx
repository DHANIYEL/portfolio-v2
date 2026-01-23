"use client";

import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [email, setEmail] = useState("");

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
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
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
          toggleActions: "play reverse play reverse",
        },
      }
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
          toggleActions: "play reverse play reverse",
        },
      }
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
          toggleActions: "play reverse play reverse",
        },
      }
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
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-secondary via-primary/30 to-primary text-black">
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
            <div className="gallery-grid grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
            {/* Item 1 - Tall */}
            <div className="gallery-item lg:row-span-2">
                <div className="w-full h-full min-h-[300px] lg:min-h-[500px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl"></div>
            </div>

            {/* Item 2 - Tall Center */}
            <div className="gallery-item lg:row-span-2">
                <div className="w-full h-full min-h-[300px] lg:min-h-[500px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl"></div>
            </div>

            {/* Item 3 - Tall */}
            <div className="gallery-item lg:row-span-2">
                <div className="w-full h-full min-h-[300px] lg:min-h-[500px] bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl"></div>
            </div>

            {/* Item 4 - Short with gradient */}
            <div className="gallery-item lg:row-span-1">
                <div className="w-full h-full min-h-[200px] lg:min-h-[240px] bg-gradient-to-b from-gray-300 to-primary/300 rounded-3xl"></div>
            </div>

            {/* Item 5 - Short with gradient */}
            <div className="gallery-item lg:row-span-1">
                <div className="w-full h-full min-h-[200px] lg:min-h-[240px] bg-gradient-to-b from-gray-300 to-primary/300 rounded-3xl"></div>
            </div>

            {/* Item 6 - Short with gradient */}
            <div className="gallery-item lg:row-span-1">
                <div className="w-full h-full min-h-[200px] lg:min-h-[240px] bg-gradient-to-b from-gray-300 to-primary/300 rounded-3xl"></div>
            </div>
            </div>


          {/* See More Button */}
          <div className="see-more-btn text-center">
            <button className="px-8 py-3 border-2 border-white rounded-full text-sm sm:text-base font-medium hover:bg-white hover:text-black transition-all duration-300">
              SEE MORE
            </button>
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
                  Consectetur nostris dapibus eu eleifend lacinia metus sodales
                  class ac inroin porttitor amet integer pellentesque
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
                <button
                  type="submit"
                  className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-all duration-300"
                >
                  Send
                </button>
              </form>

              {/* Social Icons */}
              <div className="flex gap-6 justify-start">
                <a
                  href="#"
                  className="text-white hover:text-third/50 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-third/50 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-third/50 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
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