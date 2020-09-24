import React, { Component } from "react";
import styles from "./HeyNav360.module.scss";
import { MagicIcon, RightArrowWide } from "../SvgIcons/SvgIcons";

class HeyNav360 extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.HeyNav360}>
        <div className={styles.description}>
          <h2>
            {data.title}
            <span>{data.highlighted}</span>
          </h2>
          <span className={styles.subtitle}>
            {data.subtitle}
            <img
              src={"/home/assets/Gif sections/layer-104@3x.png"}
              alt="logo"
            />
          </span>
          <p>{data.description}</p>
          <p className={styles.examples}>
            <span className={[styles.btn, styles.gradientBtn].join(" ")}>
              <img src={"/home/assets/Menu/layer-2@3x.png"} /> See Examples
            </span>
          </p>
          <div className={styles.magic}>
            <MagicIcon />{" "}
            <p>
              In seconds <span>the magic</span> starts and you get an easy and
              beautiful website
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url("/home/assets/layer-106.png")`,
          }}
          className={styles.imgContainer}
        >
          {/* <img className={styles.background} src={"/assets/Gif sections/layer-106@3x.png"} alt="background"/> */}

          <img
            src={"/home/assets/Gif sections/i-phone.png"}
            alt="mobile Cover"
            className={styles.mobileCover}
          />
          <img
            src={data.img}
            alt="mobile screen"
            className={styles.mobileScreen}
          />
        </div>
      </div>
    );
  }
}

export default HeyNav360;
