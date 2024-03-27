import React from "react";
import styles from "./Sidebar.module.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Sidebar = ({ isVisible, close }) => {
  const variants = {
    visible: {
      width: "50%",
    },
    collapsed: {
      width: "0px",
    },
  };


  return (
    <motion.div
      variants={variants}
      initial={isVisible ? "visible" : "collapsed"}
      animate={isVisible ? "visible" : "collapsed"}
      className={styles.sidebar}
    >
      <div className={styles.nav_btn} onClick={close}>
        <img src="./nav-icon.png" alt="" />
      </div>
      <div className={styles.sidebar_links}>
          <a
            style={{
              color: "white",
              textDecoration: "none",
            }}
            href="./PunitKumarBhesotaResume.pdf"
            download
          >
            <div>Resume</div>
          </a>

        <Link onClick={close} to="hero" smooth>
          <div>Home</div>
        </Link>

        <Link onClick={close} to="info" smooth>
          <div>Info</div>
        </Link>
        <Link onClick={close} to="projects" smooth>
          <div>Projects</div>
        </Link>

        <Link onClick={close} to="contact" smooth>
          <div>Contact</div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Sidebar;
