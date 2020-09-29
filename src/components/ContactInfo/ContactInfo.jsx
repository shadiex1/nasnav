import React from "react";
import styles from "./ContactInfo.module.scss";
import Map from "../Map/Map";
const ContactInfo = (props) => {
  const { data } = props;
  return (
    <div className={styles.ContactInfo}>
      <div className={styles.map}>
        <Map mapImg={process.env.PUBLIC_URL + "/assets/layer-184.png"} />
      </div>
      <div className={styles.information}>
        <h2>Contact information</h2>
        <div className={styles.branches}>
          {data.map((branch,i) => (
            <div key={i} className={styles.branch}>
              <h3>{branch.title}</h3>
              <ul>
                {branch.list.map((item,i) => (
                  <li key={i}>{item}</li>
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
