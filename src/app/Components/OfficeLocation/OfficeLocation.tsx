"use client";

import { WrapperDiv } from "@/app/Utils/WrapperDiv";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import InformationCards from "./InformationCards";
function OfficeLocation() {
  return (
    <section className="bg-secondary py-24">
      <WrapperDiv className="gap-5">
        <div className="w-full max-w-[450px]  text-primary bg-[#1F1D21]">
          <InformationCards />
        </div>
        <MapContainer
          center={[41.91065, -87.64798]}
          zoom={13}
          scrollWheelZoom={false}
          className="w-full max-w-[700px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[41.91065, -87.64798]}>
            <Popup>Our location</Popup>
          </Marker>
        </MapContainer>
      </WrapperDiv>
    </section>
  );
}

export default OfficeLocation;
