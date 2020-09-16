import React from "react";
import styles from "./Menu.module.scss";
import { Component } from "react";
import Ellipse from "../Ellipse/Ellipse";

class Menu extends Component {
  render() {
    return (
      <div className={styles.MenuContainer}>
        <div className={styles.Menu}>
          <div className={styles.logoContainer}>
            <img src={"/assets/Menu/layer-1@3x.png"} alt="logo" />
          </div>
          <div className={styles.navigation}>
            <ul>
              <div className={styles.navigationList}>
                 {/* <li className={styles.link}>How it work </li>
              <li className={styles.link}> Start Selling</li> */}
              <li className={styles.link}>Pricing</li>
              <li className={styles.link}>Contact us</li>
              </div>
             
              <li className={styles.btn}>Shop Login</li>
              <li className={[styles.btn, styles.gradientBtn].join(" ")}>
                <img src={"/assets/Menu/layer-2@3x.png"} /> Get Started
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
