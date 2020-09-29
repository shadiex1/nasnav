import React from "react";
import styles from "./Arrow.module.scss";
import {RightArrowWide} from "../SvgIcons/SvgIcons"
const Arrow = (props) => {
  const { onClick } = props;

  return props.rotate ? (
    <div onClick={onClick} className={styles.next}>
      <RightArrowWide />
    </div>
  ) : (
    <div onClick={onClick} className={styles.prev}>
      <RightArrowWide />
    </div>
  );
};

export default Arrow;
