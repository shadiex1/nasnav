import React from "react";
import { Component } from "react";
import styles from "./GetStarted.module.scss";
import Menu from "../../components/Menu/Menu";
import Gallery from "../../components/Gallery/Gallery";
import Form from "../../components/Form/Form"
class GetStarted extends Component {
  state = {
    Gallery: [
      {
        title: "Get your website with all the products for free ",
        description:
          "You can simply get your website and all your products online and Google in minutes few",
        BackgroundCover: "/assets/Gif sections/layer-106@3x.png",
        img: "/assets/Gif sections/layer-107@3x.png",
      },
      {
        title: "Get your website with all the products for free ",
        description:
          "You can simply get your website and all your products online and Google in minutes few",
        BackgroundCover: "/assets/HeyNavTheme/layer-118.png",
        img: "/assets/HeyNavTheme/layer-119.png",
      },
      {
        title: "Get your website with all the products for free ",
        description:
          "You can simply get your website and all your products online and Google in minutes few",
        BackgroundCover: "/assets/Gif sections/layer-106@3x.png",
        img: "/assets/01-view-copy.png",
      },
    ],
  };
  render() {
    return (
      <div className={styles.GetStarted}>
        <div className={styles.menu}>
          <Menu white />
        </div>
        <div className={styles.flexcContainer}>
          <Gallery data={this.state.Gallery} />
          <Form />
        </div>
      </div>
    );
  }
}

export default GetStarted