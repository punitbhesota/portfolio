import React from "react";
import styles from "./Skills.module.css";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.marquee1}>
        <Marquee gradient={false} speed={50}>
          <img src="./skills/python.png" alt="" />
          <img src="./skills/js.png" alt="" />
          <img src="./skills/mysql.png" alt="" />
          <img src="./skills/mongodb.png" alt="" />
          <img src="./skills/c.png" alt="" />
          <img src="./skills/css.png" alt="" />
          <img src="./skills/html.png" alt="" />

          <img src="./skills/react.png" alt="" />
          <img src="./skills/nodejs.png" alt="" />
          <img src="./skills/express.png" alt="" />
          <img src="./skills/native.png" alt="" />
          <img src="./skills/redux.png" alt="" />
          <img src="./skills/postman.png" alt="" />
          <img src="./skills/docker.png" alt="" />
          <img src="./skills/bootstrap.png" alt="" />
          <img src="./skills/git.png" alt="" />
          <img src="./skills/redux.png" alt="" />
          <img src="./skills/sass.png" alt="" />
          <img src="./skills/figma.png" alt="" />
          <img src="./skills/excel.png" alt="" />
          <img src="./skills/firebase.png" alt="" />
        </Marquee>
      </div>

      <div className={styles.marquee2}>
        <Marquee direction={"right"} gradient={false} speed={50}>
          <img src="./skills/html.png" alt="" />
          <img src="./skills/react.png" alt="" />
          <img src="./skills/css.png" alt="" />
          <img src="./skills/python.png" alt="" />
          <img src="./skills/mysql.png" alt="" />
          <img src="./skills/c.png" alt="" />
          <img src="./skills/js.png" alt="" />
          <img src="./skills/nodejs.png" alt="" />
          <img src="./skills/mongodb.png" alt="" />
          <img src="./skills/native.png" alt="" />
        </Marquee>
      </div>
      <div className={styles.marquee3}>
        <Marquee gradient={false} speed={50}>
          <img src="./skills/docker.png" alt="" />
          <img src="./skills/firebase.png" alt="" />
          <img src="./skills/bootstrap.png" alt="" />
          <img src="./skills/redux.png" alt="" />
          <img src="./skills/git.png" alt="" />
          <img src="./skills/excel.png" alt="" />
          <img src="./skills/express.png" alt="" />
          <img src="./skills/redux.png" alt="" />
          <img src="./skills/figma.png" alt="" />
          <img src="./skills/postman.png" alt="" />
          <img src="./skills/sass.png" alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
