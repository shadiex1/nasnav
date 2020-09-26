import React from "react";
import styles from "./MenuSidebar.module.scss";
import Backdrop from "../Backdrop/Backdrop"
// import {
//   CloseIcon,
//   CartIcon,
//   HeartIcon,
//   UserIcon,
//   AngelRightThin,
// } from "../../Svg/Svg";
import{CloseIcon} from "../SvgIcons/SvgIcons"
import { Link } from "react-router-dom";
import { Component } from "react";
// import AccountOptions from "../accountOptions/accountOptions";

class MenuSidebar extends Component {
  state = {
    showMenuSidebar: false,
  };
  componentDidUpdate() {
    if (this.props.open) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";
  }
  showMenuSidebarToggleHandler = () => {
    this.setState((prevState) => {
      return { showMenuSidebar: !prevState.showMenuSidebar };
    });
  };
  showMenuSidebarClosedHandler = () => {
    this.setState({ showMenuSidebar: false });
  };
  componentWillUnmount () {
  }
  render() {
    let attachdstyles = [styles.sidebar, styles.Close];
    if (this.props.open) {
      attachdstyles = [styles.sidebar, styles.Open];
    }

    const { closed, open } = this.props;

    return (
      <React.Fragment>
        {/* <Backdrop show={open} clicked={closed} /> */}
        <div className={attachdstyles.join(" ")}>
          <div className={styles.title}>
            <img src="/home/assets/layer-1.png" alt="navlogo" />
            <div className={styles.close} onClick={closed}>
              <CloseIcon />
            </div>
          </div>
          <div className={styles.navigation}>
            <ul>
              {/* <div className={styles.navigationList}> */}
              <Link to="/prices" onClick={closed} className={styles.link}>
                <li>Pricing</li>
              </Link>
              <Link to="/contact" onClick={closed} className={styles.link}>
                <li>Contact us</li>
              </Link>
              {/* </div> */}

              <Link
                to="/getstarted"
                className={styles.link}
                onClick={closed}
                // className={[styles.btn, styles.gradientBtn].join(" ")}
              >
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
