import React, { Component } from "react";
import styles from "./Showcase.module.scss";
import { SearchIcon } from "../SvgIcons/SvgIcons";

const iconPath = process.env.PUBLIC_URL + "/assets/icons";

class Showcase extends Component {
  render() {
    return (
      <div className={styles.Showcase}>
        <div className={styles.showcaseContainer}>
          <div className={styles.searchbar}>
            <img src={"/assets/Showcase/layer-15@3x.png"} alt="logo" />
            {/* <span>Find your products on goolge</span> */}
            <input type="text" placeholder="Find your products on goolge" />
            <div className={styles.iconConatiner}>
              <SearchIcon />
            </div>
          </div>
          <div className={styles.title}>
            <h2>
              sell more products with <span>google</span>
            </h2>
          </div>
          <div className={styles.btn}>
            <img src={"/assets/Menu/layer-2@3x.png"} /> Watch how to do it
          </div>
          <div className={styles.gallery}>
            <img
              className={styles.sideLeft}
              src={"/assets/Showcase/rounded-rectangle-41-copy@3x.png"}
              alt="mobile screen"
            />
            <img src={"/assets/Showcase/group-33@3x.png"} alt="mobile screen" />
            <img
              className={styles.sideRight}
              src={"/assets/Showcase/layer-81@3x.png"}
              alt="mobile screen"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;
