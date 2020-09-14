import React from "react";
import { MagicIcon } from "../SvgIcons/SvgIcons";
import styles from "./NavBoxGrid.module.scss";
const NavBoxGrid = (props) => {
  return (
    <div className={styles.NavBoxGrid}>
      <div className={styles.grid}>
        <div className={styles.topLeft}>
          <img src={"/assets/NavBoxGrid/layer-125.png"} alt="logo" />
        </div>
        <div className={styles.topCenter}>
          <img src={"/assets/NavBoxGrid/layer-126.png"} alt="logo" />
        </div>
        <div className={styles.topRight}>
          <img src={"/assets/NavBoxGrid/layer-128@3x.png"} alt="logo" />
        </div>
        <div className={styles.bottomLeft}>
          <img src={"/assets/NavBoxGrid/layer-127@3x.png"} alt="logo" />
        </div>
        <div className={styles.bottomCenter}>
          <img src={"/assets/NavBoxGrid/kindpng-1030408.png"} alt="logo" />
        </div>
        <div className={styles.bottomRight}>
          <img src={"/assets/NavBoxGrid/layer-129@3x.png"} alt="logo" />
        </div>
      </div>
      <div className={styles.description}>
        <h2>
          Get started in <span>seconds</span>
        </h2>
        <span className={styles.subtitle}>
          Say Hey Again to NavBox{" "}
          <img src={"/assets/Gif sections/layer-104@3x.png"} alt="logo" />
        </span>
        <p>
          Just connect a NavBox to your barcode scanner, or if you use one of
          the POS systems below, you can download our free app.
        </p>
        <div className={styles.magic}>
          <MagicIcon />{" "}
          <p>
            In seconds <span>the magic</span> starts and you get an easy and
            beautiful website
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBoxGrid;
