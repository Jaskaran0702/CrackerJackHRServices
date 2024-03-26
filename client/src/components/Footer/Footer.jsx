/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter,FaLinkedinIn  } from "react-icons/fa"; // Import the icons
import styles from "../../styles/Footer.module.css";
import ScrollToTopButton from "../Button/ScrollToTopButton";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact Us</h3>
            <p className={styles.footerInfo}>
              Email:{" "}
              <a style={{ color: "#bbb" }} href="crackerjackhrservices@gmail.com">
              crackerjackhrservices@gmail.com
              </a>
              <br />
              Phone: +91 9686227924
              <br />
              Address: Gurgaon, Haryana, India.
            </p>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a
                href="https://www.linkedin.com/in/geetu-baweja-734b68226/?originalSubdomain=in"
                className={styles.iconLink}
              >
                <FaLinkedinIn  />
              </a>
              {/* <a
                href="https://twitter.com/MdHabib44881730"
                className={styles.iconLink}
              >
                <FaTwitter />
              </a> */}
              {/* <a
                href="https://www.instagram.com/_hr_sobuj/"
                className={styles.iconLink}
              >
                <FaInstagram />
              </a> */}
            </div>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Useful Links</h3>
            <ul className={styles.footerLinks}>
              <li>
                {/* <a href="#about">About Us</a> */}
                <Link
                    // activeClass={styles.active}
                    to="about"
                    smooth={true}
                    duration={700}
                    offset={-80}
                  >
                    About Us
                  </Link>
              </li>
              <li>
                {/* <a href="#service">Services</a> */}
                <Link
                    // activeClass={styles.active}
                    to="service"
                    smooth={true}
                    duration={700}
                    offset={-80}
                  >
                    Services
                  </Link>
              </li>
              <li>
                {/* <a href="#portfolio">Portfolio</a> */}
                <Link
                    // activeClass={styles.active}
                    to="portfolio"
                    smooth={true}
                    duration={700}
                    offset={-80}
                  >
                    Portfolio
                  </Link>
              </li>
              <li>
                {/* <a href="#testimonial">Testimonials</a> */}
                <Link
                    // activeClass={styles.active}
                    to="testimonial"
                    smooth={true}
                    duration={700}
                    offset={-80}
                  >
                   Testimonials
                  </Link>
              </li>
            </ul>
          </div>
          {/* <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Additional Section 1</h3>
            <p className={styles.footerInfo}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              eos odit? Tenetur dignissimos odit, deserunt
            </p>
          </div> */}
          {/* <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Additional Section 2</h3>
            <p className={styles.footerInfo}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              eos odit? Tenetur dignissimos odit, deserunt
            </p>
          </div> */}
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
}

export default Footer;
