import React from "react";

const ProjectCard = ({ data, index }) => {
  return (
    <section className="">
      {/* sticky wrapper */}
      <div className="relative min-h-[100vh] w-full overflow-y-auto">
        <div
          className="w-full max-w-[1200px] mx-auto min-h-[90vh] rounded-3xl flex flex-col p-12 shadow-2xl sticky top-8 overflow-hidden"
          style={{
            background: data.bg,
            transform: `translateY(${index * 20}px)`,
          }}
        >
          {/* Header with tags */}
          <div className="flex justify-between items-start mb-12">
            <div className="border-2 border-white/40 rounded-full px-6 py-2">
              <span className="text-white text-sm font-medium tracking-wide">
                {data.tag}
              </span>
            </div>
            <div className="border-2 border-white/40 rounded-full px-6 py-2">
              <span className="text-white text-sm font-medium tracking-wide">
                {data.level}
              </span>
            </div>
          </div>

          {/* Main title */}
          <div className="mb-auto">
            <h1 className="text-[180px] font-black text-white leading-none tracking-tight">
              {data.title}
            </h1>
          </div>

          {/* Content grid - Two columns */}
          <div className="grid grid-cols-2 gap-8 items-end">
            {/* Left column - Image placeholder */}
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl aspect-[4/3] shadow-xl"></div>

            {/* Right column - Subtitle and description */}
            <div className="space-y-6">
              <h2 className="text-5xl font-light text-white leading-tight">
                {data.subtitle}
              </h2>
              <p className="text-white/90 text-lg leading-relaxed font-light">
                {data.description}
              </p>
            </div>
          </div>

          {/* Bottom section - CTA and image */}
          <div className="grid grid-cols-2 gap-8 mt-12 items-start">
            {/* Left column - CTA */}
            <div>
              <p className="text-white/80 text-base leading-relaxed mb-6 font-light">
                Explore a variety of projects across branding, 3D design, and
                interactive experiences, each crafted with precision and
                passion.
              </p>
              <button className="flex items-center gap-3 text-white text-lg font-medium hover:gap-5 transition-all duration-300 group">
                See More
                <svg
                  className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            {/* Right column - Image placeholder */}
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl aspect-[16/9] shadow-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;