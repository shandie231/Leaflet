import * as React from 'react';
import L, { LatLngTuple, Map, Rectangle } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import { GeomanControl } from './Components/GeomanControl';
import Square from './Components/Square';
import './style.css';

export default function App() {
  const washingtonDC = L.latLng(38.9072, -77.0369);
  const farm = L.latLng(39.719303, -75.435175);
  const mapStyle = { height: '100vh', width: '100%', padding: 0 };
  const center: LatLngTuple = [51.505, -0.09]
  const test = L.latLng(51.505, -0.09);

  return (
    <React.Fragment>
      <div className='maps'>
      <MapContainer
        center={center}
        zoom={15} //ranges from 0 to 18 - zero being the whole globe, 18 being fully zoomed in
        zoomControl={false}
        style={mapStyle}
        whenReady={() => {}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeomanControl position="topright" drawCircle={false} oneBlock />
        <Square center={center} size={100} />
      </MapContainer>
      </div>
    </React.Fragment>
  );
}
