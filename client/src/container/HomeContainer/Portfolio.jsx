import React from "react";
import styles from "../../styles/Home/Portfolio.module.css";

import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: project1,
    link: "#",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: project2,
    link: "#",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
