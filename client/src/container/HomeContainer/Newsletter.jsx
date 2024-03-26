import React from "react";
import styles from "../../styles/Home/Newsletter.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Newsletter() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // so page does not reload
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
      toast.success("Message sent successfully"); // Use toast.success for success message
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
      toast.error("Something went wrong, please try again later."); // Use toast.error for error message
    }
  };

  return (
    <section className={styles.newsletter} id="newsletter">
      <div className={styles.container}>
        <h2 className={styles.newsletterTitle}>Contact us!</h2>
        <p className={styles.newsletterDescription}>
        Drop your e-mail below and let’s start a conversation!
        </p>
        <div className={styles.newsletterForm}>
          <div className={styles.newsletterName}>
            <input
              type="text"
              placeholder="Enter your first name"
              value={formDetails.firstName}
              className={styles.newsletterInput}
              onChange={(e) => onFormUpdate("firstName", e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your last name"
              value={formDetails.lastName}
              className={styles.newsletterInput}
              onChange={(e) => onFormUpdate("lastName", e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            value={formDetails.email}
            className={styles.newsletterInput}
            onChange={(e) => onFormUpdate("email", e.target.value)}
          />
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={formDetails.phone}
            className={styles.newsletterInput}
            onChange={(e) => onFormUpdate("phone", e.target.value)}
          />
          <input
            type="text"
            placeholder="Message"
            value={formDetails.message}
            className={styles.newsletterInput}
            onChange={(e) => onFormUpdate("message", e.target.value)}
          />
          <button
            className={styles.newsletterButton}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;