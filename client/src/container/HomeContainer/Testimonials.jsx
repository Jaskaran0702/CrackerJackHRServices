import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../../styles/Home/Testimonials.module.css";

import client1Image from "../../assets/images/client1.png";
import client2Image from "../../assets/images/client2.png";
import client3Image from "../../assets/images/client3.jpg";

const testimonialsData = [
  {
    id: 1,
    author: "John Doe",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: client1Image,
  },
  {
    id: 2,
    author: "Emily Johnson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: client2Image,
  },
  {
    id: 3,
    author: "Alice Johnson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: client3Image,
  },
];

function Testimonials() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonialsData.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentTestimonialIndex]);

  return (
    <section className={styles.testimonials} id="testimonial">
      <div className="container">
        <h2 className={styles.testimonialsTitle}>Testimonials</h2>
        <div className={styles.testimonial}>
          <button
            className={styles.testimonialButton}
            onClick={prevTestimonial}
          >
            <FaChevronLeft />
          </button>
          <div className={styles.testimonialContent}>
            <div className={styles.testimonialImage}>
              <img
                src={testimonialsData[currentTestimonialIndex].image}
                alt={testimonialsData[currentTestimonialIndex].author}
              />
            </div>
            <p className={styles.testimonialText}>
              {testimonialsData[currentTestimonialIndex].text}
            </p>
            <p className={styles.testimonialAuthor}>
              - {testimonialsData[currentTestimonialIndex].author}
            </p>
          </div>
          <button
            className={styles.testimonialButton}
            onClick={nextTestimonial}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
