import React from "react";
import styles from "./About.module.css";
import self from "../../assets/images/self.jpeg";

// Import FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <section className={styles.about} id="about">
      <h1>About Me</h1>
      <div className={styles.aboutContent}>
        <div className={styles.imageDetailsContainer}>
          <div className={styles.imageContainer}>
            <img
              src={self}
              alt="A portrait of Meghan Mullally"
              className={styles.aboutImage}
              role="img"
            />
          </div>

          {/* Personal Details */}
          <div className={styles.detailsContainer}>
            <h4>Full Name:</h4>
            <p>Meghan Mullally</p>
            <h4>Email:</h4>
            <p>
              <a href="mailto:meghan.mullallyjobs@gmail.com">
                meghan.mullallyjobs@gmail.com
              </a>
            </p>
            <h4>Portfolio:</h4>
            <p>
              <a href="https://meghanmullally-portfolio.netlify.app/">
                Visit my online portfolio
              </a>
            </p>
          </div>
        </div>

        {/* About Me Summary */}
        <p className={styles.description}>
          Hello, I'm Meghan, a tech professional with a diverse skill set
          spanning web development and technical support. With experience in
          both software engineering and customer-centric technical roles, I
          bring a unique blend of problem-solving and development skills to the
          table. My strengths lie in crafting seamless web applications and
          providing exceptional support, always with a focus on enhancing user
          experience and optimizing performance.
        </p>

        <p className={styles.callToAction}>
          I am always eager to learn and grow as a developer. Feel free to
          explore my portfolio to see my latest projects, or connect with me on
          GitHub and LinkedIn!
        </p>

        {/* Technologies Section */}
        <div className={styles.technologies}>
          <h3>Technologies I Use</h3>
          <div className={styles.techIcons}>
            <FontAwesomeIcon
              className={`${styles.faIcon} ${styles.faIconJs}`}
              icon={faJs}
              size="3x"
              title="JavaScript"
            />
            <FontAwesomeIcon
              className={`${styles.faIcon} ${styles.faIconReact}`}
              icon={faReact}
              size="3x"
              title="React"
            />
            <FontAwesomeIcon
              className={`${styles.faIcon} ${styles.faIconHtml}`}
              icon={faHtml5}
              size="3x"
              title="HTML5"
            />
            <FontAwesomeIcon
              className={`${styles.faIcon} ${styles.faIconCss}`}
              icon={faCss3Alt}
              size="3x"
              title="CSS3"
            />
            <FontAwesomeIcon
              className={`${styles.faIcon} ${styles.faIconGithub}`}
              icon={faGithub}
              size="3x"
              title="GitHub"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
