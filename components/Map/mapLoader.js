import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import React from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { Icon } from 'leaflet';

const MapLoader = ({ markerRef, eventHandlers }) => {
  return (
<MapContainer center={[42.3314, -83.0458]} zoom={14} scrollWheelZoom={true} style={{ height: "400px", width: "100%" }}>
<TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
   <Marker
   eventHandlers={eventHandlers}
   position={[42.3314, -83.0458]}
   draggable={true}
   animate={true}
   ref={markerRef}
   >
       {/* <Popup>
           Popup
       </Popup> */}
   </Marker>
</MapContainer>
  );
};

export default MapLoader;