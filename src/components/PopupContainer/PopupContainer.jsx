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
            <YoutubeVideoSlide videoUrl="lS8_fhPqApY" />
          </div>
        </div>
      )
    );
    
   
    
  }
}

export default PopupContainer