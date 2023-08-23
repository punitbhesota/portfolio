import React from "react";
import styles from "./Info.module.css";
import { Link } from "react-scroll";
const Info = () => {
  return (
    <div id="info" className={styles.info}>
      <div className={styles.image}>
        <img className={styles.main_image} src="./info_pic.jpg" alt="" />
        <img className={styles.logo} src="./stickers/pb-new-white.png" alt="" />
      </div>
      <div className={styles.bio}>
        <div className={styles.heading}>
          Hello <br />
          Fellow People.
        </div>
        <p className={styles.bio_para}>
          My name is <b>Punit Kumar Bhesota</b>, just another software developer and this is my home on the internet. I design, develop and create websites and apps.
        </p>
        <p className={styles.bio_para}>
          Speaking of credentials, I've got a shiny Bachelors of Computer Applications degree in my back pocket.I've got a soft spot for acting. Yep, from coding lines to delivering lines, I've rocked both stages and scripts right from my school years, I
          have performed several plays on stage. I've been scooping up skills like a digital sponge. Learning is my middle name [okay, not literally, but you get the idea].
        </p>
        <Link to="contact" smooth>
        <button className={styles.info_coa}>
          Get to know more <img src="arrowRB.png" alt="" />
        </button>
        </Link>

      </div>
    </div>
  );
};

export default Info;
