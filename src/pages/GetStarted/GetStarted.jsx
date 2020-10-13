import React from "react";
import { Component } from "react";
import styles from "./GetStarted.module.scss";
import Menu from "../../components/Menu/Menu";
import Gallery from "../../components/Gallery/Gallery";
import Form from "../../components/Form/Form";
import FullScreenWrapper from "../../components/FullScreenContainer/FullScreenWrapper";
import Gif1 from "../../components/gifs/01.gif";
import Gif2 from "../../components/gifs/02.gif";
// import Gif3 from "../../components/gifs/04.gif";


class GetStarted extends Component {
  state = {
    GalleryData: [
      {
        title: "Get your website with all the products for free ",
        description:
          "You can simply get your website and all your products online and Google in minutes few",
        BackgroundCover: process.env.PUBLIC_URL + "/assets/layer-106.png",
        img: Gif1,
      },
      {
        title: "Get your website with all the products for free ",
        description:
          "You can simply get your website and all your products online and Google in minutes few",
        BackgroundCover: process.env.PUBLIC_URL + "/assets/HeyNavTheme/layer-118.png",
        img: Gif2,
      },
      {
        title: "Get your website with all the products for free ",
        description:
          "You can simply get your website and all your products online and Google in minutes few",
        BackgroundCover: process.env.PUBLIC_URL + "/assets/layer-106.png",
        img: Gif1,
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
