import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { compose } from "recompose";

class StoresMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {
        lat: 30.0470772,
        lng: 31.1748443,
        zoom: 10,
      },
    };
  }

  render() {
    const { shopMarker } = this.props;
    const { position } = this.state;
    const mapKey = shopMarker
      ? "" +
        shopMarker.position.lat +
        shopMarker.position.lng +
        shopMarker.position.zoom
      : "" + position.lat + position.lng + position.zoom;

    return (
      <GoogleMap
        defaultZoom={shopMarker ? shopMarker.position.zoom : position.zoom}
        defaultCenter={shopMarker ? shopMarker.position : position}
        key={mapKey}
      >
        {shopMarker && (
          <Marker
            options={{ icon: { url: shopMarker.logoUrl } }}
            position={{
              lat: shopMarker.position.lat,
              lng: shopMarker.position.lng,
            }}
          />
        )}
      </GoogleMap>
    );
  }
}

export default compose(withScriptjs, withGoogleMap)(StoresMap);
