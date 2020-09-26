import React from "react";
import styles from "./Menu.module.scss";
import { Component } from "react";
import { Link } from "react-router-dom";
import MenuSidebar from "../MenuSidebar/MenuSidebar";
class Menu extends Component {
  state = {
    showMenuSidebar: false,
  };
  showMenuSidebarToggleHandler = () => {
    this.setState((prevState) => {
      return { showMenuSidebar: !prevState.showMenuSidebar };
    });
  };
  showMenuSidebarClosedHandler = () => {
    this.setState({ showMenuSidebar: false });
  };
  render() {
    const { white } = this.props;
    const { showMenuSidebar } = this.state;
    return (
      <React.Fragment>
        <MenuSidebar
          open={showMenuSidebar}
          closed={this.showMenuSidebarClosedHandler}
        />
        <div className={styles.Menu}>
          <div
            onClick={this.showMenuSidebarToggleHandler}
            className={styles.toggler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link to="/" className={styles.logoContainer}>
            {white ? (
              <img src={"/home/assets/logo-white.png"} alt="logo" />
            ) : (
              <img src={"/home/assets/Menu/layer-1@3x.png"} alt="logo" />
            )}
          </Link>
          <div className={styles.navigation}>
            <ul>
              <div className={styles.navigationList}>
                <Link to="/prices" className={styles.link}>
                  <li>Pricing</li>
                </Link>
                <Link to="/contact" className={styles.link}>
                  <li>Contact us</li>
                </Link>
              </div>

              <Link
                to="/getstarted"
                className={[styles.btn, styles.gradientBtn].join(" ")}
              >
                <img src={"/home/assets/Menu/layer-2@3x.png"} /> Get Started
              </Link>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
