import React from "react";
import styles from "./Benefits.module.scss";

const Benefits = (props) => {
  const { data } = props;
  return (
    <div className={styles.Benefits}>
      <div className={styles.description}>
        <h3>
          {data.title} <span>{data.highlighted}</span>
        </h3>
        <div className={styles.sectionsContainer}>
          {data.list.map((section) => (
            <div className={styles.section}>
              <img src={section.img} alt="icon" />
              <div className={styles.container}>
                <h3>{section.title}</h3>
                <p>{section.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.imgSection}>
        <img
          src={process.env.PUBLIC_URL + "/assets/Showcase/group-33@3x.png"}
          alt="mobile screen"
        />
      </div>
    </div>
  );
};

export default Benefits;
