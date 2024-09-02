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

    // Prepare the form data for submission using FormData
    const form = event.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => alert("Thank you for your submission"))
      .catch((error) => alert("Submission failed. Please try again later."));
  };

  return (
    <section className={styles.contact} id="contact">
      <h2>Contact Me</h2>
      <div className={styles.contactContainer}>
        <form method="POST" data-netlify="true" name="contact">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="firstName" required />
          <input type="text" name="lastName" required />
          <input type="email" name="email" required />
          <input type="text" name="subject" required />
          <textarea name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
        <div id="formOutput"></div>
      </div>
    </section>
  );
}

export default Contact;
