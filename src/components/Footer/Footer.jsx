import React from "react";
import styles from "./Footer.module.scss";
import {
  SendIcon,
  FaceBookIcon,
  TwitterIcon,
  LinkdInIcon,
  YoutubeIcon,
} from "../SvgIcons/SvgIcons";
const Footer = (props) => {
  return (
    <React.Fragment>
      <div className={styles.Footer}>
        <img src={process.env.PUBLIC_URL + "/assets/layer-1.png"} alt="nasnav logo" />
        <div className={styles.newsletter}>
          <input placeholder="Subscribe to nasnav newsletter" type="text" />
          <SendIcon />
        </div>
        <div className={styles.icons}>
          <FaceBookIcon />
          <TwitterIcon />
          <LinkdInIcon />
          <YoutubeIcon />
        </div>
      </div>
      <div className={styles.copyrights}>
        <p>&#169; 2020 NasNav. All rights reserved.</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
