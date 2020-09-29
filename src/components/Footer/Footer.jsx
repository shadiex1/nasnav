import React from "react";
import styles from "./Footer.module.scss";
import {
  SendIcon,
  FaceBookIcon,
  LinkdInIcon,
  YoutubeIcon,
} from "../SvgIcons/SvgIcons";
const Footer = (props) => {
  return (
    <React.Fragment>
      <div className={styles.Footer}>
        <img
          src={process.env.PUBLIC_URL + "/assets/layer-1.png"}
          alt="nasnav logo"
        />
        <div className={styles.newsletter}>
          <input placeholder="Subscribe to nasnav newsletter" type="text" />
          <SendIcon />
        </div>
        <div className={styles.icons}>
          <a
            href="https://www.facebook.com/NasNavUK/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaceBookIcon />
          </a>
          {/* <TwitterIcon /> */}
          <a
            href="https://www.linkedin.com/company/nasnavuk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkdInIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UCKCRRH8cIROaS_0K9ymw36A/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
      <div className={styles.copyrights}>
        <p>&#169; 2020 NasNav. All rights reserved.</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
