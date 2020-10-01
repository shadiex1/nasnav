import React, { Component } from "react";
import styles from "./Showcase.module.scss";
import { SearchIcon, PlayArrow } from "../SvgIcons/SvgIcons";

class Showcase extends Component {
  state = {
    searchInput: "",
  };
  searchSubmitted = () => {
    const { searchInput } = this.state;
    if (searchInput.trim()) {
      
    }
  };
  searchInputChangeHandler = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { data, togglePopup } = this.props;
    return (
      <div className={styles.Showcase}>
        <div className={styles.searchbar}>
          <img
            src={process.env.PUBLIC_URL + "/assets/Showcase/layer-15@3x.png"}
            alt="logo"
          />
          <input
            onChange={this.searchInputChangeHandler}
            type="text"
            placeholder="Find your products on goolge"
          />
          <div onClick={this.searchSubmitted} className={styles.iconConatiner}>
            <SearchIcon />
          </div>
        </div>
        <div className={styles.title}>
          <h2>
            {data.title[0]}
            <span> {data.title[1]} </span>
          </h2>
        </div>
        <div className={styles.btnsContainer}>
          <div className={styles.btn}>
            {console.log(this.state)}

            <img
              src={process.env.PUBLIC_URL + "/assets/Menu/layer-2@3x.png"}
              alt="watch"
            />{" "}
            Watch how to do it
          </div>
          <div onClick={togglePopup} className={styles.btnSmall}>
            <PlayArrow />
          </div>
        </div>

        <div className={styles.gallery}>
          <img
            className={styles.sideLeft}
            src={data.screens.screenLeft}
            alt="mobile screen"
          />
          <img src={data.screens.screenCenter} alt="mobile screen" />
          <img
            className={styles.sideRight}
            src={data.screens.screenRight}
            alt="mobile screen"
          />
        </div>
      </div>
    );
  }
}

export default Showcase;
