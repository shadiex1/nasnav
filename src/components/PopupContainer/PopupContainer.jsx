import React from "react";
import { Component } from "react";
import styles from "./PopupContainer.module.scss";
import YoutubeVideoSlide from "../YoutubeVideoSlide/YoutubeVideoSlide"
class PopupContainer extends Component {
  componentDidMount() {
    const { open } = this.props;
    document.body.style.overflow = "hidden !important";

      
  }
  // componentDidUpdate() {
  //   const { open } = this.props;
  //   if (open) {
  //     document.body.style.overflow = "hidden";
  //   } else document.body.style.overflow = "unset";
  // }
  

  render() {
    const {toggle,open}=this.props
    return (
      open && (
        <div className={styles.PopupContainer}>
          {/* {console.log(this.props)} */}
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