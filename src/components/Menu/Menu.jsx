import React from "react";
import styles from "./Menu.module.scss";
import { Component } from "react";
import Ellipse from "../Ellipse/Ellipse"

class Menu extends Component {
    render(){
        return(
            <div className={styles.MenuContainer}>
            <div className={styles.Menu}>
                <div className={styles.logoContainer}>
                    <img src={"/assets/Menu/layer-1@3x.png"} alt="logo"/>
                    <Ellipse/>
                </div>
                <div className={styles.navigation}>
                    <ul>
                        <li className={styles.link}>Pricing</li>
                        <li className={styles.link}>Contact us</li>
                        <li className={styles.btn}>Shop Login</li>
                        <li className={[styles.btn,styles.gradientBtn].join(" ")}><img src={"/assets/Menu/layer-2@3x.png"}/> Get Started</li>
                    </ul>
                </div>
            </div>
            </div>

        )
    }
}

export default Menu