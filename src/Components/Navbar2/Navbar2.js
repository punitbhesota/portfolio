import React from "react";
import styles from "./Navbar2.module.css";
import { Link } from "react-scroll";

const Navbar2 = ({ toggleSideBar }) => {
  return (
    <div className={styles.navbar}>
      <div>
        <div>bhesota_</div>
      </div>
      <div className={styles.nav_links}>
        <a
          style={{ color: "white", textDecoration: "none", margin: "0 20px" }}
          href="./PunitBhesotaResume.pdf"
          download
        >
          resume
        </a>
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
      <div className={styles.nav_btn} onClick={toggleSideBar}>
        <img src="./nav-icon.png" alt="" />
      </div>
    </div>
  );
};

export default Navbar2;
