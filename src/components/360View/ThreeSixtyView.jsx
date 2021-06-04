import React, { Component } from "react";
import styles from "./ThreeSixtyView.module.scss";
import Shop from "./Shop/Shop";
import Slider from "react-slick";
import Panorama from "../Panorama/Panorama";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../Arrow/Arrow";

class ThreeSixtyView extends Component {
   
  state = {
    videoUrl:"",
  showPanorama:false
}
  render() {
    const sliderSettingsBuilder = (shopsLength) => ({
    infinite: shopsLength > 3 ? true : false,
    autoplay: shopsLength > 3 ? true : false,
    speed: 500,
    arrows: true,
    className: styles.slider,
    accessibility: true,
    lazyLoad: "ondemand",
    slidesToShow: 6,
    prevArrow: <Arrow />,
    nextArrow: <Arrow rotate />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          infinite: shopsLength > 2 ? true : false,
          autoplay: shopsLength > 2 ? true : false,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
          infinite: shopsLength > 2 ? true : false,
          autoplay: shopsLength > 2 ? true : false,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          infinite: shopsLength > 2 ? true : false,
          autoplay: shopsLength > 2 ? true : false,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          infinite: shopsLength > 1 ? true : false,
          autoplay: shopsLength > 1 ? true : false,
        },
      },
    ],
    });
    const TogglePanorama = (url) => {
      this.setState({
        videoUrl: url,
        showPanorama:true
      })
    }
    const closePanorama = () => {
      this.setState({
        videoUrl: "",
        showPanorama:false
      })
    }
  const { shops, data } = this.props;
const { showPanorama, videoUrl } = this.state;
  return (
    <div className={styles.ThreeSixtyView}>
      <div className={styles.header}>
        <h2>
          {data.title} <span>{data.highlighted}</span>
        </h2>
        <p>{data.description}</p>
      </div>

      <div className={styles.shops}>
        <Slider {...sliderSettingsBuilder(shops.length)}>
          {shops.map((shop) => (
            <Shop
              key={shop.id}
              branchImg={shop.img}
              branchName={shop.title}
              id={shop.id}
              clicked={()=>TogglePanorama(shop.url)}
            />
          ))}
        </Slider>
      </div>
      {showPanorama && <Panorama close={()=>closePanorama()} url={videoUrl}/>}
    </div>
  );
}
  
};

export default ThreeSixtyView;
