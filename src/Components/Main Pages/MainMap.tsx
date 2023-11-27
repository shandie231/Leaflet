import React, {useState, useEffect, useRef} from 'react';
import L, { LatLngTuple, Map, Rectangle, LatLngBoundsExpression } from 'leaflet';
import { MapContainer, SVGOverlay, TileLayer } from 'react-leaflet';
import { GeomanControl } from '../MapComponents/GeomanControl';
import Square from '../MapComponents/Square';
import Coordinates from '../MapComponents/Coordinates';
import Navbar from '../Navbar';

export default function MainMap() {

  let latRef = useRef<number>();
  let longRef = useRef<number>();

  const [lat, setLat] = useState<number>(39.719303);
  const [long, setLong] = useState <number>(-75.435175);
  const [locaName, setLocaName] = useState <string>();
  
  let farm = L.latLng(lat, long);
  const mapStyle = { height: '100vh', width: '100%', padding: 0 };
  const center: LatLngTuple = [51.505, -0.09]
  const home: LatLngTuple = [39.719303, -75.435175];
  const bounds: LatLngBoundsExpression = [[39.819303, -75.535175],[39.619303, -75.335175]];


  const updateLatLong = async (newLat: number, newLong: number, newLocaName: string): Promise<void> =>{
    try{
      setLat(newLat);
      setLong(newLong);
      setLocaName(newLocaName);
    }catch(err){
      console.log('error updating lat and long');
    }
  }

//
  return (
    <div>
      <Navbar />
      <React.Fragment>
        <div className='maps'>
          <div id='coordinatesOverlay'>
            <Coordinates updateLatLong={updateLatLong}/>
            <h2>Latidude: {lat}</h2>
            <h2>Longitude: {long}</h2>
            <h2>Location: {locaName}</h2>
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
    </div>
  );
}
