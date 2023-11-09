import React, {useState, useEffect, useRef} from 'react';
import L, { LatLngTuple, Map, Rectangle, LatLngBoundsExpression } from 'leaflet';
import { MapContainer, SVGOverlay, TileLayer } from 'react-leaflet';
import { GeomanControl } from './Components/GeomanControl';
import Square from './Components/Square';
import './style.css';
import Coordinates from './Components/Coordinates'
import { TextboxOverlay } from './Components/TextboxOverlay';

export default function App() {

  let latRef = useRef<number>();
  let longRef = useRef<number>();

  const [lat, setLat] = useState<number>(39.719303);
  const [long, setLong] = useState <number>(-75.435175);
  
  let farm = L.latLng(lat, long);
  const mapStyle = { height: '100vh', width: '100%', padding: 0 };
  const center: LatLngTuple = [51.505, -0.09]
  const home: LatLngTuple = [39.719303, -75.435175];
  const bounds: LatLngBoundsExpression = [[39.819303, -75.535175],[39.619303, -75.335175]];


  const updateLatLong = async (newLat: number, newLong: number): Promise<void> =>{
    try{
      setLat(newLat);
      setLong(newLong);
    }catch(err){
      console.log('error updating lat and long');
    }
  }

//
  return (
    <React.Fragment>
      <div className='maps'>
        <div id='coordinatesOverlay'>
          <Coordinates updateLatLong={updateLatLong}/>
          <h2>Latidude: {lat}</h2>
          <h2>Longitude: {long}</h2>
        </div>
        <div className='mapContainer'>
          <MapContainer
            key={JSON.stringify([lat, long])}
            center={[lat, long]}
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
            <Square center={home} size={100} />
            {/* <TextboxOverlay position="topleft" lat={lat} long={long} /> */}

          </MapContainer>
        </div>

      </div>
    </React.Fragment>
  );
}
