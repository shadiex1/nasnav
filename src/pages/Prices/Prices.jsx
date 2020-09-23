import React from "react"
import styles from "./Prices.module.scss";
import Menu from "../../components/Menu/Menu";
import EllipseContainer from "../../components/Ellipse/EllipseContainer/EllipseContainer";
import Map from "../../components/Map/Map";
import OurPartners from "../../components/OurPartners/OurPartners";
import Footer from "../../components/Footer/Footer";
import FullScreenWrapper from "../../components/FullScreenContainer/FullScreenWrapper";
import PricesSheet from "../../components/PricesSheet/PricesSheet"
import { Component } from "react";

class Prices extends Component {
  state = {
    Map: {
      title: ["We started and we are growing", "right around the world"],
      description:
        "We can provide you with a complete Business-in-a-Box solution Join our franchising scheme and be a part of the team Build your business with confidence knowing you are backed by expert",
      brands: [
        "/assets/brands/layer-636.png",
        "/assets/brands/layer-637.png",
        "/assets/brands/layer-638.png",
        "/assets/brands/layer-639.png",
        "/assets/brands/layer-640.png",
        "/assets/brands/layer-641.png",
        "/assets/brands/layer-642.png",
        "/assets/brands/layer-643.png",
        "/assets/brands/layer-644.png",
        "/assets/brands/layer-645.png",
      ],
    },
OurPartners: {
  title: ["Our", "Partners"],
    subtitle: "Join our family now wherever you are",
      logos: [
        "/assets/Our partners/layer-110.png",
        "/assets/Our partners/layer-165.png",
        "/assets/Our partners/layer-166.png",
        "/assets/Our partners/layer-163.png",
        "/assets/Our partners/layer-164.png",
        "/assets/Our partners/layer-167.png",
      ],
        bannerTitle: ["start selling on", "google for free"],
    }, 
    PriceSheet: {
       PricesPlan: [
      {
        type: "Free",
        price: "$0",
        
      },
      {
        type: "Premium",
        price: "$45",
        
      },
      {
        type: "Enterprise",
        price: "$65",
        
      }
      ],
      Features: [
        {
          title: "Credit and debit cards",
          icons:3
        },
        {
          title: "International payments",
          icons:2
        },
        {
          title: "Card account updater",
          icons:2
        },
        {
          title: "Adaptive Acceptance",
          icons:2
        },
        {
          title: "Local payment methods",
          icons:1
        },
      ],
      
    },
    
   
  };
  render() {
        // const { Map } = this.state;

    return (
      <div className={styles.Prices}>
        <Menu />

        <FullScreenWrapper className={styles.PricesSheet}>
          <PricesSheet data={this.state.PriceSheet} />
        </FullScreenWrapper>
        {/* <EllipseContainer /> */}
        <Map mapImg="/assets/Map/map.png" data={this.state.Map} />
        <OurPartners data={this.state.OurPartners} />

        <Footer />
      </div>
    );
  }
}

export default Prices