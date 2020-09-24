import React from "react";
import styles from "./Banner.module.scss";

const Banner = (props) => {
  const { title, description } = props;
  return (
    <div className={styles.Banner}>
      <div className={styles.bannerPatterns}>
        <h3>
          nav<span>box</span>
        </h3>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.btn}>
          <img src={"/home/assets/Menu/layer-2@3x.png"} /> Get Started
        </div>
      </div>
    </div>
  );
};

export default Banner;
