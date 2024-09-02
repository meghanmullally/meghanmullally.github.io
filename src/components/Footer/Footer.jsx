import React from "react";
import styles from "./Footer.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import logo from "../../assets/images/logos/white/white-logos-06.png";

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.footer}>
      <Grid container spacing={3}>
        <Grid size={3}>
          <img src={logo} className={styles.logo} alt="MM white logo" />
        </Grid>
        <Grid size={3}>
          <div className={styles["quick-links"]}>
            <h4>Quick Links</h4>
            <a href="#hero">Back to Top</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </Grid>
        <Grid size={3}>
          <div className={styles["social-links"]}>
            <h4>Follow Me</h4>
            <a
              href="https://github.com/meghanmullally"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/meghan-mullally/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          {/* </div> */}
        </Grid>
        <Grid size={3}>
          <div className="contact-info">
            <h4>Contact</h4>
            <p>
              Email:{" "}
              <a href="mailto:meghan.mullallyjobs@gmail.com">
                meghan.mullallyjobs@gmail.com
              </a>
            </p>
          </div>
        </Grid>
      </Grid>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Meghan Mullally. All rights reserved.
        </p>
      </div>
    </Box>
  );
}

export default Footer;
