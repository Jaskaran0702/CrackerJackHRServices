import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Link
          to="top"
          smooth={true}
          duration={500}
          className="scroll-to-top-button"
        >
          <FaArrowUp />
        </Link>
      )}
    </>
  );
};

export default ScrollToTopButton;
