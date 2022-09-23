import React from "react";
import { Link } from "react-scroll";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div id="hero" className={styles.hero}>
      <div className={styles.heading}>website developer</div>
      <div className={styles.hero_info}>
        <div className={styles.hero_info_para}>
          Your friendly neighbourhood freelance web developer with experience
          building custom frontend websites through React js and fullstack
          websites utilising MERN stack. And soon will be projects in React
          Native too.
        </div>
        <div className={styles.hero_info_para2}>
          Motivated web designer and developer with trong collaboration skills
          and skilled in conceptualizing, designing, developing and deploying
          websites.
        </div>
        <Link to="contact" smooth className={styles.hero_info_btn}>
          Get in touch <img src="./arrowRW.png" alt="" />
        </Link>
      </div>
      <div className={styles.hero_content}>
        <div className={styles.stickers}>
          <img
            className={styles.sticker1}
            src="./stickers/frontend.png"
            alt=""
          />
          <img
            className={styles.sticker2}
            src="./stickers/backend.png"
            alt=""
          />
          <img className={styles.sticker4} src="./stickers/modern.png" alt="" />
        </div>
        <div className={styles.me_hero}>
          <img src="./me_hero.png" alt="" />
        </div>
        <div className={styles.stickers2}>
          <Link to="contact" smooth>
            <img
              className={styles.sticker5}
              src="./stickers/workwm.png"
              alt=""
              style={{ cursor: "pointer" }}
            />
          </Link>

          <img className={styles.sticker3} src="./stickers/design.png" alt="" />

          <img
            className={styles.sticker7}
            src="./stickers/banner2.png"
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={styles.hero_content_mobile}>
          <img
            style={{ width: "70px", height: "70px", margin: "0 0 30px 10px" }}
            src="./stickers/frontend.png"
            alt=""
          />
          <img
            style={{
              width: "80px",
              height: "80px",
              margin: "0 10px 80px -20px",
            }}
            src="./stickers/backend.png"
            alt=""
          />
          <img className={styles.mob_me} src="./me2.jpg" alt="" />
          <img
            style={{
              width: "80px",
              height: "80px",
              margin: "-25px 0 0 20px",
            }}
            className={styles.sticker5}
            src="./stickers/workwm.png"
            alt=""
          />
          <img
            style={{
              width: "80px",
              height: "70px",
              margin: "-30px 0px 0px 10px",
            }}
            src="./stickers/design.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
