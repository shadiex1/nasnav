import React from "react";
import { Component } from "react";
import styles from "./FormBtn.module.scss";

class FormBtn extends Component {
  state = {
    clickedBtn: false,
  };
  render() {
    const { data, img, active } = this.props;
    const { clickedBtn } = this.state;
    const clicked = () => {
      active();
      this.setState({
        clickedBtn: !clickedBtn,
      });
    };
    return (
      <button
        onClick={clicked}
        style={{
          backgroundColor: clickedBtn && " #13d79d",
          color: "white",
        }}
        className={styles.FormBtn}
      >
        {img ? (
          <img src={img} alt="logo" />
        ) : (
          <p
            style={{
              color: clickedBtn && "white",
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
