import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:meghan.mullallyjobs@gmail.com">meghan.mullallyjobs@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/meghanmullally">meghanmullally</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/meghan-mullally/">meghanmullally</a></p>
    </section>
  );
}

export default Contact;