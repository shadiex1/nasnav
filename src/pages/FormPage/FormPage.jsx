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
        id: 1,
checked:true      },
      {
        title: "What type of products do you sell?",
        options: [
          "do you use manufacturers' (UPC or EAN) barcodes?",
          "Other products",
        ],
        id: 2,
        checked:false
      },
      {
        title: "What's the brand of your Point of Sale?",
        options: [
          "/home/assets/form brands/layer-125.png",
          "/home/assets/form brands/kindpng-1030408.png",
          "/home/assets/form brands/layer-128.png",
          "/home/assets/form brands/layer-129.png",
          "/home/assets/form brands/layer-127.png",
          "/home/assets/form brands/layer-126.png",
        ],
        imgs: true,
        id: 3,
        checked:false
      },

      {
        title: "Great! Do you use it at your POS?",
        options: ["yes", "no"],
        id: 4,
        checked:false
      },
      {
        title: "Great! Do you use it at your POS?",
        options: [
          "My scanner is connected to my POS",
          "My scanner is wireless",
        ],
        id: 5,
        checked:false
      },
      {
        title: "do you use manufacturers' (UPC or EAN) barcodes?",
        options: ["yes", "no", "Not sure"],
        id: 6,
        checked:false
      },
    ],
    nextBtn:false
  };
  
   Clicked = (id,index) => {
     const { Form } = this.state
     const prevQuestion = Form.find((item) => item.id === ((id - 1) || 1) )
     const current = Form.find((item) => item.id === id )
     const nextQuestion = Form.find((item) => item.id === id + 1)
     if (prevQuestion.checked && current.checked) {
       if (!nextQuestion) {
        this.setState({
          nextBtn: true,
        });
     }else
       nextQuestion.checked = true
this.setState({
       Form:Form
     })
     }
    
     
  
   }
  
  render() {
    return (
      <div className={styles.FormPage}>
        <div className={styles.header}>
          <p onClick={() => this.props.history.goBack()}>Back</p>
          <div className={styles.menu}>
            <Link to="/">
              <img src={"/home/assets/logo-white.png"} alt="logo" />
            </Link>
          </div>
          <h3>
            <span>Thank you</span>, we have some questions so we can get in
            touch with you.
          </h3>
        </div>

        <div className={styles.sectionsContainer}>
          {this.state.Form.map((section, i) => (
            <div
              style={{
                opacity: `${section.checked && "1"}`,
              }}
              className={styles.section}
            >
              <p className={styles.title}>{section.title}</p>
              {section.options.map((option) => {
                return section.imgs ? (
                  <FormBtn
                    active={() => this.Clicked(section.id, i)}
                    img={option}
                  />
                ) : (
                  <FormBtn
                    active={() => this.Clicked(section.id, i)}
                    data={option}
                  />
                );
              })}
            </div>
          ))}


          
        </div>
        <div className={styles.next}>
          {this.state.nextBtn && <button className={styles.btn}>
          finish
          </button>}
        </div>
        
      </div>
    );
  }
}

export default FormPage;
