import React, { Component } from "react";
import styles from "./Contact.module.scss";
import Menu from "../../components/Menu/Menu";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ContactForm from "../../components/ContactForm/ContactForm";
class Contact extends Component {
  state = {
    ContactInfo: [
      {
        title: "Egypt",
        list: ["Franchising support", "+01206411114", "franchising@nasnav.com"],
      },
      {
        title: "Saudi Arabia",
        list: ["Franchising support", "+01206411114", "franchising@nasnav.com"],
      },
      {
        title: "Nigeria",
        list: ["Franchising support", "+01206411114", "franchising@nasnav.com"],
      },
      {
        title: "Poland",
        list: ["Franchising support", "+01206411114", "franchising@nasnav.com"],
      },
    ],
  };
  render() {
    return (
      <div className={styles.Contact}>
        <div className={styles.menu}>
          <Menu white />
        </div>
        <div className={styles.flexContainer}>
          <ContactInfo data={this.state.ContactInfo} />
          <ContactForm/>
        </div>
      </div>
    );
  }
}

export default Contact