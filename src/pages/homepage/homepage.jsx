import React, { Component } from "react";
import Header from "../../components/Header/Header";
import HeyNavBox from "../../components/HeyNavBox/HeyNavBox";
import HowTo from "../../components/HowTo/HowTo";
import HeyNavTheme from "../../components/HeyNavTheme/HeyNavTheme";
import Benefits from "../../components/Benefits/Benefits";
import Banner from "../../components/Banner/Banner";
import HeyNav360 from "../../components/HeyNav360/HeyNav360";
import NavBoxGrid from "../../components/NavboxGrid/NavBoxGrid";
import ThreeSixtyView from "../../components/360View/ThreeSixtyView";
import DashboardOverview from "../../components/DashboardOverview/DashboardOverview";
import YoutubeVideoSlide from "../../components/YoutubeVideoSlide/YoutubeVideoSlide";
import OurPartners from "../../components/OurPartners/OurPartners";
import Map from "../../components/Map/Map";
import Footer from "../../components/Footer/Footer";
class Homepage extends Component {
  state = {
    Showcase: {
      title: ["sell more products with", "google"],
      screens: {
        screenLeft: "/assets/Showcase/rounded-rectangle-41-copy@3x.png",
        screenCenter: "/assets/Showcase/group-33@3x.png",
        screenRight: "/assets/Showcase/layer-81@3x.png",
      },
    },
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
        {
          leftImg: "/assets/HeyNavTheme/ast-pay.png",
          title: "Payment methods",
          rightImgs: [
            "assets/HeyNavTheme/layer-111.png",
            "/assets/HeyNavTheme/layer-112.png",
            "/assets/HeyNavTheme/layer-113.png",
          ],
        },
        {
          leftImg: "/assets/HeyNavTheme/ast-trolley.png",
          title: "Shipping methods",
          rightImgs: [
            "/assets/HeyNavTheme/layer-108.png",
            "/assets/HeyNavTheme/layer-109.png",
            "/assets/HeyNavTheme/layer-110.png",
          ],
        },
        {
          leftImg: "/assets/HeyNavTheme/ast-gps.png",
          title: "All your branches are online",
        },
      ],
      MobileScreen: "/assets/HeyNavTheme/layer-119.png",
      BackgroundCover: "/assets/HeyNavTheme/layer-118.png",
    },

    NavBoxGrid: {
      title: ["Get started in", "seconds"],
      subtitle: " Say Hey Again To NavBox",
      description:
        " Just connect a NavBox to your barcode scanner, or if you use one of the POS systems below, you can download our free app.",
      brands: [
        "/assets/NavBoxGrid/layer-125.png",
        "/assets/NavBoxGrid/layer-126.png",
        "/assets/NavBoxGrid/layer-128@3x.png",
        "/assets/NavBoxGrid/layer-127@3x.png",
        "/assets/NavBoxGrid/kindpng-1030408.png",
        "/assets/NavBoxGrid/layer-129@3x.png",
      ],
    },
    Shops: [
      {
        img: "/assets/shops/1.png",
        title: "nike shop",
        id: 1,
      },
      {
        img: "/assets/shops/2.png",
        title: "nike shop",
        id: 2,
      },
      {
        img: "/assets/shops/3.png",
        title: "reebok shop",
        id: 3,
      },
      {
        img: "/assets/shops/4.png",
        title: "levi's shop",
        id: 4,
      },
      {
        img: "/assets/shops/5.png",
        title: "H&M shop",
        id: 5,
      },
      {
        img: "/assets/shops/6.png",
        title: "nike shop",
        id: 6,
      },
      {
        img: "/assets/shops/1.png",
        title: "nike shop",
        id: 7,
      },
    ],
    ThreeSixtyView: {
      title: "We show our clients to publiic in an",
      highlighted: "impressive way",
      description:
        "Our clients have had many advantages that have made them appear in public in a more professional and more enjoyable way",
    },
    Benefits: {
      title: "Lots of benefits on your site",
      highlighted: "For Free",
      list: [
        {
          title: "Shopping Cart",
          desc:
            "A cart or dray is a vehicle designed for transport two wheels and normally pulled.",
          img: "assets/Benefits/review.png",
        },
        {
          title: "Branch Location",
          desc:
            "A cart or dray is a vehicle designed for transport two wheels and normally pulled.",
          img: "assets/Benefits/open-24-hours.png",
        },
        {
          title: "Payment Online",
          desc:
            "A cart or dray is a vehicle designed for transport two wheels and normally pulled.",
          img: "assets/Benefits/cycle.png",
        },
        {
          title: "All Products",
          desc:
            "A cart or dray is a vehicle designed for transport two wheels and normally pulled.",
          img: "assets/Benefits/promotion.png",
        },
      ],
    },
    DashboardOverview: {
      title: "Everything's under",
      highlighted: "your control",
      description:
        "Our team is proud to announce the new sophisticated dashboard for which store owners can manage and monitor all key reporting metrics.",
      list: [
        {
          title: "A real store.",
          desc: "whole new buying experience that impresses users",
          img: "/assets/DashobardOverview/planning.png",
        },
        {
          title: "Payment method",
          desc: "whole new buying experience that impresses users",
          img: "/assets/DashobardOverview/layers.png",
        },
        {
          title: "On google",
          desc: "whole new buying experience that impresses users",
          img: "/assets/DashobardOverview/flow.png",
        },
        {
          title: "Good UX",
          desc: "whole new buying experience that impresses users",
          img: "/assets/DashobardOverview/problem-solving.png",
        },
      ],
    },
    HeyNav360: {
      title: "Impress Your ",
      highlighted: "customers",
      subtitle: "Say Hey to Nav360",
      description:
        "A unique buying experience that makes you the strongest among your competitors in the marketThrough a completely real buying experience, the user is now.",
      img: "/assets/01-view-copy.png",
    },
    HowTo: {
      title: ["How to ge your products to the", "website?"],
      firstSubtitle: "use a Navbox.",
      firstParagraph:
        "A device that is linked to your website each scan that increasesyour appearance.",
      secondSubtitle: "Use a CSV File",
      secondParagraph:
        "A device that is linked to your website each scan that increasesyour appearance.",
      check: ["Easily check your files and", "then upload them"],
      analyze: ["analyze", "csv file"],
      upload: ["Upload", "csv file"],
    },
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
   
  };
  render() {
    return (
      <div>
        <Header ShowcaseData={this.state.Showcase} />
        <HeyNavBox data={this.state.HeynavBox} />

        <HowTo data={this.state.HowTo} />
        <HeyNavTheme data={this.state.HeyNavTheme} />

        <Benefits data={this.state.Benefits} />
        <HeyNav360 data={this.state.HeyNav360} />
        <NavBoxGrid data={this.state.NavBoxGrid} />
        <DashboardOverview data={this.state.DashboardOverview} />
        <YoutubeVideoSlide videoUrl="8V1LI_EwGUM" />
        <ThreeSixtyView
          data={this.state.ThreeSixtyView}
          shops={this.state.Shops}
        />
        <Map data={this.state.Map} />
        <OurPartners data={this.state.OurPartners} />
        <Footer />
      </div>
    );
  }
}
export default Homepage;
