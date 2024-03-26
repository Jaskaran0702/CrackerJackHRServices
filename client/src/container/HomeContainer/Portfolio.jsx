import React from "react";
import styles from "../../styles/Home/Portfolio.module.css";

import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";

const projects = [
  {
    id: 1,
    title: "Senior Roles",
    description:
      "Securing senior-level positions requires a resume that not only highlights your extensive experience and accomplishments but also showcases your leadership prowess and strategic vision",
    image: project1,
    link: "#",
  },
  {
    id: 2,
    title: "Freshers",
    description:
      "Embarking on your professional journey as a fresher can be both exciting and daunting. With limited work experience, crafting a standout resume that captures the attention of employers is essential for landing your first job.",
    image: project2,
    link: "#",
  },
  {
    id: 3,
    title: "Career Transitioners",
    description:
      "Whether you're changing industries, pursuing a new role, or embarking on an entrepreneurial venture, a well-crafted resume is essential for articulating your transferable skills and positioning yourself as a viable candidate in your target market.",
    image: project3,
    link: "#",
  },
];

function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <h2 className={styles.portfolioTitle}>Portfolio</h2>
        <div className={styles.projects}>
          {projects.map((project) => (
            <div key={project.id} className={styles.project}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
