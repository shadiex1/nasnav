import React from "react"
import styles from "./Arrow.module.scss"

export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" , right:"3px"}}
      onClick={onClick}
    />
  );
}

export function PrevArrow(props) {
         const { className, style, onClick } = props;
         return (
           <div
             className={className}
             style={{ ...style, display: "block", background: "",left:"3px" }}
             onClick={onClick}
           />
         );
       }