import React from "react"
import "./FormInput.scss"
import {Check} from "../../SvgIcons/SvgIcons"

const FormInput = ({ handleChange, label,height, ...props }) => (
  <div  className="group">
    <input style={{ height:`${height}`}} className="form-input" onChange={handleChange} {...props} />
    {props.value.length > 8 ? <Check /> : null}
    {label ? (
      <label
        className={`${props.value.length ? "shrink" : ""} form-input-label`}
      >
        {" "}
        {label}
      </label>
    ) : null}
  </div>
);


export default FormInput