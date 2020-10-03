import React, { Component } from "react";
import styles from "./Panorama.module.scss";
import {CloseIcon, closeIcon} from "../SvgIcons/SvgIcons"
class Panorama extends Component {
  constructor(props) {
    super(props);
    this.ThreeSixtyPanorama = React.createRef();
  }
  render() {
    const {url,close}=this.props
    return (
      <div className={styles.Panorama}>
        <div className={styles.ThreeSixtyPanorama}>
          <div onClick={close} className={styles.IconContainer}>
            <CloseIcon />
          </div>
          <iframe
            title="nasnav"
            ref={this.ThreeSixtyPanorama}
            src={url}
            // src={`https://www.youtube.com/embed/8V1LI_EwGUM?rel=0`}
            frameBorder="0"
            allowFullScreen="allowfullscreen"
          />
        </div>
      </div>
    );
  }
}

export default Panorama