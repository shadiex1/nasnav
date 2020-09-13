import React from "react";
import styles from "./OurPartners.module.scss";

const OurPartners = props => {
    return (
      <div className={styles.OurPartners}>
        <h3>
          Our <span>Partners</span>
        </h3>
        <p> Join our famly now wherever you are</p>

        <div className={styles.PartnersLogos}>
          <img src={"/assets/Our partners/layer-110.png"} alt="logo" />
          <img src={"/assets/Our partners/layer-165.png"} alt="logo" />
          <img src={"/assets/Our partners/layer-166.png"} alt="logo" />
          <img src={"/assets/Our partners/layer-163.png"} alt="logo" />
          <img src={"/assets/Our partners/layer-164.png"} alt="logo" />
          <img src={"/assets/Our partners/layer-167.png"} alt="logo" />
        </div>
        <div className={styles.banner}>
          <h3>
            start selling on <span>Google for free</span>
          </h3>
          <div className={styles.btn}>
            <img src={"/assets/Menu/layer-2@3x.png"} /> Get Started
          </div>
        </div>
      </div>
    );
   
}

export default OurPartners