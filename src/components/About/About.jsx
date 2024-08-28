import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <div className={styles['about-content']}>
        <p> Hello, I'm Meghan, a tech professional with a diverse skill set spanning web development and technical support. 
          With a background in both software engineering and customer-centric technical roles, I bring a unique blend of problem-solving and development skills to the table. 
          Whether it's crafting seamless web applications or providing top-tier support.</p>
      </div>
    </section>
  );
}

export default About;