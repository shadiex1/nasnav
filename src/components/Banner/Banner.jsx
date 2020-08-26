import React from "react";
import styles from "./Banner.module.scss";

const Banner = props=>{
    return(

    
    <div className={styles.Banner}>
        <div className={styles.bannerPatterns}>
            <h3>nav<span>box</span></h3>
         <p className={styles.title}>You don't need marketing experts</p>
         <p className={styles.description}>A device that is linked to your website with each scan that increases
your appearance on search engines</p>

        </div>
    </div>
)}

export default Banner