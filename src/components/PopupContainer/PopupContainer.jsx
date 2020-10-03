import React from "react";
import { Component } from "react";
import styles from "./PopupContainer.module.scss";
import YoutubeVideoSlide from "../YoutubeVideoSlide/YoutubeVideoSlide"
class PopupContainer extends Component {
  render() {
    const {toggle,open}=this.props
    return (
      open && (
        <div className={styles.PopupContainer}>
          <div onClick={toggle} className={styles.overlay}></div>
          <div className={styles.videoContainer}>
            <YoutubeVideoSlide videoUrl="8V1LI_EwGUM" />
          </div>
        </div>
      )
    );
    
   
    
  }
}

export default PopupContainer