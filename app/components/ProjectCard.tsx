import React from "react";

const ProjectCard = ({ data, index }) => {
  return (
    <section className="w-full">
      {/* ✅ give scroll space for sticky */}
      <div className="relative min-h-[180vh] w-full">
        <div
          className="
            sticky top-4 sm:top-6 md:top-8
            w-full max-w-[1200px] mx-auto
            min-h-[85vh] sm:min-h-[90vh]
            rounded-2xl sm:rounded-3xl
            flex flex-col
            p-5 sm:p-8 md:p-12
            shadow-2xl
            overflow-hidden
          "
          style={{
            background: data.bg,
            transform: `translateY(${index * 14}px)`,
          }}
        >
          {/* Header with tags */}
          <div className="flex justify-between items-start gap-3 mb-6 sm:mb-10 md:mb-12">
            <div className="border border-white/40 rounded-full px-3 py-1.5 sm:px-5 sm:py-2">
              <span className="text-white text-[11px] sm:text-sm font-medium tracking-wide">
                {data.tag}
              </span>
            </div>

            <div className="border border-white/40 rounded-full px-3 py-1.5 sm:px-5 sm:py-2">
              <span className="text-white text-[11px] sm:text-sm font-medium tracking-wide">
                {data.level}
              </span>
            </div>
          </div>

          {/* Main title */}
          <div className="mb-6 sm:mb-auto">
            <h1
              className="
                font-black text-white leading-none tracking-tight
                text-[56px] xs:text-[64px]
                sm:text-[90px]
                md:text-[120px]
                lg:text-[160px]
              "
            >
              {data.title}
            </h1>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 items-end">
            {/* Left - Image placeholder */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl aspect-[4/3] shadow-xl" />

            {/* Right - Subtitle + desc */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
                {data.subtitle}
              </h2>

              <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                {data.description}
              </p>
            </div>
          </div>

          {/* Bottom section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mt-6 sm:mt-10 md:mt-12 items-start">
            {/* Left - CTA */}
            <div>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-light">
                Explore a variety of projects across branding, 3D design, and
                interactive experiences, each crafted with precision and
                passion.
              </p>

              <button className="flex items-center gap-2 sm:gap-3 text-white text-base sm:text-lg font-medium hover:gap-4 sm:hover:gap-5 transition-all duration-300 group">
                See More
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform"
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

            {/* Right - Image placeholder */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl aspect-[16/9] shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
