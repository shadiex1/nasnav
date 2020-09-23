import React, { Component } from "react";
import styles from "./FormPage.module.scss";
import FormBtn from "../../components/FormBtn/FormBtn";
import { Link } from "react-router-dom";
class FormPage extends Component {
  state = {
    Form: [
      {
        title: "Do you have a physical retail store?",
        options: ["yes", "no"],
      },
      {
        title: "What type of products do you sell?",
        options: [
          "do you use manufacturers' (UPC or EAN) barcodes?",
          "Other products",
        ],
      },
      {
        title: "What's the brand of your Point of Sale?",
        options: [
          "/assets/form brands/layer-125.png",
          "/assets/form brands/kindpng-1030408.png",
          "/assets/form brands/layer-128.png",
          "/assets/form brands/layer-129.png",
          "/assets/form brands/layer-127.png",
          "/assets/form brands/layer-126.png",
        ],
        imgs: true,
      },
      
      {
        title: "Great! Do you use it at your POS?",
        options: ["yes", "no"],
      },{
        title: "Great! Do you use it at your POS?",
        options: ["My scanner is connected to my POS", "My scanner is wireless"],
      },
      {
        title: "do you use manufacturers' (UPC or EAN) barcodes?",
        options: ["yes", "no","Not sure"],
      },
    ],
  };
  render() {
    const { Form } = this.state;
    return (
      <div className={styles.FormPage}>
        <div className={styles.header}>
          {" "}
          <p onClick={() => this.props.history.goBack()}>Back</p>
          <div className={styles.menu}>
            <Link to="/">
              <img src={"/assets/logo-white.png"} alt="logo" />
            </Link>
          </div>
          <h3>
            <span>Thank you</span>, we have some questions so we can get in
            touch with you.
          </h3>
        </div>

        <div className={styles.sectionsContainer}>
          {Form.map(section => (
            <div className={styles.section}>
              <p className={styles.title}>{section.title}</p>
              {/* {section.imgs ? <FormBtn img={}} */}
              {section.options.map(option => {
                return (
                 section.imgs ? (<FormBtn img={option}/>) : (<FormBtn data={option}/>)

                )
              })}
              </div>
          ))}
          {/* <div className={styles.section}>
            <p>Do you have a physical retail store ?</p>
            <FormBtn data="Yes" /> <FormBtn data="No" />
          </div> */}
        </div>
      </div>
    );
  }
}

export default FormPage;
