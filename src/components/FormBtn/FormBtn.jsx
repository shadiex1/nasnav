import React from "react";
import { Component } from "react";
import styles from "./FormBtn.module.scss";

class FormBtn extends Component {

  render() {
    const { data, img, active ,selected} = this.props;
 
    return (
      <button
        onClick={active}
        style={{
          backgroundColor: selected && " #13d79d",
          color: "white",
        }}
        className={styles.FormBtn}
      >
        {img ? (
          <img src={img} alt="logo" />
        ) : (
          <p
            style={{
              color: selected && "white",
            }}
          >
            {data}
          </p>
        )}
      </button>
    );
  }
}

export default FormBtn;
