import React from 'react';
import styles from './About.module.css';
import self from '../../assets/images/self.jpeg';

function About() {
  return (
    <section className={styles.about}>
      <h1>About Me</h1>
      <div className={styles.aboutContent}>
        <div className={styles.imageDetailsContainer}>
          <div className={styles.imageContainer}>
            <img src={self} alt="Meghan Mullally" className={styles.aboutImage} />
          </div>

          {/* Personal Details */}
          <div className={styles.detailsContainer}>
            <h4>Full Name: </h4>
            <p> Meghan Mullally</p>
            <h4>Email: </h4>
            <p>
              <a href="mailto:meghan.mullallyjobs@gmail.com">meghan.mullallyjobs@gmail.com</a>
            </p>
            <h4>Portfolio: </h4>
            <p>
              <a href="https://meghanmullally.github.io/">meghanmullally.github.io</a>
            </p>
          </div>
        </div>

        {/* Description */}
        <p className={styles.description}>
          Hello, I'm Meghan, a tech professional with a diverse skill set spanning web development and technical support.
          With a background in both software engineering and customer-centric technical roles, I bring a unique blend of problem-solving and development skills to the table.
          Whether it's crafting seamless web applications or providing top-tier support.
        </p>
      </div>
    </section>
  );
}

export default About;