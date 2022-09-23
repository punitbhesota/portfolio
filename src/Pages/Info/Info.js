import React from "react";
import styles from "./Info.module.css";
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
          My name is <b>Punit Kumar Bhesota</b>, I am a freelance full stack
          developer and this is my home on the internet. I design, develop and
          create websites and apps.
        </p>
        <p className={styles.bio_para}>
          I completed my graduation in Bachelors of Computer Applications. An
          interesting fact is that I like acting right from my school years, I
          have performed several plays on stage. Over last few years I have
          increased my skillset and am trying to constantly teach myself more.
        </p>
        <button className={styles.info_coa}>
          Get to know more <img src="arrowRB.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Info;
