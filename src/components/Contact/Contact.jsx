import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the form data for submission using URL encoding
    const encodedData = new URLSearchParams({
      "form-name": "contact",
      ...formData,
    }).toString();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedData,
    })
      .then(() => alert("Thank you for your submission"))
      .catch((error) => alert("Submission failed. Please try again later."));
  };

  return (
    <section className={styles.contact} id="contact">
      <h2>Contact Me</h2>
      <div className={styles.contactContainer}>
        <form
          id="contactForm"
          onSubmit={handleSubmit}
          method="POST"
          data-netlify="true"
          name="contact"
        >
          {/* Hidden input to identify form name for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          <h3>Name (Required)</h3>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <label htmlFor="email">Email Address (Required):</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject (Required):</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message (Required):</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message here…"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
        <div id="formOutput"></div>
      </div>
    </section>
  );
}

export default Contact;