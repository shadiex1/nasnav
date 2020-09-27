import React from "react";
import styles from "./PriceCard.module.scss";

const PriceCard = (props) => {
  const { header, info } = props;
  return (
    <div className={styles.Card}>
      <div className={[styles.cardSide, styles.cardSideFront].join(" ")}>
        <h2>{header.type}</h2>
        <div className={styles.priceBox}>
          <span className={styles.price}>{header.price}</span>
          <span className={styles.per}>per month</span>
        </div>
        <ul>
          {info.map((feature) => (
            <li>{feature.title}</li>
          ))}
        </ul>
        <button className={styles.getStarted}>
          <img src="/home/assets/Menu/layer-2@3x.png" /> Get Started
        </button>
      </div>
    </div>
  );
};
export default PriceCard;