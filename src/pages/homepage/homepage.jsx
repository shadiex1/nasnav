import React, { Component } from "react";
import styles from "./homepage.module.scss";
import Menu from "../../components/Menu/Menu"
import Header from "../../components/Header/Header"
import GifSection from "../../components/GifSection/GifSection";
import HeyNavBox from "../../components/HeyNavTheme/HeyNavTheme";
import Banner from "../../components/Banner/Banner";
import HeyNav360 from "../../components/HeyNav360/HeyNav360";
import NavBoxGrid from "../../components/NavboxGrid/NavBoxGrid"
import DashboardOverview from "../../components/DashboardOverview/DashboardOverview";
import OurPartners from "../../components/OurPartners/OurPartners";
import Footer from "../../components/Footer/Footer"
class Homepage extends Component{
    render(){
    return(
        <div>
            <Header/>
            <GifSection/>
            <Banner title={"you don't need marketing experts"} description={"A device that is linked to your website with each scan that increases your appearance on search engines"}/>
            <HeyNavBox/>
            <Banner title={"you don't need a professional designer"} description={"Once youu've used the dashboard, you can design your website in just a few seconds"}/>
            <HeyNav360 />
            <NavBoxGrid/>
            <DashboardOverview />
            <OurPartners />
            <Footer/>
        </div>
    )
}
}
export default Homepage