import React from "react";
import { FaCoffee, FaLaptop, FaRocket } from "react-icons/fa";
import styles from "../../styles/Home/Services.module.css";

const servicesData = [
  {
    id: 1,
    icon: <FaCoffee className={styles.serviceIcon} />,
    title: "Personal Mentoring",
    description:
      "Leveraging the wisdom and expertise gained from over 25 years of corporate experience, our personalized online coaching service offers a customized approach to career development. Whether you are aiming for a promotion, considering a career change, or seeking to enhance your leadership skills, our seasoned coaches are here to support you every step of the way.",
  },
  {
    id: 2,
    icon: <FaLaptop className={styles.serviceIcon} />,
    title: "Resume Crafting",
    description:
      "Our team of certified resume writers works closely with you to gather insights into your professional experience, achievements, and aspirations. We then leverage our industry expertise to craft a compelling and impactful resume that effectively highlights your strengths, skills, and accomplishments.",
  },
  {
    id: 3,
    icon: <FaRocket className={styles.serviceIcon} />,
    title: "Amplifying Visibility",
    description:
      "At Crackerjack, we're committed to helping you maximize your visibility and reach potential employers where they're actively seeking top talent. Our “Resume Upload Service” offers a seamless solution for getting your professional profile noticed on popular job portals like LinkedIn, Indeed, and more.",
  },
];

function Services() {
  return (
    <section className={styles.service} id="service">
      <div className="container">
        <h2 className={styles.serviceTitle}>Our Services</h2>
        <div className={styles.serviceItems}>
          {servicesData.map((service) => (
            <div key={service.id} className={styles.serviceItem}>
              {service.icon}
              <h3 className={styles.serviceItemTitle}>{service.title}</h3>
              <p className={styles.serviceItemDescription}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
