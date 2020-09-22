import React from "react";
import styles from "./FormBtn.module.scss";


const FormBtn = props => {
  const {data}=props
  return (
  <button>
    {data}
  </button>
  )

}

export default FormBtn