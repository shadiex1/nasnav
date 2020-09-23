import React from "react";

import { joinStyles } from "../Utils/HelperFunctions";

import * as styles from "./FullScreenWrapper.module.scss";

const FullScreenWrapper = ({ children, customStyles, className, style }) => {
  const stylesArray = [styles].concat(customStyles ? customStyles : []);

  return (
    <div
      className={joinStyles("FullScreenWrapper", stylesArray, [className])}
      style={style}
    >
      <div className={joinStyles("maxWidth", stylesArray)}>{children}</div>
    </div>
  );
};

export default FullScreenWrapper;
