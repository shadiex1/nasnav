import React, { Component } from "react";
import styles from "./FormPage.module.scss";
import FormBtn from "../../components/FormBtn/FormBtn";
import { Link } from "react-router-dom";
import { scroll } from "react-scroll"
   

class FormPage extends Component {

  state = {
    scroll:100,
    FormData: [
      {
        title: "Do you have a physical retail store?",
        options: ["yes", "no"],
        id: 1,
        checked: true,
      },
      {
        title: "What type of products do you sell?",
        options: [
          "do you use manufacturers' (UPC or EAN) barcodes?",
          "Other products",
        ],
        id: 2,
        checked: false,
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
        checked: false,
      },

      {
        title: "Great! Do you use it at your POS?",
        options: ["yes", "no"],
        id: 4,
        checked: false,
      },
      {
        title: "Great! Do you use it at your POS?",
        options: [
          "My scanner is connected to my POS",
          "My scanner is wireless",
        ],
        id: 5,
        checked: false,
      },
      {
        title: "do you use manufacturers' (UPC or EAN) barcodes?",
        options: ["yes", "no", "Not sure"],
        id: 6,
        checked: false,
      },
    ],
    nextBtn: false,
  };
 NextBtnRef = React.createRef();

  // componentDidUpdate() {
  //   const { nextBtn } = this.state
  //           nextBtn && this.scrollToBottom();

  // }
  Clicked = (id, index) => {
    const { FormData,scroll,nextBtn } = this.state;
    const prevQuestion = FormData.find((item) => item.id === (id - 1 || 1));
    const current = FormData.find((item) => item.id === id);
    const nextQuestion = FormData.find((item) => item.id === id + 1);
    if (prevQuestion.checked && current.checked) {
      if (!nextQuestion) {
        this.setState({
          nextBtn: true,
        });
           setTimeout(() => {
            this.scrollToBottom();
           }, 100);

       
      } else nextQuestion.checked = true;
      this.setState({
        FormData,
        scroll: scroll + 150

      });
    }
  };

   scrollToBottom = () => {
          this.NextBtnRef.current.scrollIntoView({ behavior: "smooth" });
        };

  scrollToTop = () => {
    const { scroll, nextBtn } = this.state
      window.scrollTo({
      top: scroll ,
      left: 0,
      behavior: "smooth",
      });
    
  }
    
  

  render() {
    const { FormData, nextBtn } = this.state;
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
          {FormData.map((section, i) => (
            <div
              style={{
                opacity: `${section.checked && "1"}`,
              }}
              className={styles.section}
            >
              <p  className={styles.title}>
                {section.title}
              </p>
              {section.options.map((option) => {
                return section.imgs ? (
                  <FormBtn
                    active={() => this.Clicked(section.id, i)}
                    img={option}
                    scroll={this.scrollToTop}
                  />
                ) : (
                  <FormBtn
                    active={() => this.Clicked(section.id, i)}
                    data={option}
                    scroll={this.scrollToTop}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className={styles.next} ref={this.NextBtnRef}>
          {nextBtn && (
            <button   className={styles.btn}>
              finish
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default FormPage;
