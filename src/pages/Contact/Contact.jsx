import React, { Component } from "react";
import styles from "./Contact.module.scss";
import Menu from "../../components/Menu/Menu";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ContactForm from "../../components/ContactForm/ContactForm";
import FullScreenWrapper from "../../components/FullScreenContainer/FullScreenWrapper";
class Contact extends Component {
  state = {
    ContactInfoData: [
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
    const { ContactInfoData } = this.state;
    return (
      <div className={styles.Contact}>
        <FullScreenWrapper className={styles.menu}>
          <Menu white />
        </FullScreenWrapper>
        <div className={styles.flexContainer}>
          <ContactInfo data={ContactInfoData} />
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
