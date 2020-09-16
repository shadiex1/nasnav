import React from "react";
import styles from "./HowTo.module.scss";

const HowTo = props => {
    return (
      <div className={styles.HowTo}>
        <div className={styles.content}>
          <div className={styles.description}>
            <h2 className={styles.mainTitle}>
              How to get your products to the website ?
            </h2>
            <h3 className={styles.firstSubtitle}>Use a Navbox</h3>
            <p className={styles.firstSubParagraph}>
              A device that is linked to your website each scan that increase
              your appearance.
            </p>
            <h3 className={styles.secondSubtitle}>Use a CSV File</h3>
            <p className={styles.secondParagraph}>
              A device that is linked to your website each scan that increase
              your appearance
            </p>
          </div>
          <div className={styles.imgSectionContainer}>
          <div className={styles.imgSection}>
            <div className={styles.check}>
              <img src="/assets/HowTo/google-sheets@3x.png" alt="simCard" />
              <p>
                <span>Easily check your files and </span> then upload them
              </p>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.analyze}>
              <img src="/assets/HowTo/647.png" alt="upload" />
              <p><span>Analyze</span> CSV file</p>
            </div>
            <div className={styles.upload}>
              <img src="/assets/HowTo/8.png" alt="upload" />
              <p><span>Upload</span> CSV file</p>
            </div>
            </div>
          
          </div>
          </div>
        </div>
      </div>
    );
}

export default HowTo