import React from "react";
import { Component } from "react";
import styles from "./FormBtn.module.scss";

class FormBtn extends Component {
  state = {
    clickedBtn: false,
  };
  render() {
    const { data, img, active,scroll ,selected} = this.props;
    const { clickedBtn } = this.state;
    const clicked = () => {
      active();
      scroll()
      this.setState({
        clickedBtn: !clickedBtn,
      });
    };
    return (
      <button
        onClick={clicked}
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
