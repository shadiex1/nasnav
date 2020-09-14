import React from "react";
import styles from "./DashboardOverview.module.scss";

const DashboardOverview = (props) => {
  return (
    <div className={styles.DashboardOverviewPattern}>
      <div className={styles.DashboardOverview}>
        <h3>
          Everything's under <span>your control.</span>
        </h3>
        <p>
          Our team is proud to announce the new sophisticated dashboard for
          which store owners can manage and monitor all key reporting metrics.
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.imgContainer}>
              <img src="/assets/DashobardOverview/planning.png" />
            </div>
            <h3>A real store</h3>
            <p>whole new buying experience that impresses users</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.imgContainer}>
              <img src="/assets/DashobardOverview/layers.png" />
            </div>
            <h3>Payment method</h3>
            <p>whole new buying experience that impresses users</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.imgContainer}>
              <img src="/assets/DashobardOverview/flow.png" />
            </div>
            <h3>On google</h3>
            <p>whole new buying experience that impresses users</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.imgContainer}>
              <img src="/assets/DashobardOverview/problem-solving.png" />
            </div>
            <h3>Good UX</h3>
            <p>whole new buying experience that impresses users</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardOverview;
