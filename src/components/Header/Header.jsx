import React from "react";
import styles from "./Header.module.scss";
import { Component } from "react";
import Menu from "../Menu/Menu";
import Showcase from "../Showcase/Showcase";
import EllipseContainer from "../Ellipse/EllipseContainer/EllipseContainer";
class Header extends Component {
  render() {
    return (
      <div className={styles.Header}>
        <Menu />
        <Showcase />
        <EllipseContainer />
      </div>
    );
  }
}

export default Header;
