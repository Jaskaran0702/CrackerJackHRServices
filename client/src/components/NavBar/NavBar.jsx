import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "./../../assets/images/CRACKERJACK2.png";

import styles from "../../styles/NavBar.module.css";

const navigationItems = [
  {
    id: "about",
    text: "About",
  },
  {
    id: "service",
    text: "Services",
  },
  {
    id: "testimonial",
    text: "Testimonials",
  },
  {
    id: "portfolio",
    text: "Portfolio",
  },
  {
    id: "blog",
    text: "Blog",
  },
  {
    id: "faq",
    text: "FAQ",
  },
  {
    id: "newsletter",
    text: "Contact",
  },
];

function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className={styles.navbar} id="top">
      <div className="container">
        <div className={styles.navbarContent}>
          <div className={styles.logo}>
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className={styles.links}>
            <ul className={isMobileNavOpen ? styles.open : ""}>
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    activeClass={styles.active}
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            {isMobileNavOpen ? (
              <div className={styles.mobileIcon} onClick={toggleMobileNav}>
                <FaTimes />
              </div>
            ) : (
              <div className={styles.mobileIcon} onClick={toggleMobileNav}>
                <FaBars />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
