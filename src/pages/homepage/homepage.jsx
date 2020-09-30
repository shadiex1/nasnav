import React, { Component } from "react";
import styles from "./homepage.module.scss";
import Header from "../../components/Header/Header";
import HeyNavBox from "../../components/HeyNavBox/HeyNavBox";
import HowTo from "../../components/HowTo/HowTo";
import HeyNavTheme from "../../components/HeyNavTheme/HeyNavTheme";
import Benefits from "../../components/Benefits/Benefits";
import HeyNav360 from "../../components/HeyNav360/HeyNav360";
import NavBoxGrid from "../../components/NavboxGrid/NavBoxGrid";
import ThreeSixtyView from "../../components/360View/ThreeSixtyView";
import DashboardOverview from "../../components/DashboardOverview/DashboardOverview";
import YoutubeVideoSlide from "../../components/YoutubeVideoSlide/YoutubeVideoSlide";
import PopupContainer from "../../components/PopupContainer/PopupContainer"
import OurPartners from "../../components/OurPartners/OurPartners";
import Map from "../../components/Map/Map";
import Footer from "../../components/Footer/Footer";
import FullScreenWrapper from "../../components/FullScreenContainer/FullScreenWrapper";
class Homepage extends Component {
  state = {
    ShowcaseData: {
      title: ["sell more products with", "google"],
      screens: {
        screenLeft: process.env.PUBLIC_URL + "/assets/Showcase/rounded-rectangle-41-copy@3x.png",
        screenCenter: process.env.PUBLIC_URL + "/assets/Showcase/group-33@3x.png",
        screenRight: process.env.PUBLIC_URL + "/assets/Showcase/layer-81@3x.png",
      },
    },
    HeynavBoxData: {
      title: ["Get close to your ", "customers"],
      subtitle: "Say Hey To NavBox",
      description:
        "Through the dasboard you can easily build your site design and choose between multiple formats to suit your business competence",
      list: [
        "Your products in google map",
        "Your products in google",
        "Your products appear to those close to you",
      ],
      MobileScreen: process.env.PUBLIC_URL + "/assets/Gif sections/layer-107@3x.png",
      BackgroundCover: process.env.PUBLIC_URL + "/assets/Gif sections/layer-106@3x.png",
    },
    HeyNavThemeData: {
      title: ["Design Your site ", "easily"],
      subtitle: " say hey to NavTheme",
      description:
        " Through the dashboard you can easily build your site design and choose between multiple formats to suit your business competence.",
      lists: [
        {
          leftImg: process.env.PUBLIC_URL + "/assets/HeyNavTheme/ast-pay.png",
          title: "Payment methods",
          rightImgs: [
            process.env.PUBLIC_URL + "/assets/HeyNavTheme/layer-111.png",
            process.env.PUBLIC_URL + "/assets/HeyNavTheme/layer-112.png",
            process.env.PUBLIC_URL + "/assets/HeyNavTheme/layer-113.png",
          ],
        },
        {
          leftImg: process.env.PUBLIC_URL + "/assets/HeyNavTheme/ast-trolley.png",
          title: "Shipping methods",
          rightImgs: [
            process.env.PUBLIC_URL + "/assets/HeyNavTheme/layer-108.png",
            process.env.PUBLIC_URL + "/assets/HeyNavTheme/layer-109.png",
            process.env.PUBLIC_URL + "/assets/HeyNavTheme/layer-110.png",
          ],
        },
        {
          leftImg: process.env.PUBLIC_URL + "/assets/HeyNavTheme/ast-gps.png",
          title: "All your branches are online",
        },
      ],
      MobileScreen: process.env.PUBLIC_URL + "/assets/HeyNavTheme/layer-119.png",
      BackgroundCover: process.env.PUBLIC_URL + "/assets/HeyNavTheme/layer-118.png",
    },

    NavBoxGridData: {
      title: ["Get started in", "seconds"],
      subtitle: " Say Hey Again To NavBox",
      description:
        " Just connect a NavBox to your barcode scanner, or if you use one of the POS systems below, you can download our free app.",
      brands: [
        process.env.PUBLIC_URL + "/assets/NavBoxGrid/layer-125.png",
        process.env.PUBLIC_URL + "/assets/NavBoxGrid/layer-126.png",
        process.env.PUBLIC_URL + "/assets/NavBoxGrid/layer-128@3x.png",
        process.env.PUBLIC_URL + "/assets/NavBoxGrid/layer-127@3x.png",
        process.env.PUBLIC_URL + "/assets/NavBoxGrid/kindpng-1030408.png",
        process.env.PUBLIC_URL + "/assets/NavBoxGrid/layer-129@3x.png",
      ],
    },
    ShopsData: [
      {
        img: process.env.PUBLIC_URL + "/assets/shops/1.png",
        title: "nike shop",
        id: 1,
      },
      {
        img: process.env.PUBLIC_URL + "/assets/shops/2.png",
        title: "nike shop",
        id: 2,
      },
      {
        img: process.env.PUBLIC_URL + "/assets/shops/3.png",
        title: "reebok shop",
        id: 3,
      },
      {
        img: process.env.PUBLIC_URL + "/assets/shops/4.png",
        title: "levi's shop",
        id: 4,
      },
      {
        img: process.env.PUBLIC_URL + "/assets/shops/5.png",
        title: "H&M shop",
        id: 5,
      },
      {
        img: process.env.PUBLIC_URL + "/assets/shops/6.png",
        title: "nike shop",
        id: 6,
      },
      {
        img: process.env.PUBLIC_URL + "/assets/shops/1.png",
        title: "nike shop",
        id: 7,
      },
    ],
    ThreeSixtyViewData: {
      title: "We show our clients to public in an",
      highlighted: "impressive way",
      description:
        "Our clients have had many advantages that have made them appear in public in a more professional and more enjoyable way",
    },
    BenefitsData: {
      title: "Lots of benefits on your site",
      highlighted: "For Free",
      list: [
        {
          title: "Shopping Cart",
          desc:
            "A cart or dray is a vehicle designed for transport two wheels and normally pulled.",
          img: process.env.PUBLIC_URL + "/assets/Benefits/review.png",
        },
        {
          title: "Branch Location",
          desc:
            "A cart or dray is a vehicle designed for transport two wheels and normally pulled.",
          img: process.env.PUBLIC_URL + "/assets/Benefits/open-24-hours.png",
        },
        {
          title: "Payment Online",
          desc:
            "A cart or dray is a vehicle designed for transport two wheels and normally pulled.",
          img: process.env.PUBLIC_URL + "/assets/Benefits/cycle.png",
        },
        {
          title: "All Products",
          desc:
            "A cart or dray is a vehicle designed for transport two wheels and normally pulled.",
          img: process.env.PUBLIC_URL + "/assets/Benefits/promotion.png",
        },
      ],
    },
    DashboardOverviewData: {
      title: "Everything's under",
      highlighted: "your control",
      description:
        "Our team is proud to announce the new sophisticated dashboard for which store owners can manage and monitor all key reporting metrics.",
      list: [
        {
          title: "A real store.",
          desc: "whole new buying experience that impresses users",
          img: process.env.PUBLIC_URL + "/assets/DashobardOverview/planning.png",
        },
        {
          title: "Payment method",
          desc: "whole new buying experience that impresses users",
          img: process.env.PUBLIC_URL + "/assets/DashobardOverview/layers.png",
        },
        {
          title: "On google",
          desc: "whole new buying experience that impresses users",
          img: process.env.PUBLIC_URL + "/assets/DashobardOverview/flow.png",
        },
        {
          title: "Good UX",
          desc: "whole new buying experience that impresses users",
          img: process.env.PUBLIC_URL + "/assets/DashobardOverview/problem-solving.png",
        },
        // {
        //   title: "On google",
        //   desc: "whole new buying experience that impresses users",
        //   img: process.env.PUBLIC_URL + "/assets/DashobardOverview/flow.png",
        // },
      ],
    },
    HeyNav360Data: {
      title: "Impress Your ",
      highlighted: "customers",
      subtitle: "Say Hey to Nav360",
      description:
        "A unique buying experience that makes you the strongest among your competitors in the marketThrough a completely real buying experience, the user is now.",
      img: process.env.PUBLIC_URL + "/assets/01-view-copy.png",
    },
    HowToData: {
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
    showPopup:false
  };

  togglePopup = props => {
       this.setState((prevState) => {
         return { showPopup: !prevState.showPopup };
       });
  }
  render() {
    const {
      ShowcaseData,
      HowToData,
      BenefitsData,
      HeyNavThemeData,
      HeynavBoxData,
      NavBoxGridData,
      HeyNav360Data,
      DashboardOverviewData,
      ThreeSixtyViewData,
      ShopsData,
      MapData,
      OurPartnersData,
      showPopup
    } = this.state;
    return (
      <div>
        <PopupContainer open={showPopup} toggle={this.togglePopup} />

        <FullScreenWrapper className={styles.HeaderFullSreen}>
          <Header ShowcaseData={ShowcaseData} togglePopup={this.togglePopup} showPopup={showPopup}/>
        </FullScreenWrapper>
        <FullScreenWrapper>
          <HeyNavBox data={HeynavBoxData} />
        </FullScreenWrapper>
        <FullScreenWrapper className={styles.HowToFullScrn}>
          <HowTo data={HowToData} />
        </FullScreenWrapper>
        <FullScreenWrapper>
          <HeyNavTheme data={HeyNavThemeData} />
        </FullScreenWrapper>
        <FullScreenWrapper className={styles.HowToFullScrn}>
          <Benefits data={BenefitsData} />
        </FullScreenWrapper>
        <FullScreenWrapper>
          <HeyNav360 data={HeyNav360Data} />
          <NavBoxGrid data={NavBoxGridData} />
        </FullScreenWrapper>

        <FullScreenWrapper className={styles.HowToFullScrn}>
          <DashboardOverview data={DashboardOverviewData} />
        </FullScreenWrapper>
        <YoutubeVideoSlide videoUrl="8V1LI_EwGUM" />

        <ThreeSixtyView data={ThreeSixtyViewData} shops={ShopsData} />
        <FullScreenWrapper>
          <FullScreenWrapper>
            <Map
              mapImg={process.env.PUBLIC_URL + "/assets/Map/map.png"}
              data={MapData}
            />

            <OurPartners data={OurPartnersData} />
            <Footer />
          </FullScreenWrapper>
        </FullScreenWrapper>
      </div>
    );
  }
}
export default Homepage;
