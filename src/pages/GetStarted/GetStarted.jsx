import React from "react";
import { Component } from "react";
import styles from "./GetStarted.module.scss";
import Menu from "../../components/Menu/Menu";
import Gallery from "../../components/Gallery/Gallery";
import Form from "../../components/Form/Form";
import FullScreenWrapper from "../../components/FullScreenContainer/FullScreenWrapper";
class GetStarted extends Component {
  state = {
    GalleryData: [
      {
        title: "Get your website with all the products for free ",
        description:
          "You can simply get your website and all your products online and Google in minutes few",
        BackgroundCover: process.env.PUBLIC_URL + "/assets/layer-106.png",
        img: process.env.PUBLIC_URL + "/assets/Gif sections/layer-107@3x.png",
      },
      {
        title: "Get your website with all the products for free ",
        description:
          "You can simply get your website and all your products online and Google in minutes few",
        BackgroundCover: process.env.PUBLIC_URL + "/assets/HeyNavTheme/layer-118.png",
        img: process.env.PUBLIC_URL + "/assets/HeyNavTheme/layer-119.png",
      },
      {
        title: "Get your website with all the products for free ",
        description:
          "You can simply get your website and all your products online and Google in minutes few",
        BackgroundCover: process.env.PUBLIC_URL + "/assets/layer-106.png",
        img: process.env.PUBLIC_URL + "/assets/Gif sections/layer-107@3x.png",
      },
    ],
  };
  render() {
    const { GalleryData } = this.state;
    return (
      <div className={styles.GetStarted}>
        <div>
          <FullScreenWrapper className={styles.menu}>
            <Menu white />
          </FullScreenWrapper>
        </div>

        <div className={styles.flexcContainer}>
          <Gallery data={GalleryData} />
          <Form />
        </div>
      </div>
    );
  }
}

export default GetStarted;
