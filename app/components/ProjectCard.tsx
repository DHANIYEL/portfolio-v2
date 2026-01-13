import React from "react";

const ProjectCard = ({ data }) => {
  return (
    <section>
      <div className="w-96 h-96" style={{ background: data.bg }}>
        <h2>{data.title}</h2>
      </div>
    </section>
  );
};

export default ProjectCard;
