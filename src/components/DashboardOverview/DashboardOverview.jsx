import React from "react";
import styles from "./DashboardOverview.module.scss";
import { RightArrowWide, LeftArrowWide } from "../SvgIcons/SvgIcons";
// import {NextArrow , PrevArrow} from "../Arrow/Arrow"
import Arrow from "../Arrow/Arrow"
import Slider from "react-slick";

const DashboardOverview = (props) => {
  const { data } = props;
 const sliderSettingsBuilder = (data) => ({
   infinite: true,
   autoplay: data > 3 ? true : false,
   speed: 500,
   centerPadding: "70px",
   arrows: true,
   className: styles.slider,
   accessibility: true,
   prevArrow: <Arrow />,
   nextArrow: <Arrow rotate />,
   slidesToShow: 4,
   slidesToScroll: 1,
  
   responsive: [
     {
       breakpoint: 1000,
       settings: {
         slidesToShow: 3,
         infinite: data > 2 ? true : false,
         autoplay: data > 2 ? true : false,
       },
     },
     {
       breakpoint: 860,
       settings: {
         arrows: true,
         slidesToShow: 3,
         infinite: data > 2 ? true : false,
         autoplay: data > 2 ? true : false,
       },
     },
     {
       breakpoint: 660,
       settings: {
         slidesToShow: 2,
         infinite: true,
         autoplay: data > 2 ? true : false,
       },
     },
     {
       breakpoint: 440,
       settings: {
         slidesToShow: 1,
         infinite: data > 1 ? true : false,
         autoplay: data > 1 ? true : false,
       },
     },
   ],
 });
  return (
      <div className={styles.DashboardOverview}>
        <h3>
          {data.title} <span>{data.highlighted}</span>
        </h3>
        <p>{data.description}</p>
      <div className={styles.features}>
         <Slider {...sliderSettingsBuilder(4)}>

          {data.list.map((feature) => (
            <div className={styles.featureContainer}>

            <div className={styles.feature}>
              <div className={styles.imgContainer}>
                <img src={feature.img} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              </div>
            </div>

          ))}
          </Slider>
        </div>
      </div>
  );
};
export default DashboardOverview;
