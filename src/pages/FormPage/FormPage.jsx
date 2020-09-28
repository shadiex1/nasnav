import React, { Component } from "react";
import styles from "./FormPage.module.scss";
import FormBtn from "../../components/FormBtn/FormBtn";
import { Link } from "react-router-dom";

class FormPage extends Component {
  state = {
    scroll: 100,
    FormData: [
      {
        title: "Do you have a physical retail store?",
        options: [
          { choice: "yes", selected: false },
          { choice: "no", selected: false },
        ],
        id: 1,
        checked: true,
        answer: "",
      },
      {
        title: "What type of products do you sell?",
        options: [
          {
            choice: "do you use manufacturers' (UPC or EAN) barcodes?",
            selected: false,
          },
          { choice: "Other products", selected: false },
        ],
        id: 2,
        checked: false,
        answer: "",
      },
      {
        title: "What's the brand of your Point of Sale?",
        options: [
          {
            choice:
              process.env.PUBLIC_URL + "/assets/form brands/layer-125.png",
            selected: false,
          },
          {
            choice:
              process.env.PUBLIC_URL +
              "/assets/form brands/kindpng-1030408.png",
            selected: false,
          },
          {
            choice:
              process.env.PUBLIC_URL + "/assets/form brands/layer-128.png",
            selected: false,
          },
          {
            choice:
              process.env.PUBLIC_URL + "/assets/form brands/layer-129.png",
            selected: false,
          },
          {
            choice:
              process.env.PUBLIC_URL + "/assets/form brands/layer-127.png",
            selected: false,
          },
          {
            choice:
              process.env.PUBLIC_URL + "/assets/form brands/layer-126.png",
            selected: false,
          },
        ],
        imgs: true,
        id: 3,
        checked: false,
        answer: "",
      },

      {
        title: "Great! Do you use it at your POS?",
        options: [
          { choice: "yes", selected: false },
          { choice: "no", selected: false },
        ],
        id: 4,
        checked: false,
      },
      {
        title: "Great! Do you use it at your POS?",
        options: [
          { choice: "My scanner is connected to my POS", selected: false },
          { choice: "My scanner is wireless", selected: false },
        ],
        id: 5,
        checked: false,
        answer: "",
      },
      {
        title: "do you use manufacturers' (UPC or EAN) barcodes?",
        options: [
          { choice: "yes", selected: false },
          { choice: "no", selected: false },
          { choice: "Not sure", selected: false },
        ],
        id: 6,
        checked: false,
        answer: "",
      },
    ],
    nextBtn: false,
  };
  NextBtnRef = React.createRef();

  Clicked = (id, index) => {
    const { FormData, scroll } = this.state;
    const prevQuestion = FormData.find((item) => item.id === (id - 1 || 1));
    const current = FormData.find((item) => item.id === id);
    const nextQuestion = FormData.find((item) => item.id === id + 1);

    if (current.answer) {
      current.options.find(
        (option) => option.choice === current.answer
      ).selected = false; //remove green selection
      current.answer = current.options[index].choice; /// save answer
      current.options.find(
        (option) => option.choice === current.answer
      ).selected = true; //add new green selection
    } else {
      current.answer = current.options[index].choice; /// save answer
      current.options.find(
        (option) => option.choice === current.answer
      ).selected = true; //add green selection
    }

    console.log(current.answer, "answer");
    if (prevQuestion.checked && current.checked) {
      if (!nextQuestion) {
        this.setState({
          nextBtn: true,
        });
        setTimeout(() => {
          this.scrollToBottom();
        }, 100);
      } else nextQuestion.checked = true;
      this.scrollToNextQuestion();
      this.setState({
        FormData,
        scroll: scroll + 250,
      });
    }
  };
  scrollToBottom = () => {
    this.NextBtnRef.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollToNextQuestion = () => {
    const { scroll } = this.state;
    window.scrollTo({
      top: scroll,
      left: 0,
      behavior: "smooth",
    });
  };

  render() {
    const { FormData, nextBtn } = this.state;
    return (
      <div className={styles.FormPage}>
        <div className={styles.header}>
          <p onClick={() => this.props.history.goBack()}>Back</p>
          <div className={styles.menu}>
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/assets/logo-white.png"}
                alt="logo"
              />
            </Link>
          </div>
          <h3>
            <span>Thank you</span>, we have some questions so we can get in
            touch with you.
          </h3>
        </div>

        <div className={styles.sectionsContainer}>
          {FormData.map((section) => (
            <div
              style={{
                opacity: `${section.checked && "1"}`,
              }}
              className={styles.section}
            >
              <p className={styles.title}>{section.title}</p>
              {section.options.map((option, index) => {
                return (
                  <FormBtn
                    active={() => this.Clicked(section.id, index)}
                    img={section.imgs && option.choice}
                    data={option.choice}
                    selected={option.selected}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className={styles.next} ref={this.NextBtnRef}>
          {nextBtn && <button className={styles.btn}>finish</button>}
        </div>
      </div>
    );
  }
}

export default FormPage;
