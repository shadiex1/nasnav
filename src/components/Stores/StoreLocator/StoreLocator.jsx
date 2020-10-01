import React, { Component } from "react";

import { SearchIcon } from "../SvgIcons";
import StoreBox from "./StoreBox/StoreBox";
import * as styles from "./Storelocator.module.scss";

const Storelocator = ({
  shopsFilterChangeHandler,
  shopsFilter,
  filteredShops,
  shopsSelectHandler,
  selectedShop,
}) => {
  return (
    <div className={styles.Storelocator}>
      <h3 className={styles.title}>Store locator</h3>
      <div className={styles.searchContainer}>
        <input
          type="text"
          size="5"
          placeholder="Find a store"
          onChange={(e) => shopsFilterChangeHandler(e.target.value)}
          value={shopsFilter}
        />
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className={styles.shopsContainer}>
        {filteredShops.map((shop) => (
          <StoreBox
            shop={shop}
            shopsSelectHandler={shopsSelectHandler}
            selectedShop={selectedShop}
          />
        ))}
      </div>
    </div>
  );
};

export default Storelocator;
