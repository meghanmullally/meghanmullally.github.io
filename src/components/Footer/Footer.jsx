import React from "react";
import styles from "./Footer.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import logo from "../../assets/images/logos/white/white-logos-06.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.footer}>
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item xs={12} sm={6} md={3} className={styles.footerSection}>
      <img src={logo} className={styles.logo} alt="MM white logo" />
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={styles.footerSection}>
          <nav className={styles.quickLinks}>
            <h4>Quick Links</h4>
            <a href="#hero">Back to Top</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={styles.footerSection}>
          <div className={styles.contactSection}>
            <h4>Connect with Me</h4>
            <div className={styles.socialIcons}>
              <a
                href="https://github.com/meghanmullally"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="large" />
              </a>
              <a
                href="https://www.linkedin.com/in/meghan-mullally/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" />
              </a>
              <a href="mailto:meghan.mullallyjobs@gmail.com">
                <EmailIcon fontSize="large" />
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} Meghan Mullally. All rights reserved.
        </p>
      </div>
    </Box>
  );
}

export default Footer;
