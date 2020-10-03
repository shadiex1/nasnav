import React, { Component } from "react";

import FulscrnWrpr from "../FullScreenContainer/FullScreenWrapper";
import StoresSkeleton from "./StoresSkeleton/StoresSkeleton";
import Storelocator from "./StoreLocator/StoreLocator";
import StoresMap from "./StoresMap/StoresMap";


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
    const { latitude, longitude } = address;
    if (latitude && longitude) {
      return {
        logoUrl: `${process.env.PUBLIC_URL + "/assets/mapsAndLocation.png"}`,
        position: {
          lat: latitude,
          lng: longitude,
          zoom: zoom,
        },
      };
    }
   
  };


  constructor(props) {
    super(props);
    const filteredShops = [];
    this.state = {
      shopsWithAddress: filteredShops,
      filteredShops: filteredShops,
      shopsFilter: "",
      selectedShop: undefined,
      shops: [],
    };
  }

  componentDidMount() {
    const { name } = this.props;
    const { shops } = this.state;
    fetch(`https://backend.nasnav.org/navbox/location_shops?name=${name}`)
      .then((res) => res.json())
      .then((shops) => this.setState({ shops: shops }));
    this.checkForNewShops(shops);
  }

  componentDidUpdate() {
    const { name } = this.props;
    const { shops } = this.state;
    fetch(`https://backend.nasnav.org/navbox/location_shops?name=${name}`)
      .then((res) => res.json())
      .then((shops) => this.setState({ shops: shops }));
    this.checkForNewShops(shops);
    console.log(shops);
  }

  render() {
    const { filteredShops, shopsFilter, selectedShop } = this.state;
    const {close}=this.props
    const selectedShopMarker = selectedShop
      ? this.createMarkerPosition(selectedShop, mapPositions)
      : undefined;

    return (
      <div className={styles.Stores}>
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
          <div onClick={close} className={styles.overlay}>

          </div>
        </FulscrnWrpr>
      </div>
    );
  }
}

export default Stores;
