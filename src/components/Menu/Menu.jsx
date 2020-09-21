import React from "react";
import styles from "./Menu.module.scss";
import { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    const {white}=this.props
    return (
      <div className={styles.Menu}>
        <Link to="/" className={styles.logoContainer}>
          {white ? (
            <img src={"/assets/logo-white.png"} alt="logo" />
          ) : (
            <img src={"/assets/Menu/layer-1@3x.png"} alt="logo" />
          )}
        </Link>
        <div className={styles.navigation}>
          <ul>
            <div className={styles.navigationList}>
              <li className={styles.link}>Pricing</li>
              <li className={styles.link}>Contact us</li>
            </div>

            <Link
              to="/getstarted"
              className={[styles.btn, styles.gradientBtn].join(" ")}
            >
              <img src={"/assets/Menu/layer-2@3x.png"} /> Get Started
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
