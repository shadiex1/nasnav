import React from "react";
import styles from "./HowTo.module.scss";

const HowTo = (props) => {
  const { data } = props;
  return (
    <div className={styles.HowTo}>
      <div className={styles.description}>
        <h2 className={styles.mainTitle}>
          {data.title[0]} <span>{data.title[1]}</span>
        </h2>
        <h3 className={styles.firstSubtitle}>{data.firstSubtitle}</h3>
        <p className={styles.firstSubParagraph}>{data.firstParagraph}</p>
        <h3 className={styles.secondSubtitle}>{data.secondSubtitle}</h3>
        <p className={styles.secondParagraph}>{data.secondParagraph}</p>
      </div>
      <div className={styles.imgSectionContainer}>
        <div className={styles.imgSection}>
          <div className={styles.check}>
            <img src={process.env.PUBLIC_URL + "/assets/HowTo/google-sheets@3x.png"} alt="simCard" />
            <p>
              <span>{data.check[0]}</span> {data.check[1]}
            </p>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.analyze}>
              <img src={process.env.PUBLIC_URL + "/assets/HowTo/647.png"} alt="upload" />
              <p>
                <span>{data.analyze[0]}</span> {data.analyze[1]}
              </p>
            </div>
            <div className={styles.upload}>
              <img src={process.env.PUBLIC_URL + "/assets/HowTo/8.png"} alt="upload" />
              <p>
                <span>{data.upload[0]}</span> {data.upload[1]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
