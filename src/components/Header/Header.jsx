import React from "react";
import styles from "./Header.module.scss";
import { Component } from "react";
import Menu from "../Menu/Menu";
import Showcase from "../Showcase/Showcase";
import EllipseContainer from "../Ellipse/EllipseContainer/EllipseContainer";
class Header extends Component {
  render() {
    const { ShowcaseData, togglePopup, showPopup,ShowMap,Map } = this.props;
    return (
      <div className={styles.Header}>
        <Menu showPopup={showPopup} showMap={Map} />
        <Showcase
          showMap={(searchQuery) => ShowMap(searchQuery)}
          data={ShowcaseData}
          togglePopup={togglePopup}
        />
        <EllipseContainer />
      </div>
    );
  }
}

export default Header;
