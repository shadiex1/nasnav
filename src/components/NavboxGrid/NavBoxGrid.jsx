import React from "react";
import { MagicIcon } from "../SvgIcons/SvgIcons";
import styles from "./NavBoxGrid.module.scss";
const NavBoxGrid = (props) => {
  const { data } = props;
  return (
    <div className={styles.NavBoxGrid}>
      <div className={styles.gridConainer}>
        <div className={styles.grid}>
          <div className={styles.topLeft}>
            <img src={data.brands[0]} alt="logo" />
          </div>
          <div className={styles.topCenter}>
            <img src={data.brands[1]} alt="logo" />
          </div>
          <div className={styles.topRight}>
            <img src={data.brands[2]} alt="logo" />
          </div>
          <div className={styles.bottomLeft}>
            <img src={data.brands[3]} alt="logo" />
          </div>
          <div className={styles.bottomCenter}>
            <img src={data.brands[4]} alt="logo" />
          </div>
          <div className={styles.bottomRight}>
            <img src={data.brands[5]} alt="logo" />
          </div>
        </div>
      </div>

      <div className={styles.description}>
        <h2>
          {data.title[0]} <span>{data.title[1]}</span>
        </h2>
        <span className={styles.subtitle}>
          {data.subtitle}
          <img src={"/home/assets/Gif sections/layer-104@3x.png"} alt="logo" />
        </span>
        <p>{data.description}</p>
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
