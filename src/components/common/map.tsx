// AIzaSyDbfQy8rNHmpYK1EL9Oxb3hYBXu0YDlXHg

import { APIProvider, Map } from "@vis.gl/react-google-maps";

function MapView() {
  const position = { lat: 53.54, lng: 10 };

  return (
    <APIProvider apiKey="AIzaSyDbfQy8rNHmpYK1EL9Oxb3hYBXu0YDlXHg">
      <div style={{ height: "100vh", width: "100vh" }}>
        <Map zoom={9} center={position}></Map>
      </div>
    </APIProvider>
  );
}

export { MapView };
