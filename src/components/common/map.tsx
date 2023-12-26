// AIzaSyDbfQy8rNHmpYK1EL9Oxb3hYBXu0YDlXHg

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useState, useEffect } from "react";

function MapView({ address }) {
  const [position, setPosition] = useState({ lat: 53.54, lng: 10 });

  function loadPosition() {
    console.log("Address,", address);
    let encodedAddress = encodeURIComponent(address);

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDU-2D0eKhuH9c8VCUpN2raOMHf3jCM5ko`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Response", data);
        if (!!data.results[0])
          setPosition({
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng,
          });
      })
      .catch((error) => console.error(error));
  }
  console.log(position);
  return (
    <APIProvider apiKey="AIzaSyDU-2D0eKhuH9c8VCUpN2raOMHf3jCM5ko">
      <div style={{ height: "100vh", width: "100vh" }}>
        <Map zoom={18} center={position} onTilesLoaded={loadPosition}>
          <Marker position={position} />
        </Map>
      </div>
    </APIProvider>
  );
}

export { MapView };
