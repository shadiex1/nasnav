import React from "react";
import styles from "./ThreeSixtyView.module.scss";
import Shop from "./Shop/Shop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RightArrowWide, LeftArrowWide } from "../SvgIcons/SvgIcons";
const ThreeSixtyView = (props) => {
  const sliderSettingsBuilder = (shopsLength) => ({
    dragging: true,
    infinite: shopsLength > 3 ? true : false,
    autoplay: shopsLength > 3 ? true : false,
    speed: 500,
    centerPadding: "60px",
    arrows: true,
    className: styles.slider,
    accessibility: true,
    focusOnSelect: true,
    lazyLoad: "ondemand",
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: (
      //  <NextArrow>
      <RightArrowWide className={styles.arrows} />
      //  </NextArrow>
    ),
    prevArrow: (
      //  <PrevArrow>
      <LeftArrowWide className={styles.arrows} />
      //  </PrevArrow>
    ),
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          infinite: shopsLength > 2 ? true : false,
          autoplay: shopsLength > 2 ? true : false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          infinite: shopsLength > 1 ? true : false,
          autoplay: shopsLength > 1 ? true : false,
        },
      },
    ],
  });

  const { shops, data } = props;

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
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ThreeSixtyView;
