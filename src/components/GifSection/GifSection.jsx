import React, { Component } from "react";
import styles from "./GifSection.module.scss";
import {GoogleMaps,GoogleIcon,MapIcon,MagicIcon} from "../SvgIcons/SvgIcons"
class GifSection extends Component{
    render(){
        return(
            <div className={styles.GifSection}>
                <div className={styles.description}>
                    <h2>Get close to your <span>customers</span></h2>
                    <span className={styles.subtitle}>say hey to NavBox<img src={"/assets/Gif sections/layer-104@3x.png"} alt="logo"/></span>
                    <p>
                    Through the dashboard you can easily build your 
site design and choose between multiple formats 
to suit your business competence.
                    </p>
                    <ul className={styles.list}>
                        <li>Your products in google map <GoogleMaps/></li>
                        <li>Your products in google<GoogleIcon/></li>
                        <li className={styles.blueFilter}>Your products appear to those close to you<MapIcon/></li>
                        {/* <li>Your products in google map <MagicIcon/></li> */}
                    </ul>
                    <div className={styles.magic}>
                        <MagicIcon/> <p>In seconds <span>the magic</span> starts and you get an easy and beautiful website</p>
                    </div>
                </div>

                <div style={{backgroundImage:`url("/assets/Gif sections/layer-106@3x.png")`}} className={styles.imgContainer}>
                    {/* <img className={styles.background} src={"/assets/Gif sections/layer-106@3x.png"} alt="background"/> */}

                    <img src={"/assets/Gif sections/layer-107@3x.png"} alt="mobile screen"/>
                </div>
            </div>
        )
    }
}

export default GifSection