import React, { Component } from "react";
import styles from "./homepage.module.scss";
import Menu from "../../components/Menu/Menu"
import Header from "../../components/Header/Header"
import GifSection from "../../components/GifSection/GifSection";
import Banner from "../../components/Banner/Banner"
class Homepage extends Component{
    render(){
    return(
        <div>
            <Header/>
            <GifSection/>
            <Banner/>
        </div>
    )
}
}
export default Homepage