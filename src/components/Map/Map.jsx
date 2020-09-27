import React from "react";

import styles from "./Map.module.scss";
const Map = (props) => {
  const countryFlags = [
    {
      country: "egypt",
      flag: "egypt Flag",
      image: "/home/assets/Map/egypt.png",
      className: styles.egypt,
    },
    {
      country: "poland",
      flag: "poland Flag",
      image: "/home/assets/Map/poland.png",
      className: styles.poland,
    },
    {
      country: "nigeria",
      flag: "nigeria Flag",
      image: "/home/assets/Map/nigeria.png",
      className: styles.nigeria,
    },
    {
      country: "saudi",
      flag: "Saudi Flag",
      image: "/home/assets/Map/saudi.png",
      className: styles.saudi,
    },
  ];

  const { data, mapImg } = props;
  return (
    <React.Fragment>
      <div className={styles.MapContainer}>
        {data && (
          <div className={styles.header}>
            <h3>
              {data.title[0]} <span> {data.title[1]}</span>
            </h3>
            <p>{data.description}</p>
            <div className={styles.brands}>
              {data.brands.map((brand) => (
                <img src={brand} alt="brand" />
              ))}
            </div>
          </div>
        )}

        <div className={styles.Map}>
          <img
            src={mapImg}
            alt="Map"
            className={styles.mapImg}
          />

          <ul className={styles.list}>
            {countryFlags.map((countryFlag, index) => {
              const { country, flag, image, className } = countryFlag;
              return (
                <li
                  className={[styles.flagItem, className].join(" ")}
                  key={index}
                >
                  <img
                    src={image}
                    alt={flag}
                    className={`flagList__flag flagList__flag_country_${country}`}
                  />
                  <span className={styles.pointer} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Map;
