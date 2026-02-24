"use client";
import styles from "../assets/styles/enhanced.module.scss";
import { Projects } from "@/app/constants/index";
import Card from "../components/Card";

const ProjectsPage = () => {
  return (
    <section className={styles.projectsSection} id="portfolio">
      <div className={styles.heading}>
        <h1>My most impactful and innovative works</h1>
      </div>

      <div className={styles.cardsWrapper}>
        {Projects.map((project, i) => (
          <Card key={project.id} i={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
