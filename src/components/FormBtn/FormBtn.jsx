import React from "react";
import styles from "./FormBtn.module.scss";


const FormBtn = props => {
  const {data ,img }=props
  return (
  <button className={styles.FormBtn}>
      {/* {data} */}
      {img ? <img src={img} alt="logo" />: <p>{data}</p>}
  </button>
  )

}

export default FormBtn