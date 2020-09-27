import React from "react";
import styles from "./Gallery.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Gallery = (props) => {
  const { data } = props;
  const sliderSettingsBuilder = (data) => ({
    dragging: true,
    infinite: data > 3 ? true : false,
    autoplay: data > 3 ? true : false,
    speed: 500,
    centerPadding: "60px",
    arrows: false,
    className: styles.slider,
    accessibility: true,
    focusOnSelect: true,
    lazyLoad: "ondemand",
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: ["slick-dots", styles.dots].join(" "),

    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className={styles.dot}></div>,

    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          infinite: data > 2 ? true : false,
          autoplay: data > 2 ? true : false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          infinite: data > 1 ? true : false,
          autoplay: data > 1 ? true : false,
        },
      },
    ],
  });
  return (
    <div className={styles.gallery}>
      <Slider {...sliderSettingsBuilder(data.length)}>
        {data.map((item) => (
          <div className={styles.card}>
            <div
              style={{
                backgroundImage: `url(${item.BackgroundCover})`,
              }}
              className={styles.imgContainer}
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/Gif sections/i-phone.png"}
                alt="mobile Cover"
                className={styles.mobileCover}
              />
              <img
                src={item.img}
                alt="mobile screen"
                className={styles.mobileScreen}
              />
            </div>
            <h3>
              <span>Get your website with all</span> the products for free
            </h3>
            <p>
              You can simply get your website and all your products online and
              Google in minutes few
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Gallery;
