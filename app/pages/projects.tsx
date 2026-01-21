// // "use client";
// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import styles from "../assets/styles/enhanced.module.scss";
// import { Projects } from "../constants/index.js";

// const Card = ({
//   i,
//   title,
//   subtitle,
//   description,
//   images,
//   color,
//   tag,
//   level,
// }) => {
//   const cardRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       {
//         threshold: 0.3,
//         rootMargin: "-100px",
//       },
//     );

//     if (cardRef.current) observer.observe(cardRef.current);

//     return () => {
//       if (cardRef.current) observer.unobserve(cardRef.current);
//     };
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className={`${styles.cardContainer} ${isVisible ? styles.visible : ""}`}
//       style={{ "--index": i }}
//     >
//       <div className={styles.card} style={{ backgroundColor: color }}>
//         <div className={styles.header}>
//           <div className={styles.tag}>
//             <span>{tag}</span>
//           </div>
//           <div className={styles.tag}>
//             <span>{level}</span>
//           </div>
//         </div>

//         <h2>{title}</h2>
//         <p style={{ marginTop: "6px", opacity: 0.85 }}>{subtitle}</p>

//         <div className={styles.body}>
//           <div className={styles.description}>
//             <p>{description}</p>
//           </div>
//           <div className={styles.imageContainer}>
//             <div className={styles.inner}>
//               <img
//                 // fill
//                 src={images?.main}
//                 alt={title}
//                 style={{ objectFit: "cover" }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProjectsPage = () => {
//   return (
//     <section className={styles.projectsSection}>
//       <div className={styles.heading}>
//         <h1>My most impactful and innovative works</h1>
//       </div>

//       <div className={styles.cardsWrapper}>
//         {Projects.map((project, i) => (
//           <Card key={project.id} i={i} {...project} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectsPage;


// pages/ProjectsPage.jsx (or wherever your main component is)
"use client";
import styles from "../assets/styles/enhanced.module.scss";
import { Projects } from "../constants/index.js";
import Card from "../components/Card";

const ProjectsPage = () => {
  return (
    <section className={styles.projectsSection}>
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