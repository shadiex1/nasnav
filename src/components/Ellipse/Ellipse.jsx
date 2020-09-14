import React from "react";
import styles from "./Ellipse.module.scss";

const Ellipse = (props) => {
  const { top, left, width, height, color, right } = props;
  return (
    <div
      style={{
        top: `${top}`,
        left: `${left}`,
        width: `${width}`,
        height: `${height}`,
        backgroundColor: `${color}`,
        right: `${right}`,
      }}
      className={styles.Ellipse}
    ></div>
  );
};

export default Ellipse;
