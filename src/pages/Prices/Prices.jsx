import React from "react"
import styles from "./Prices.module.scss";
import Menu from "../../components/Menu/Menu";
import EllipseContainer from "../../components/Ellipse/EllipseContainer/EllipseContainer";
import Map from "../../components/Map/Map";
import OurPartners from "../../components/OurPartners/OurPartners";
import Footer from "../../components/Footer/Footer";
import FullScreenWrapper from "../../components/FullScreenContainer/FullScreenWrapper";
import PriceCard from "../../components/PriceCard/PriceCard"
import PricesSheet from "../../components/PricesSheet/PricesSheet"
import { Component } from "react";

class Prices extends Component {
  state = {
    width: 1100,
    Map: {
      title: ["We started and we are growing", "right around the world"],
      description:
        "We can provide you with a complete Business-in-a-Box solution Join our franchising scheme and be a part of the team Build your business with confidence knowing you are backed by expert",
      brands: [
        "/home/assets/brands/layer-636.png",
        "/home/assets/brands/layer-637.png",
        "/home/assets/brands/layer-638.png",
        "/home/assets/brands/layer-639.png",
        "/home/assets/brands/layer-640.png",
        "/home/assets/brands/layer-641.png",
        "/home/assets/brands/layer-642.png",
        "/home/assets/brands/layer-643.png",
        "/home/assets/brands/layer-644.png",
        "/home/assets/brands/layer-645.png",
      ],
    },
    OurPartners: {
      title: ["Our", "Partners"],
      subtitle: "Join our family now wherever you are",
      logos: [
        "/home/assets/Our partners/layer-110.png",
        "/home/assets/Our partners/layer-165.png",
        "/home/assets/Our partners/layer-166.png",
        "/home/assets/Our partners/layer-163.png",
        "/home/assets/Our partners/layer-164.png",
        "/home/assets/Our partners/layer-167.png",
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
        },
      ],
      Features: [
        {
          title: "Credit and debit cards",
          icons: 3,
        },
        {
          title: "International payments",
          icons: 2,
        },
        {
          title: "Card account updater",
          icons: 2,
        },
        {
          title: "Adaptive Acceptance",
          icons: 2,
        },
        {
          title: "Local payment methods",
          icons: 1,
        },
      ],
    },
  };
  updateDimensions() {
    // if (window.innerWidth < 500) {
    //   this.setState({ width: 450 });
    // } else {
    let update_width = window.innerWidth;
    this.setState({ width: update_width });
    // }
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    // const { Map } = this.state;

    return (
      <div className={styles.Prices}>
        <div className={styles.menu}>
          <Menu />
        </div>
        <FullScreenWrapper className={styles.PricesSheet}>
          <h3 className={styles.header}>
            <span>
              {" "}
              <span className={styles.blue}>Prices</span> to match the
            </span>{" "}
            size of your busisness
          </h3>
          <EllipseContainer />
          {this.state.width <= 1200 ? (
            <div className={styles.priceCardsContainer}>
              <PriceCard />
              <PriceCard />
              <PriceCard />
            </div>
          ) : (
            <PricesSheet data={this.state.PriceSheet} />
          )}
        </FullScreenWrapper>
        <FullScreenWrapper>
          <Map mapImg="/home/assets/Map/map.png" data={this.state.Map} />
          <OurPartners data={this.state.OurPartners} />
        </FullScreenWrapper>
        <Footer />
      </div>
    );
  }
}

export default Prices