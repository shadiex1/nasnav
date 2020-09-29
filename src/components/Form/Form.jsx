import React, { Component } from "react";
import styles from "./Form.module.scss";
import FormInput from "./FormInput/FormInput";
// import { Link } from "react-router-dom";
import {withRouter} from "react-router-dom"
class Form extends Component {
  state = {
    StoreName: "",
    Email: "",
    Phone: "",
    Name: "",
    complete: false,
  };

  handleSubmit = async (e) => {
    // e.preventDefault();
    // this.checkData()

    // console.log(this.state)
    const { complete } = this.state;
    complete && this.props.history.push("/form")
  };

  checkData = () => {
    const { StoreName, Email, Phone, Name } = this.state;
    if (StoreName && Email && Phone && Name) {
      this.setState({ complete: true });
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
        this.checkData();
    console.log(this.state);


  };
  render() {
    const { StoreName, Email, Phone, Name } = this.state;
    return (
      <div className={styles.Form}>
        <h2 className={styles.title}>
          <span>Get</span> Started in seconds
        </h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="StoreName"
            value={StoreName}
            onChange={this.handleChange}
            label="Store Name"
            required
          />
          <FormInput
            type="email"
            name="Email"
            value={Email}
            onChange={this.handleChange}
            label="Your email address"
            required
          />
          <FormInput
            type="number"
            name="Phone"
            value={Phone}
            onChange={this.handleChange}
            label="Your Phone Number"
            required
          />
          <FormInput
            type="text"
            name="Name"
            value={Name}
            onChange={this.handleChange}
            label="Your Name"
            required
          />

          <button onClick={this.handleSubmit} className={styles.next}>
                      {/* <Link to="/form">Next</Link> */}
            next
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Form) ;
