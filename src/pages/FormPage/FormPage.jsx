import React, { Component } from "react";
import styles from "./FormPage.module.scss";
import FormBtn from "../../components/FormBtn/FormBtn";
import {Link} from "react-router-dom"
class FormPage extends Component {
  render() {
    return (
      <div className={styles.FormPage}>
        <div className={styles.header}>            <p onClick={() => this.props.history.goBack()}>Back</p>

          <div className={styles.menu}>
                    <Link to="/" >

              <img src={"/assets/logo-white.png"} alt="logo" />
              </Link>
          </div>
          <h3>
            <span>Thank you</span>, we have some questions so we can get in touch with you.
          </h3>
        </div>

        <div className={styles.section}>
          <p>Do you have a physical retail store ?</p>
          <FormBtn data="Yes" /> <FormBtn data="No" />
        </div>
      </div>
    );
  
  }

}

export default FormPage