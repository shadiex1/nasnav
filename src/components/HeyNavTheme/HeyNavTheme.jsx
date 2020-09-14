import React, { Component } from "react";
import styles from "./HeyNavTheme.module.scss";
import { MagicIcon } from "../SvgIcons/SvgIcons";

class HeyNavBox extends Component {
  render() {
    return (
      <div className={styles.HeyNavTheme}>
        <div className={styles.description}>
          <h2>
            Design Your site <span>easily</span>
          </h2>
          <span className={styles.subtitle}>
            say hey to NavTheme
            <img src={"/assets/Gif sections/layer-104@3x.png"} alt="logo" />
          </span>
          <p>
            Through the dashboard you can easily build your site design and
            choose between multiple formats to suit your business competence.
          </p>
          <ul className={styles.list}>
            <li>
              Payment methods
              <img src={"/assets/HeyNavTheme/layer-111.png"} />
              <img src={"/assets/HeyNavTheme/layer-112.png"} />
              <img src={"/assets/HeyNavTheme/layer-113.png"} />
            </li>
            <li>
              Shipping methods
              <img src={"/assets/HeyNavTheme/layer-108.png"} />
              <img src={"/assets/HeyNavTheme/layer-109.png"} />
              <img src={"/assets/HeyNavTheme/layer-110.png"} />
            </li>
            <li className={styles.blueFilter}>
              A totally unique buying experience
              <img src={"/assets/HeyNavTheme/arrow.png"} />
            </li>
            {/* <li>Your products in google map <MagicIcon/></li> */}
          </ul>
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
            backgroundImage: `url("/assets/HeyNavTheme/layer-118.png")`,
          }}
          className={styles.imgContainer}
        >
          {/* <img className={styles.background} src={"/assets/Gif sections/layer-106@3x.png"} alt="background"/> */}

          <img
            src={"/assets/Gif sections/i-phone.png"}
            alt="mobile Cover"
            className={styles.mobileCover}
          />
          <img
            src={"/assets/HeyNavTheme/layer-119.png"}
            alt="mobile screen"
            className={styles.mobileScreen}
          />
        </div>
      </div>
    );
  }
}

export default HeyNavBox;
