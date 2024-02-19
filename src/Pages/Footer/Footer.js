import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div id="footer" className={styles.footer_main}>
      {/* <div className={styles.prefooter}>
        <div className={styles.footer_links}>
          <div className={styles.footer_link}>01/</div>
          <div className={styles.sitemap}>
            <heading>SITEMAP</heading>
            <Link to="hero" smooth={true}>
              <div>home</div>
            </Link>
            <Link to="info" smooth={true}>
              <div>info</div>
            </Link>
            <Link to="projects" smooth={true}>
              <div>projects</div>
            </Link>
            <Link to="contact" smooth={true}>
              <div>contact</div>
            </Link>
          </div>       
        </div>
        <div className={styles.footer_links}>
          <div className={styles.footer_link}>02/</div>
          <div className={styles.socials}>
          <heading>SOCIALS</heading>
          <a href="https://github.com/punitbhesota">Github</a>
          <a href="https://linkedin.com/in/punitbhesota">Linkedin</a>
          <a href="https://twitter.com/punitbhesota">Twitter</a>
          <a href="https://instagram.com/punitbhesota/">Instagram</a>
          <a href="mailto:punnitbhesota@gmail.com">Email</a>

        </div>
        </div>
      </div> */}
      <div className={styles.footer_heading}>
        <div className={styles.heading_desc}>
          <div>Software Developer</div>
          <div>Portfolio 2024</div>
        </div>
        <div className={styles.heading}>
          Punit Bhesota
        </div>
        <div className={styles.heading_desc}>
          <div>Built by me 🧡</div>
          <div>Mail : <a href="mailto:punnitbhesota@gmail.com" style={{textDecoration:"none",color:"grey"}}>punnitbhesota@gmail.com</a></div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
