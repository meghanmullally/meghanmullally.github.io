import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <div className={styles['about-content']}>
        <p>Hello, I'm Meghan, a tech professional with a diverse skill set spanning web development and technical support...</p>
      </div>
    </section>
  );
}

export default About;