import React from "react"
import styles from "./Benefits.module.scss";

const Benefits = props => {
  return (
    <div className={styles.Benefits}>
      <div className={styles.content}>
        <div className={styles.description}>
          <h3>
            Lots of Benefits on your site <span>for free</span>
          </h3>
          <div className={styles.sectionsContainer}>
            <div className={styles.section}>
              <img src="assets/Benefits/review.png" alt="icon" />
              <div className={styles.container}>
                <h3>shopping cart</h3>
                <p>
                  A cart or dray is a vehicle designed for transport two wheels
                  and normally pulled
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <img src="assets/Benefits/open-24-hours.png" alt="icon" />
              <div className={styles.container}>
                <h3>Branch Location</h3>
                <p>
                  A cart or dray is a vehicle designed for transport two wheels
                  and normally pulled
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <img src="assets/Benefits/cycle.png" alt="icon" />
              <div className={styles.container}>
                <h3>Payment Online</h3>
                <p>
                  A cart or dray is a vehicle designed for transport two wheels
                  and normally pulled
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <img src="assets/Benefits/promotion.png" alt="icon" />
              <div className={styles.container}>
                <h3>All Products</h3>
                <p>
                  A cart or dray is a vehicle designed for transport two wheels
                  and normally pulled
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imgSection}>
          <img src={"/assets/Showcase/group-33@3x.png"} alt="mobile screen" />
        </div>
      </div>
    </div>
  );
}

export default Benefits