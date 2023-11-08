import React, {useState, useEffect, useRef} from 'react';
import L, { LatLngTuple, Map, Rectangle } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import { GeomanControl } from './Components/GeomanControl';
import Square from './Components/Square';
import './style.css';
import Coordinates from './Components/Coordinates'

export default function App() {

  let latRef = useRef<number>();
  let longRef = useRef<number>();

  const [lat, setLat] = useState<number>(0);
  const [long, setLong] = useState <number>(0);
  
  let farm = L.latLng(lat, long);
  const mapStyle = { height: '100vh', width: '100%', padding: 0 };
  const center: LatLngTuple = [51.505, -0.09]
  const home: LatLngTuple = [39.719303, -75.435175];


  const updateLatLong = async (newLat: number, newLong: number): Promise<void> =>{
    try{
      setLat(newLat);
      setLong(newLong);
    }catch(err){
      console.log('error updating lat and long');
    }
  }


  return (
    <React.Fragment>
      <div className='maps'>
        <div id='coordinatesOverlay'>
          <Coordinates updateLatLong={updateLatLong}/>
        </div>
        <h1>
          {`lat: ${lat}, Long: ${long}`}
        </h1>
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

        </MapContainer>

      </div>
    </React.Fragment>
  );
}
