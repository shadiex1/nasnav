import React, { Component } from "react";
import styles from "./HeyNavTheme.module.scss";
import { MagicIcon } from "../SvgIcons/SvgIcons";

class HeyNavBox extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.HeyNavTheme}>
        <div className={styles.description}>
          <h2>
            {data.title[0]}
            <span>{data.title[1]}</span>
          </h2>
          <span className={styles.subtitle}>
            {data.subtitle}
            <img
              src={"/home/assets/Gif sections/layer-104@3x.png"}
              alt="logo"
            />
          </span>
          <p>{data.description}</p>
          <ul className={styles.list}>
            {data.lists.map((item) => (
              <li>
                <img src={item.leftImg} alt="icon" />
                <span>{item.title}</span>

                {item.rightImgs &&
                  item.rightImgs.map((img) => (
                    <img className={styles.left} src={img} alt="logo" />
                  ))}
              </li>
            ))}
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
            backgroundImage: `url("/home/assets/HeyNavTheme/layer-118.png")`,
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
            src={data.MobileScreen}
            alt="mobile screen"
            className={styles.mobileScreen}
          />
        </div>
      </div>
    );
  }
}

export default HeyNavBox;
