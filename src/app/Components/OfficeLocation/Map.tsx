"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <MapContainer
      center={[41.91065, -87.64798]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full max-w-[700px] rounded-sm"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[41.91065, -87.64798]}>
        <Popup>Our location</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
