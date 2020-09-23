import React from "react";
import styles from "./PricesSheet.module.scss";
import {Check } from "../SvgIcons/SvgIcons"
const PricesSheet = props => {
  const { data } = props
  
  return (
    <div className={styles.PricesSheet}>
      <h3 className={styles.header}>
        <span>
          {" "}
          <span className={styles.blue}>Prices</span> to match the
        </span>{" "}
        size of your busisness
      </h3>
      <div className={styles.sheet}>
        <div className={styles.prices}>
         
          <div className={styles.plans}>
            <div className={styles.choose}>
            <p>choose the best way to pay</p>
            <div className={styles.options}>
              <button className={styles.option}>Monthly </button>
              <button className={styles.option}>Yearly</button>
            </div>
          </div>
            {data.PricesPlan.map((plan) => (
              <div className={styles.plan}>
                <p className={styles.title}>{plan.type}</p>
                <span className={styles.price}>{plan.price}</span>
                <p className={styles.per}>Per month</p>
                <button className={styles.getStarted}>Get Started</button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.Services}>
          <div className={styles.title}>
            <p>User interface</p>
          </div>

          {data.Features.map((feature) => {
            return (
              <div className={styles.feature}>
                {feature.title}
                {[...Array(feature.icons)].map(
                  (value = undefined, index = 4) => (
                    // <div style={{width:"100%"}}>
                    <Check />
                      // </div>
                  )
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.Services}>
          <div className={styles.title}>
            <p>Services</p>
          </div>

          {data.Features.map((feature) => {
            return (
              <div className={styles.feature}>
                {feature.title}
                {[...Array(feature.icons)].map(
                  (value = undefined, index = 4) => (
                    <Check />
                  )
                )}
              </div>
            );
          })}
        </div>

        {/* //////////// */}
      </div>
    </div>
  );
}

export default PricesSheet