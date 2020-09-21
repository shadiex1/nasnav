import React from "react";
import styles from "./DashboardOverview.module.scss";

const DashboardOverview = (props) => {
  const { data } = props;

  return (
    <div className={styles.DashboardOverviewPattern}>
      <div className={styles.DashboardOverview}>
        <h3>
          {data.title} <span>{data.highlighted}</span>
        </h3>
        <p>{data.description}</p>
        <div className={styles.features}>
          {data.list.map((feature) => (
            <div className={styles.feature}>
              <div className={styles.imgContainer}>
                <img src={feature.img} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DashboardOverview;
