import React from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link to="hero" smooth={true}>
          <img src="./home.png" alt="" />
        </Link>
        <Link to="info" smooth={true}>
          <img src="./info.png" alt="" />
        </Link>
        <Link to="projects" smooth={true}>
          <img src="./work.png" alt="" />
        </Link>
        <Link to="contact" smooth={true}>
          <img src="./talk.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
