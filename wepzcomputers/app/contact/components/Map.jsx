"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Map = () => {
  const [MapComponent, setMapComponent] = useState(null);

  useEffect(() => {
    const loadMap = async () => {
      const { MapContainer, TileLayer, Marker, Popup } = await import(
        "react-leaflet"
      );
      const L = await import("leaflet");

      setMapComponent(() => {
        return ({ position }) => (
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Wepz Computers <br /> Guwahati, Assam
              </Popup>
            </Marker>
          </MapContainer>
        );
      });
    };

    loadMap();
  }, []);

  if (!MapComponent) return <div>Loading map...</div>;

  return <MapComponent position={[26.1445, 91.7362]} />;
};

export default dynamic(() => Promise.resolve(Map), { ssr: false });
