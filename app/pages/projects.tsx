import React from "react";

const projects = () => {
  return (
    <section className="main-container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-full h-full bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Main heading */}
        <div className="mb-16 md:mb-20 flex justify-end">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl max-w-2xl text-right font-bold leading-tight">
            My most impactful and innovative works
          </h2>
        </div>
      </div>
    </section>
  );
};

export default projects;
