import React, { useState } from "react";
import styles from "../../styles/Home/FAQ.module.css";

function FAQ() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      isOpen: false,
    },
    {
      question: "Why use Lorem Ipsum?",
      answer:
        "Lorem Ipsum is a great way to add placeholder text to your projects.",
      isOpen: false,
    },
    {
      question: "Is it free to use?",
      answer: "Yes, Lorem Ipsum is free to use for any purpose.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index
          ? { ...faq, isOpen: !faq.isOpen }
          : { ...faq, isOpen: false }
      )
    );
  };

  return (
    <div className={styles.faq} id="faq">
      <div className={styles.faqContainer}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${faq.isOpen ? styles.open : ""}`}
            >
              <div
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <div className={styles.faqIcon}>{faq.isOpen ? "-" : "+"}</div>
              </div>
              <div className={styles.faqAnswer}>{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
