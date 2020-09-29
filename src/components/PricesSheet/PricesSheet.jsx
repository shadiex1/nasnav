import React from "react";
import styles from "./PricesSheet.module.scss";
import { Check } from "../SvgIcons/SvgIcons";
import { Link } from "react-router-dom";

const PricesSheet = (props) => {
  const { data } = props;

  return (
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
          <div className={styles.plansContainer}>
            {data.PricesPlan.map((plan) => (
              <div className={styles.plan}>
                <p className={styles.title}>{plan.type}</p>
                <span className={styles.price}>{plan.price}</span>
                <p className={styles.per}>Per month</p>

                <Link to="/getstarted" className={styles.getStarted}>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/Menu/layer-2@3x.png"} alt="get started"
                  />{" "}
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.Services}>
        <div className={styles.title}>
          <p>User interface</p>
        </div>

        {data.Features.map((feature) => {
          return (
            <div className={styles.feature}>
              <p>{feature.title}</p>
              <div className={styles.ticksParent}>
                {[...Array(feature.icons)].map(
                  (value = undefined, index = 4) => (
                    <div className={styles.tickContainer}>
                      <div className={styles.container}>
                        <Check />
                      </div>
                    </div>
                  )
                )}
              </div>
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
              <p>{feature.title}</p>
              <div className={styles.ticksParent}>
                {[...Array(feature.icons)].map(
                  (value = undefined, index = 4) => (
                    <div className={styles.tickContainer}>
                      <div className={styles.container}>
                        <Check />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricesSheet;
