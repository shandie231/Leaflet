import * as React from 'react';
import * as L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import { GeomanControl } from './GeomanControl';
import './style.css';

export default function App() {
  const washingtonDC = L.latLng(38.9072, -77.0369);
  const mapStyle = { height: '100vh', width: '100%', padding: 0 };

  return (
    <React.Fragment>
      <MapContainer
        center={washingtonDC}
        zoom={8}
        zoomControl={false}
        style={mapStyle}
        whenReady={() => {}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeomanControl position="topright" drawCircle={false} oneBlock />
      </MapContainer>
    </React.Fragment>
  );
}
