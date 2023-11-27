import React, {useState, useEffect, useRef} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import L, { LatLngTuple, Map, Rectangle, LatLngBoundsExpression } from 'leaflet';
import { MapContainer, SVGOverlay, TileLayer } from 'react-leaflet';
import { GeomanControl } from './Components/MapComponents/GeomanControl';
import Square from './Components/MapComponents/Square';
import './style.css';
import Coordinates from './Components/MapComponents/Coordinates'
import { TextboxOverlay } from './Components/MapComponents/TextboxOverlay';
import MainMap from './Components/Main Pages/MainMap';
import NewJob from './Components/Main Pages/JobInfo';

const App = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainMap />}/>
        <Route path='/job' element={<NewJob />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;