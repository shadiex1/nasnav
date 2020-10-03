import React, { Component } from "react";
import styles from "./ContactForm.module.scss";
import FormInput from "../Form/FormInput/FormInput";
class ContactForm extends Component {
  state = {
    Name: "",
    Title: "",
    Phone: "",
    Subject: "",
  };

  handleSubmit = async (e) => {
    // e.preventDefault();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { Name, Title, Phone, Subject } = this.state;
    return (
      <div className={styles.Form}>
        <h2 className={styles.title}>
          <span>Get</span> in touch with us now
        </h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="Name"
            value={Name}
            onChange={this.handleChange}
            label="Your name"
            required
          />
          <FormInput
            type="number"
            name="Phone"
            value={Phone}
            onChange={this.handleChange}
            label="Phone number"
            required
          />
          <FormInput
            type="text"
            name="Title"
            value={Title}
            onChange={this.handleChange}
            label="title"
            required
          />
          <FormInput
            type="text"
            name="Subject"
            value={Subject}
            onChange={this.handleChange}
            label="Subject"
            required
            height="100px"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
