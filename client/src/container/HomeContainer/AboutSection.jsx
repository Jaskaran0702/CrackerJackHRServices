import React from "react";
// import aboutUsImage from "../../assets/images/about.png";
// import aboutUsImage from "../../assets/images/CRACKERJACK2.png";
import styles from "../../styles/Home/AboutSection.module.css";

function AboutUsSection() {
  return (
    <section className={styles.aboutUs} id="about">
      <div className="container">
        <div className={styles.aboutUsContent}>
          <div className={styles.aboutUsText}>
            <h2 className={styles.aboutUsTitle}>About Us</h2>
            <p className={styles.aboutUsDescription}>
            At Crackerjack HR Services, we are passionate about empowering individuals to unlock their full
career potential. With a team of seasoned professionals and industry experts, we offer a
comprehensive suite of services designed to help you stand out in today&#39;s competitive job
market and navigate the ever-evolving professional landscape.
            </p>
          </div>
          {/* <div className={styles.aboutUsImage}>
            <img
              src={aboutUsImage}
              alt="About Us"
              className={styles.aboutUsImage}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
