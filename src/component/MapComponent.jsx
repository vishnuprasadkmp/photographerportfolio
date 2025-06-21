import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "12px",
  marginTop: "2rem"
};

// Choice Bakery, SG Palya
const center = {
  lat: 12.9313,
  lng: 77.6092,
};

const MapComponent = () => {
  return (
       <iframe
      title="Google Map"
      src="https://www.google.com/maps?q=12.931941,77.614786&z=15&output=embed"
      allowFullScreen
      loading="lazy"
      style={{ width: "100%", height: "100%", border: "0" }}
    ></iframe>
  );
};

export default MapComponent;
