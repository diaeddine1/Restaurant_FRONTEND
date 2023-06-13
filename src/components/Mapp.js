import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Map(props) {
  const [map, setMap] = useState(null);

  const onLoad = (map) => {
    setMap(map);
  };

  const center = {
    lat: parseFloat(props.lat),
    lng: parseFloat(props.lon)
  };

  const containerStyle = {
    width: "100%",
    height: "500px"
  };

  const labelOptions = {
    text: props.nom,
    fontSize: "16px",
    fontWeight: "bold",
    color: "black",
    backgroundColor: "#000000",
    anchor: { x: 10, y: -10 },
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCDj69xA-gFFOmX1xhpqiAdqzhMkovrauA"
      onLoad={() => console.log("Google Maps API loaded")}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onLoad={onLoad}
      >
        {map && (
          <Marker position={center} icon={{url: "/resto.png",scaledSize: new window.google.maps.Size(50, 50),labelOrigin: new window.google.maps.Point(25, -10),}} label={{text:props.nom,color:"green",fontSize:"18px",fontWeight:"bold"}} 
          
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}
