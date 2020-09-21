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
            title={videoUrl}
            ref={this.youtubeVideo}
            src={`https://www.youtube.com/embed/${videoUrl}?rel=0`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          />
        </div>
      </div>
    ) : null;
  }
}

export default YoutubeVideoSlide;
