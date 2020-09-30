import React, { Component } from "react";

import * as styles from "./YoutubeVideoSlide.module.scss";

class YoutubeVideoSlide extends Component {
  constructor(props) {
    super(props);
    this.youtubeVideo = React.createRef();
  }
  render() {
    const { videoUrl } = this.props;
    return videoUrl ? (
      <div className={styles.maxWidthContainer}>
        <div className={styles.YoutubeVideoSlide}>
          <iframe
            title="nasnav"
            ref={this.youtubeVideo}
            // src={`https://www.youtube.com/embed/${videoUrl}?rel=0`}
            src="https://develop.nasnav.org/files/shop360/pannellum/v3/index.html?autoLoad=true&shop_id=287"
            frameBorder="0"
            // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="allowfullscreen"
          />
        </div>
      </div>
    ) : null;
  }
}

export default YoutubeVideoSlide;
