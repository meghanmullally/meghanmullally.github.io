import React from 'react';
import styles from './Hero.module.css';
import logoName from '../../assets/logo-name-transparent.png';

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <img src={logoName} alt="Logo Meghan Mullally"/>
      <p>Front End Developer • Customer Focused Engineer • Problem Solver </p>

    </section>
  );
}

export default Hero;