import React from "react";
import * as styles from "./StoresSkeleton.module.scss";

const StoresSkeleton = ({ children, leftColumn, rightColumn }) => {
  let leftColumnChildren = [],
    rightColumnChildren = [],
    columnArray = [];
  const childrenArray = children.length ? children : [children];
  if (leftColumn && leftColumn.length > 0) {
    columnArray = leftColumn;
  } else if (rightColumn && rightColumn.length > 0) {
    columnArray = rightColumn;
  } else {
    columnArray = childrenArray.map((value, ndx) => ndx);
  }
  childrenArray.forEach((element, ndx) => {
    if (columnArray.findIndex((value) => value === ndx) !== -1) {
      leftColumnChildren.push(element);
    } else {
      rightColumnChildren.push(element);
    }
  });

  return (
    <div className={styles.StoresSkeleton}>
      <div className={styles.leftColumn}>{leftColumnChildren}</div>
      <div className={styles.mainColumn}>{rightColumnChildren}</div>
    </div>
  );
};

export default StoresSkeleton;
