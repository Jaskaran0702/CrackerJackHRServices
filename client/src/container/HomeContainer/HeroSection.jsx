import React from "react";
import heroImage from "../../assets/images/hero.png";
import styles from "../../styles/Home/HeroSection.module.css";
import { Link } from "react-scroll";
function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles["hero-content"]}>
          <div className={styles["content-left"]}>
            <h1 className={styles["hero-title"]}>CRACKERJACK HR SERVICES</h1>
            <p className={styles["hero-description"]}>
            Transforming Resumes, Empowering Professionals
            </p>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className={styles["cta-button"]}
            >
              Get Started
            </Link>
          </div>
          <div className={styles["content-right"]}>
            <img
              src={heroImage}
              alt="Hero"
              className={styles["animated-image"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
