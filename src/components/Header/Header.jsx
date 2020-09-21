import React from "react";
import styles from "./Header.module.scss";
import { Component } from "react";
import Menu from "../Menu/Menu";
import Showcase from "../Showcase/Showcase";
import EllipseContainer from "../Ellipse/EllipseContainer/EllipseContainer";
class Header extends Component {
  render() {
    const { ShowcaseData } = this.props;
    return (
      <div className={styles.Header}>
        <Menu />
        <Showcase data={ShowcaseData} />
        <EllipseContainer />
      </div>
    );
  }
}

export default Header;
