import React, { Component } from "react";
import Header from "../../components/Header/Header";
import HeyNavBox from "../../components/HeyNavBox/HeyNavBox";
import HeyNavTheme from "../../components/HeyNavTheme/HeyNavTheme";
import Banner from "../../components/Banner/Banner";
import HeyNav360 from "../../components/HeyNav360/HeyNav360";
import NavBoxGrid from "../../components/NavboxGrid/NavBoxGrid";
import DashboardOverview from "../../components/DashboardOverview/DashboardOverview";
import OurPartners from "../../components/OurPartners/OurPartners";
import Map from "../../components/Map/Map"
import Footer from "../../components/Footer/Footer";
class Homepage extends Component {
  state = {
    HeynavBox: {
      title: ["Get close to your ", "customers"],
      subtitle: "Say Hey To NavBox",
      description:
        "Through the dasboard you can easily build your site design and choose between multiple formats to suit your business competence",
      list: [
        "Your products in google map",
        "Your products in google",
        "Your products appear to those close to you",
      ],
      MobileScreen: "/assets/Gif sections/layer-107@3x.png",
      BackgroundCover: "/assets/Gif sections/layer-106@3x.png",
    },
    HeyNavTheme: {
      title: ["Design Your site ", "easily"],
      subtitle: " say hey to NavTheme",
      description:
        " Through the dashboard you can easily build your site design and choose between multiple formats to suit your business competence.",
      lists: [
        "Payment methods",
        "Shipping methods",
        "A totally unique buying experience",
      ],
      MobileScreen: "/assets/HeyNavTheme/layer-119.png",
      BackgroundCover: "/assets/HeyNavTheme/layer-118.png",
    },
    HeyNav360: {
      title: ["Impress Your ", "customers"],
      subtitle: " Say Hey To Nav360",
      description:
        " A unique buying experience that makes you the strongest among your competitors in the market Through a completely real buying experience, the user is now entering your branches and they are closed.",
    },
    NavBoxGrid: {
      title: ["Get started in", "seconds"],
      subtitle: " Say Hey Again To NavBox",
      description:
        " Just connect a NavBox to your barcode scanner, or if you use one of the POS systems below, you can download our free app.",
    },
    DashboardOverview: {
      title: "Everything's under your control.",
      description:
        "Our team is proud to announce the new sophisticated dashboard for which store owners can manage and monitor all key reporting metrics.",
    },
  };
  render() {
    return (
      <div>
        <Header />
        <HeyNavBox data={this.state.HeynavBox} />
        <Banner
          title={"you don't need marketing experts"}
          description={
            "A device that is linked to your website with each scan that increases your appearance on search engines"
          }
        />
        <HeyNavTheme data={this.state.HeyNavTheme} />
        <Banner
          title={"you don't need a professional designer"}
          description={
            "Once youu've used the dashboard, you can design your website in just a few seconds"
          }
        />
        <HeyNav360 data={this.state.HeyNav360} />
        <NavBoxGrid data={this.state.NavBoxGrid} />
        <DashboardOverview data={this.state.DashboardOverview} />
        <Map/>
        <OurPartners />
        <Footer />
      </div>
    );
  }
}
export default Homepage;
