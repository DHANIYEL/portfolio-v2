import React from "react";

const ProjectCard = ({ data }: any) => {
  return (
    <section className="card-section w-full my-52 ">
      <div
        className="
          card
          w-full max-w-[1200px] mx-auto
          min-h-[85vh] sm:min-h-[90vh]
          rounded-2xl sm:rounded-3xl
          flex flex-col
          p-5 sm:p-8 md:p-12
          shadow-2xl
          overflow-hidden
        "
        style={{ background: data.bg }}
      >
        {/* Header */}
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

        {/* Title */}
        <div className="mb-6 sm:mb-auto card-content">
          <h1 className="font-black text-white leading-none tracking-tight text-[56px] sm:text-[90px] md:text-[120px] lg:text-[160px]">
            {data.title}
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 items-end">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[4/3] img-wrapper">
            <img
              src={data.images.main}
              alt={`${data.title} main`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 sm:space-y-6 card-content">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              {data.subtitle}
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-light">
              {data.description}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mt-6 sm:mt-10 md:mt-12 items-start">
          <div className="card-content">
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-light">
              Explore a variety of projects across branding, 3D design, and
              interactive experiences.
            </p>

            <button className="card-content flex items-center gap-2 sm:gap-3 text-white text-base sm:text-lg font-medium hover:gap-5 transition-all duration-300 group">
              See More →
            </button>
          </div>

          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[16/9] img-wrapper">
            <img
              src={data.images.secondary}
              alt={`${data.title} secondary`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
