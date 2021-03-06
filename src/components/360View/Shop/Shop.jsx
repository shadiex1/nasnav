import React from "react";

import * as styles from "./Shop.module.scss";
import { InView } from "react-intersection-observer";

const Shop = (props) => {
  const { branchImg, branchName, id, clicked } = props;
  return (
    <InView threshold={0.99} key={id}>
      {({ inView, ref }) => (
        <button
          className={[styles.Shop, !inView && styles.hidden].join(" ")}
          ref={ref}
          // onClick={clicked}
        >
          <div className={styles.innerContainer}>
            <img src={branchImg} alt="branch" />
            <div className={styles.overlayText}>
              <h5>{branchName}</h5>
            </div>
          </div>
        </button>
      )}
    </InView>
  );
};

export default Shop;
