import React from "react";
import styles from "./FormBtn.module.scss";

const FormBtn = (props) => {
  const { data, img, active } = props;
  let stylesArr = [styles.FormBtn];
  const clicked = () => {
    active();
    stylesArr.push(styles.clicked);
  };

  return (
    <button
      onClick={clicked}
      style={{
      }}
      className={stylesArr.join(' ')}
    >
      {img ? <img src={img} alt="logo" /> : <p>{data}</p>}
    </button>
  );
};

export default FormBtn;
