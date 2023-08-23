import React from "react";
import styles from "./Sidebar.module.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Sidebar = ({ isVisible, close }) => {
  const variants = {
    visible: {
      width: "250px",
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
      <div className={styles.sidebar_links}>
        <div>
          <a
            style={{
              color: "orange",
              textDecoration: "none",
            }}
            href="./PunitBhesotaResume.pdf"
            download
          >
            Resume
          </a>
        </div>

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
