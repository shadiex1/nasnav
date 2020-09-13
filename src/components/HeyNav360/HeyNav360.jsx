import React, { Component } from "react";
import styles from "./HeyNav360.module.scss";
import { MagicIcon, RightArrowWide } from "../SvgIcons/SvgIcons";

class HeyNav360 extends Component {
  render() {
    return (
      <div className={styles.HeyNav360}>
        <div className={styles.description}>
          <h2>
            Impress Your <span>customers</span>
          </h2>
          <span className={styles.subtitle}>
            say hey to Nav360
            <img src={"/assets/Gif sections/layer-104@3x.png"} alt="logo" />
          </span>
          <p>
            A unique buying experience that makes you the strongest among your
            competitors in the market Through a completely real buying
            experience, the user is now entering your branches and they are
            closed.
          </p>
          <p className={styles.examples}>see real examples <RightArrowWide/> </p>
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
                    backgroundImage: `url("/assets/layer-106.png")`,
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
            src={"/assets/01-view-copy.png"}
            alt="mobile screen"
            className={styles.mobileScreen}
          />
        </div>
      </div>
    );
  }
}

export default HeyNav360;
