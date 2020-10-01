import React, { Component } from "react";

import { MapMarker, Phone, Close_2px } from "../../SvgIcons";

import * as styles from "./StoreBox.module.scss";

const createAddressString = ({
  building_number,
  address_line_1,
  address_line_2,
  area,
  city,
  country,
}) =>
  [building_number, address_line_1, address_line_2, area, city, country]
    .filter((value) => value)
    .join(", ");

const StoreBox = ({ shop, shopsSelectHandler, selectedShop }) => {
  let storeAddress = createAddressString(shop.address || {});
  return (
    <button
      className={styles.StoreBox}
      onClick={() => shopsSelectHandler(shop)}
    >
      <h3 className={styles.title}>{shop.name}</h3>
      <div
        className={[
          styles.detailsBox,
          selectedShop && selectedShop.id === shop.id
            ? styles.showDetails
            : null,
        ].join(" ")}
      >
        <h3 className={styles.title}>
          {shop.name}
          <Close_2px />
        </h3>
        <p className={styles.details}>
          <MapMarker />
          {storeAddress}
        </p>
        {shop.phone && (
          <p className={styles.details}>
            <Phone />
            {shop.phone}
          </p>
        )}
      </div>
    </button>
  );
};

export default StoreBox;
