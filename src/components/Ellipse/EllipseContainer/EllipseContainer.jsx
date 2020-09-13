import React from "react"
import styles from "./EllipseContainer.module.scss";
import Ellipse from "../Ellipse"
const EllipseContainer = props => {
    return (
      <div className={styles.EllipseContainer}>
        <Ellipse
          color="#4b44ff"
          width="15px"
          hieght="15px"
          top="50%"
          right="20%"
        />
        <Ellipse
          color="#4b44ff"
          width="15px"
          hieght="15px"
          top="80%"
          right="80%"
        />
        <Ellipse
          color="#44ffa5

"
          width="15px"
          hieght="15px"
          top="80%"
          right="10%"
        />
        <Ellipse
          color="#ff6744"
          width="10px"
          height="10px"
          top="30%"
          right="90%"
        />
        <Ellipse
          color="#ff6744"
          width="20px"
          height="20px"
          top="30%"
          right="10%"
        />
        <Ellipse
          color="#44aeff"
          width="20px"
          height="20px"
          top="90%"
          right="20%"
        />
        <Ellipse
          color="#44aeff"
          width="20px"
          height="20px"
          top="60%"
          right="90%"
        />
        <Ellipse
          color="#44ffa5"
          width="20px"
          height="20px"
          top="100%"
          right="90%"
        />
      </div>
    );
}

export default EllipseContainer