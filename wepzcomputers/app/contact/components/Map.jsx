"use client";

import { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Set up the marker icon (optional)
const markerIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/484/484167.png", // You can replace this with your preferred marker image
  iconSize: [35, 45], // size of the icon
  iconAnchor: [17, 46], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -46], // point from which the popup should open relative to the iconAnchor
});

const Map = () => {
  const [isMounted, setIsMounted] = useState(false);
  const position = [26.186196, 91.74588]; // Latitude and Longitude for WEPZ Computers, Guwahati

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-[90%] mx-auto h-96">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            WEPZ Computers <br /> Donar Planet, Guwahati.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
