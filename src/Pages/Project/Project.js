import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Project.module.css";
import { data } from "../../Components/data.js";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  var detail = data.find((obj) => obj.pid === id);
  return (
    <div className={styles.project}>
      <div className={styles.web_project}>
        <div className={styles.header}>
          <div className={styles.names}>
            <div className={styles.heading}>{detail.name}</div>
            <div className={styles.subheading}>{detail.tagline}</div>
          </div>
          <div className={styles.project_btns}>
            <div onClick={() => navigate(-1)}>back</div>
            {detail.live ? <a href={detail.live}>live</a> : <></>}
            <a href={detail.github}>github</a>
          </div>
        </div>

        <div className={styles.images}>
          <div className={styles.mob_images}>
            {detail.mob_images.map((item) => (
              <img src={item} alt="" />
            ))}
          </div>
          <div className={styles.web_images}>
            {detail?.web_images?.map((item) => (
              <img src={item} alt="" />
            ))}
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.tech}>
            <p>Technologies Used</p>
            {detail.tech_images.map((item) => (
              <img src={item} alt="" />
            ))}
          </div>
          <div style={{ color: "white" }}>
            <p style={{ color: detail.textcolor }}>About {detail.name}</p>
            {detail.content}
          </div>
        </div>
      </div>
      <div className={styles.mob_project}>
        <div style={{ position: "relative" }}>
          <div className={styles.mob_header}>
            <img
              className={styles.mob_back}
              onClick={() => navigate(-1)}
              src="../left.png"
              alt=""
            />
            <div className={styles.cover_info}>
              <div>{detail.name}</div>
              <div>{detail.tagline}</div>
            </div>
            <img
              className={styles.cover_image}
              src={detail.cover_image}
              alt=""
            />{" "}
          </div>
        </div>

        <div className={styles.more_info}>
          <div>
            <img src="../coding.png" alt="" />
            by Punit Bhesota
          </div>
          <div>
            <img src="../clock.png" alt="" />
            {detail.time}
          </div>
        </div>
        <div className={styles.mob_tech}>
          {detail.tech_images.map((item) => (
            <img src={item} alt="" />
          ))}
        </div>
        <div
          className={styles.mob_content}
          style={{ backgroundColor: detail.color }}
        >
          {detail.content}
        </div>
        <div className={styles.mob_btns}>
          {detail.live ? <a href={detail.live}>live</a> : <></>}
          <a href={detail.github}>github</a>
        </div>
        <div className={styles.images}>
          <div className={styles.mob_images}>
            {detail.mob_images.map((item) => (
              <img src={item} alt="" />
            ))}
          </div>
          <div className={styles.web_images}>
            {detail?.web_images?.map((item) => (
              <img src={item} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
