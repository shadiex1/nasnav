import React, { Component } from "react";
import styles from "./Form.module.scss";
import FormInput from "./FormInput/FormInput"
   class Form extends Component {
     state = {
       StoreName: "",
       Email: "",
       Phone: "",
       Name: "",
     };

     handleSubmit = async (e) => {
       e.preventDefault();
       const { displayName, email, password, confirmPassword } = this.state;
       if (password !== confirmPassword) {
         alert("passwords don't match");
         return;
       }

     };

     handleChange = (e) => {
       const { name, value } = e.target;
       this.setState({ [name]: value });
     };
     render() {
       const { StoreName, Email, Phone, Name } = this.state;
       return (
         <div className={styles.Form}>
           <h2 className={styles.title}>
             <span>Get</span> Started in seconds
           </h2>
           <form className="sign-up-form" onSubmit={this.handleSubmit}>
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
             <button>Next</button>
           </form>
         </div>
       );
     }
   };

  export default Form