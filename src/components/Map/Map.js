import React from "react";

import "./Map.scss";
import styles from "./Map.module.scss"
const Map = () => {
  const countryFlags = [
    {
      country: "egypt",
      flag: "egypt Flag",
      image: "/assets/Map/egypt.png",
      className: styles.egypt,
    },
    {
      country: "poland",
      flag: "poland Flag",
      image: "/assets/Map/poland.png",
      className: styles.poland,
    },
    {
      country: "nigeria",
      flag: "nigeria Flag",
      image: "/assets/Map/nigeria.png",
      className: styles.nigeria,
    },
    {
      country: "saudi",
      flag: "Saudi Flag",
      image: "/assets/Map/saudi.png",
      className: styles.saudi,
    },
  ];

  return (
    <div className={styles.Map}>
      <img
        src={"/assets/Map/map.png"}
        alt="Map"
        className="image image_size_full mapImage"
      />
    
      <ul className={styles.list}>
        {countryFlags.map((countryFlag, index) => {
          const { country, flag, image,className } = countryFlag;
          return (
            <li
              className={[styles.flagItem,className].join(" ")}
              key={index}
            >
              <img
                src={image}
                alt={flag}
                className={`flagList__flag flagList__flag_country_${country}`}
              />
              {/* <span className="flagList__pointer" /> */}
              <span className={styles.pointer} />
            </li>
          );
        })}
      </ul>
  
    </div>
  );
};

export default Map;
