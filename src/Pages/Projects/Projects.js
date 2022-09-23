import React from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.works1}>
        <div>
          <Link to="/projects/1">
            <img src="./mockups/mu_pingme.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/projects/2">
            <img src="./mockups/mu_cs_e.png" alt="" />
          </Link>
        </div>
      </div>
      <div className={styles.works2}>
        <div>
          <Link to="/projects/3">
            <img src="./mockups/mu_client_e.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/projects/4">
            <img src="./mockups/mu_ecom.jpg" alt="" />
          </Link>
        </div>
      </div>
      <div className={styles.works3}>
        <div>
          <Link to="/projects/5">
            <img src="./mockups/mu_gym2.jpg" alt="" />
          </Link>
        </div>

        <div>
          <Link to="/projects/6">
            <img src="./mockups/mu_csa_ee.jpg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
