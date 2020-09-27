import React, { Component } from "react";
import styles from "./HeyNavBox.module.scss";
import {
  GoogleMaps,
  GoogleIcon,
  MapIcon,
  MagicIcon,
} from "../SvgIcons/SvgIcons";
class HeyNavBox extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.HeyNavBox}>
        <div className={styles.description}>
          <h2>
            {data.title[0]} <span>{data.title[1]}</span>
          </h2>
          <span className={styles.subtitle}>
            {data.subtitle}
            <img
              src={process.env.PUBLIC_URL + "/assets/Gif sections/layer-104@3x.png"}
              alt="logo"
            />
          </span>
          <p>{data.description}</p>
          <ul className={styles.list}>
            <li>
              <GoogleMaps />
              {data.list[0]}
            </li>
            <li>
              <GoogleIcon />
              {data.list[1]}
            </li>
            <li className={styles.blueFilter}>
              <MapIcon />
              {data.list[2]}
            </li>
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
            backgroundImage: `url("${data.BackgroundCover}")`,
          }}
          className={styles.imgContainer}
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/Gif sections/i-phone.png"}
            alt="mobile Cover"
            className={styles.mobileCover}
          />
          <img
            src={data.MobileScreen}
            alt="mobile screen"
            className={styles.mobileScreen}
          />
          {/* <img
            src={process.env.PUBLIC_URL + "/assets/invalid-name.png"}
            alt="priceTag"
            className={styles.PriceTag}
          /> */}
        </div>
      </div>
    );
  }
}

export default HeyNavBox;
