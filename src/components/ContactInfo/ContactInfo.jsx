import React from "react";
import styles from "./ContactInfo.module.scss";
import Map from "../Map/Map";
const ContactInfo = (props) => {
  const { data } = props;
  return (
    <div className={styles.ContactInfo}>
      <div className={styles.map}>
        <Map mapImg="/home/assets/layer-184.png" />
      </div>
      <div className={styles.information}>
        <h2>Contact information</h2>
        <div className={styles.branches}>
          {data.map((branch) => (
            <div className={styles.branch}>
              <h3>{branch.title}</h3>
              <ul>
                {branch.list.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
