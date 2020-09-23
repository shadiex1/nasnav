import React from "react";
import styles from "./PriceCard.module.scss";

const PriceCard = props => {
  return (
    <div className={styles.Card}>
      <div className={[styles.cardSide, styles.cardSideFront].join(" ")}>
        <h2>premium</h2>
        <div className={styles.priceBox}>
          <span className={styles.price}>$45</span>
          <span className={styles.per}>per month</span>
        </div>
        <ul>
          <li>Credit and debit cards</li>
          <li>Credit and debit cards</li>
          <li>Credit and debit cards</li>
          <li>Credit and debit cards</li>
          <li>Credit and debit cards</li>
        </ul>
        <button className={styles.getStarted}>
          <img src={"/assets/Menu/layer-2@3x.png"} /> Get Started
        </button>
      </div>
    </div>
  );
}
export default PriceCard