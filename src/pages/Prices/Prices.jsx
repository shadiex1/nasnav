import React from "react";
import styles from "./Prices.module.scss";
import Menu from "../../components/Menu/Menu";
import EllipseContainer from "../../components/Ellipse/EllipseContainer/EllipseContainer";
import Map from "../../components/Map/Map";
import OurPartners from "../../components/OurPartners/OurPartners";
import Footer from "../../components/Footer/Footer";
import FullScreenWrapper from "../../components/FullScreenContainer/FullScreenWrapper";
import PriceCard from "../../components/PriceCard/PriceCard";
import PricesSheet from "../../components/PricesSheet/PricesSheet";
import { Component } from "react";

class Prices extends Component {
  state = {
    width: 1100,
    MapData: {
      title: ["We started and we are growing", "right around the world"],
      description:
        "We can provide you with a complete Business-in-a-Box solution Join our franchising scheme and be a part of the team Build your business with confidence knowing you are backed by expert",
      brands: [
        process.env.PUBLIC_URL + "/assets/brands/layer-636.png",
        process.env.PUBLIC_URL + "/assets/brands/layer-637.png",
        process.env.PUBLIC_URL + "/assets/brands/layer-638.png",
        process.env.PUBLIC_URL + "/assets/brands/layer-639.png",
        process.env.PUBLIC_URL + "/assets/brands/layer-640.png",
        process.env.PUBLIC_URL + "/assets/brands/layer-641.png",
        process.env.PUBLIC_URL + "/assets/brands/layer-642.png",
        process.env.PUBLIC_URL + "/assets/brands/layer-643.png",
        process.env.PUBLIC_URL + "/assets/brands/layer-644.png",
        process.env.PUBLIC_URL + "/assets/brands/layer-645.png",
      ],
    },
    OurPartnersData: {
      title: ["Our", "Partners"],
      subtitle: "Join our family now wherever you are",
      logos: [
        process.env.PUBLIC_URL + "/assets/Our partners/layer-110.png",
        process.env.PUBLIC_URL + "/assets/Our partners/layer-165.png",
        process.env.PUBLIC_URL + "/assets/Our partners/layer-166.png",
        process.env.PUBLIC_URL + "/assets/Our partners/layer-163.png",
        process.env.PUBLIC_URL + "/assets/Our partners/layer-164.png",
        process.env.PUBLIC_URL + "/assets/Our partners/layer-167.png",
      ],
      bannerTitle: ["start selling on", "google for free"],
    },
    PriceSheetData: {
      PricesPlan: [
        {
          type: "Starter",
          price: ["Free"],
          forever:true
        },
        {
          type: "Standard",
          price: ["97", "$"],

        },
        {
          type: "Advanced",
          price: ["190", "$"],

        },
        {
          type: "Elite",
          price: ["637", "$"],

        },
      ],
      Features: [
        {
          title: "Online store catalogue page",
          icons: 4,
        },
        {
          title: "Payment gateway facilitys with banks",
          icons: 3,
        },
        {
          title: "Number of locations",
          // icons: 2,
          text: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"],
        },
        {
          title: "Online pick up from store ",
          icons: 4,
        },
        {
          title: "Delivery door to door",
          icons: 3,
        },
        {
          title: "Total number of products",
          text: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"],
        },
        {
          title: "We sources product names and images",
          text: ["1000", "2000", "4000", "Unlimited"],
        },
        {
          title: "Data Entry assistance",
          icons: 3,
        },
        {
          title: "Promo code feature",
          icons: 3,
        },
        {
          title: "360 panorama showcase",
          text: ["", "1-3 Store", "1-5 Store", "1-10 Store"],
        },
        {
          title: "ERP Integrations",
          icons: 2,
        },
        {
          title: "Abandoned cart recovery",
          icons: 3,
        },
        {
          title: "Free SSL certificate",
          icons: 2
        },
        {
          title: "Custom Themes to brand needs",
          icons: 1,
        },
        {
          title: "Additional fee",
          text:["","2%","2%","To be agreed upon"]
        }
      ],
      MobileData: {
        Starter: [
          "Online store catalogue page",
          "Unlimited number of locations",
          "Online pick up from store",
          "we source product names and images",
        ],
        Standard: [
          "Online store catalogue page",
          "Payment gateway facilitys with banks",
          "Unlimited number of locations",
          "Online pick up from store",
          "Delivery door to door",
          "Unlimited number of products",
          "we source product names and images",
          "Data entry assistance",
          "Promo code feature",
          "Abandoned cart recovery",
        ],
        Advanced: [
          "Online store catalogue page",
          "Payment gateway facilitys with banks",
          "Unlimited number of locations",
          "Online pick up from store",
          "Delivery door to door",
          "Unlimited number of products",
          "we source product names and images",
          "Data entry assistance",
          "Promo code feature",
          "ERP Integrations",
          "Abandoned cart recovery",
          "Custom Theme Support",
        ],
        Elite: [
          "Online store catalogue page",
          "Payment gateway facilitys with banks",
          "Unlimited number of locations",
          "Online pick up from store",
          "Delivery door to door",
          "Unlimited number of products",
          "we source product names and images",
          "Data entry assistance",
          "Promo code feature",
          "ERP Integrations",
          "Abandoned cart recovery",
          "Custom Theme Support",
        ],
      },
    },
  };
  updateDimensions() {
    let update_width = window.innerWidth;
    this.setState({ width: update_width });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const { MapData, OurPartnersData, PriceSheetData, width } = this.state;
    return (
      <div className={styles.Prices}>
        <FullScreenWrapper className={styles.menu}>
          <Menu />
        </FullScreenWrapper>

        <FullScreenWrapper className={styles.PricesSheet}>
          <h3 className={styles.header}>
            <span>
              {" "}
              <span className={styles.blue}>Prices</span> to match the
            </span>{" "}
            size of your busisness
          </h3>
          <EllipseContainer />
          {width <= 1200 ? (
            <div className={styles.priceCardsContainer}>
              {PriceSheetData.PricesPlan.map((plan, i) => (
                <PriceCard
                  key={i}
                  header={plan}
                  info={PriceSheetData.MobileData}
                />
              ))}
            </div>
          ) : (
            <PricesSheet data={PriceSheetData} />
          )}
        </FullScreenWrapper>
        <FullScreenWrapper className={styles.map}>
          <Map
            mapImg={process.env.PUBLIC_URL + "/assets/Map/map.png"}
            data={MapData}
          />
          <OurPartners data={OurPartnersData} />
          <Footer />
        </FullScreenWrapper>
      </div>
    );
  }
}

export default Prices;
