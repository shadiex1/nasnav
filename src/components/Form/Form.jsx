import React, { Component } from "react";
import styles from "./Form.module.scss";
import FormInput from "./FormInput/FormInput";
import {Link} from "react-router-dom"
   class Form extends Component {
     state = {
       StoreName: "",
       Email: "",
       Phone: "",
       Name: "",
       complete:false
     };

     handleSubmit = async (e) => {
       e.preventDefault();
       const { displayName, email, password, confirmPassword } = this.state;
       if (password !== confirmPassword) {
         alert("passwords don't match");
         return;
       }

     };

     checkData = () => {
       const { StoreName, Email, Phone, Name } = this.props;
       if (StoreName && Email && Phone && Name !== " ") {
         this.setState({complete:true})
       }
     
     }
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
             {console.log(this.state,"al state")}
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

             <Link to="/form" >
               Next
             </Link>
           </form>
         </div>
       );
     }
   };

  export default Form