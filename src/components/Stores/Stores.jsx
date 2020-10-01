import React, { Component } from "react";

import FulscrnWrpr from "../../../Components/0//FulscrnWrpr/FulscrnWrpr";
import StoresHeader from "../../../Components/0//StoresHeader/StoresHeader";
import StoresSkeleton from "../../../Components/0//StoresSkeleton/StoresSkeleton";
import Storelocator from "../../../Components/0//Storelocator/Storelocator";
import StoresMap from "../../../Components/0//StoresMap/StoresMap";

import Data from "../../../Services/Data";

import * as styles from "./Stores.module.scss";

const mapPositions = [
  {
    lat: 30.0737727,
    lng: 31.3623784,
    zoom: 12,
  },
  {
    lat: 30.0511842,
    lng: 31.3493525,
    zoom: 12,
  },
  {
    lat: 30.0470772,
    lng: 31.1748443,
    zoom: 12,
  },
  {
    lat: 30.0741673,
    lng: 31.3623778,
    zoom: 12,
  },
  {
    lat: 29.99819,
    lng: 31.1995,
    zoom: 12,
  },
  {
    lat: 29.9942924,
    lng: 31.158348,
    zoom: 12,
  },
];

class Stores extends Component {
  checkForNewShops = (shops) => {
    const { shopsWithAddress } = this.state;
    const newShopsWithAddress = shops.filter(
      (shop) => shop.name && shop.address
    );
    if (
      newShopsWithAddress.map((shop) => shop.id).join(" ") !==
      shopsWithAddress.map((shop) => shop.id).join(" ")
    ) {
      this.setState({
        shopsWithAddress: newShopsWithAddress,
        filteredShops: newShopsWithAddress,
        shopsFilter: "",
        selectedShop: undefined,
      });
    }
  };

  shopsFilterChangeHandler = (newShopsFilter) => {
    newShopsFilter = newShopsFilter.toLowerCase();
    const { shopsWithAddress } = this.state;
    const newFilteredShops =
      newShopsFilter.length > 0
        ? shopsWithAddress.filter(
            (shop) =>
              shop.name?.toLowerCase().includes(newShopsFilter) ||
              shop.address?.city?.toLowerCase().includes(newShopsFilter) ||
              shop.address?.area?.toLowerCase().includes(newShopsFilter) ||
              shop.address?.address_line_1
                ?.toLowerCase()
                .includes(newShopsFilter) ||
              shop.address?.address_line_2
                ?.toLowerCase()
                .includes(newShopsFilter)
          )
        : shopsWithAddress;
    this.setState({
      shopsFilter: newShopsFilter,
      filteredShops: newFilteredShops,
      selectedShop: undefined,
    });
  };

  shopsSelectHandler = (newShop) => {
    const { selectedShop } = this.state;
    if (!selectedShop || newShop.id !== selectedShop.id) {
      this.setState({ selectedShop: newShop });
    } else {
      this.setState({ selectedShop: undefined });
    }
  };

  createMarkerPosition = ({ id, address, zoom = 15 }, mapPositions) => {
    // console.log("@shop", id);
    const { latitude, longitude } = address;
    if (latitude && longitude) {
      // console.log("@shop with lat and long", id);
      return {
        logoUrl: "/img/themes/levis/mapsAndLocation.png",
        position: {
          lat: latitude,
          lng: longitude,
          zoom: zoom,
        },
      };
    }
    const { shops } = this.props;
    const shopNdx = shops.findIndex((shop) => shop.id === id);
    return {
      logoUrl: "/img/themes/levis/mapsAndLocation.png",
      position: {
        ...mapPositions[shopNdx % mapPositions.length],
      },
    };
  };

  //-----------------------------------------------------

  constructor(props) {
    super(props);
    const { shops } = props;
    const filteredShops = shops.filter((shop) => shop.name && shop.address);
    this.state = {
      bcTagPath: [
        { alias: "Home", type: "static", url: Data.getProperUrl() },
        { alias: "Branches" },
      ],
      shopsWithAddress: filteredShops,
      filteredShops: filteredShops,
      shopsFilter: "",
      selectedShop: undefined,
    };
  }

  componentDidMount() {
    const { shops } = this.props;
    this.checkForNewShops(shops);
  }

  componentDidUpdate() {
    const { shops } = this.props;
    this.checkForNewShops(shops);
  }

  render() {
    const { bcTagPath, filteredShops, shopsFilter, selectedShop } = this.state;
    const { organizationName } = this.props;
    const selectedShopMarker = selectedShop
      ? this.createMarkerPosition(selectedShop, mapPositions)
      : undefined;

    return (
      <div className={styles.Stores}>
        {/* <FulscrnWrpr className={styles.storesHeaderWrpr}>
          <StoresHeader
            bcTagPath={bcTagPath}
            organizationName={organizationName}
          />
        </FulscrnWrpr> */}
        <FulscrnWrpr className={styles.storelocatorWrpr}>
          <StoresSkeleton leftColumn={[0]}>
            <Storelocator
              filteredShops={filteredShops}
              shopsFilterChangeHandler={this.shopsFilterChangeHandler}
              shopsFilter={shopsFilter}
              shopsSelectHandler={this.shopsSelectHandler}
              selectedShop={selectedShop}
            />
            <StoresMap
              shopMarker={selectedShopMarker}
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </StoresSkeleton>
        </FulscrnWrpr>
      </div>
    );
  }
}

export default Stores;
