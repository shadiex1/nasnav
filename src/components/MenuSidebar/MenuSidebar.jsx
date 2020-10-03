import React from "react";
import styles from "./MenuSidebar.module.scss";
import { CloseIcon } from "../SvgIcons/SvgIcons";
import { Link } from "react-router-dom";
import { Component } from "react";

class MenuSidebar extends Component {
  state = {
    showMenuSidebar: false,
  };

  componentDidUpdate() {
    const { open, showPopup, showMap } = this.props;
    if (open || showPopup || showMap) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";
  }
  componentWillUnmount() {
document.body.style.overflow = "auto";
  }
  showMenuSidebarToggleHandler = () => {
    this.setState((prevState) => {
      return { showMenuSidebar: !prevState.showMenuSidebar };
    });
  };
  showMenuSidebarClosedHandler = () => {
    this.setState({ showMenuSidebar: false });
  };
  
  render() {
    const { closed, open } = this.props;

    let attachdstyles = [styles.sidebar, styles.Close];
    if (open) {
      attachdstyles = [styles.sidebar, styles.Open];
    }

    return (
      <React.Fragment>
        <div className={attachdstyles.join(" ")}>
          <div className={styles.title}>
            <img src={process.env.PUBLIC_URL + "/assets/layer-1.png"} alt="navlogo" />
            <div className={styles.close} onClick={closed}>
              <CloseIcon />
            </div>
          </div>
          <div className={styles.navigation}>
            <ul>
              <Link to="/prices" onClick={closed} className={styles.link}>
                <li>Pricing</li>
              </Link>
              <Link to="/contact" onClick={closed} className={styles.link}>
                <li>Contact us</li>
              </Link>

              <Link to="/getstarted" className={styles.link} onClick={closed}>
                <li>Get Started</li>
              </Link>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default MenuSidebar;
