import React from "react";
import styles from "./OurPartners.module.scss";

const OurPartners = (props) => {
  const { data } = props;
  return (
    <div className={styles.OurPartners}>
      <h3>
        {data.title[0]} <span>{data.title[1]}</span>
      </h3>
      <p> {data.subtitle}</p>

      <div className={styles.PartnersLogos}>
        {data.logos.map((logo) => (
          <img src={logo} alt="logo" />
        ))}
      </div>
      <div className={styles.banner}>
        <h3>
          {data.bannerTitle[0]} <span>{data.bannerTitle[1]}</span>
        </h3>
        <div className={styles.btn}>
          <img src={process.env.PUBLIC_URL + "/assets/Menu/layer-2@3x.png"} /> Get Started
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
