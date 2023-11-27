import React from 'react';
import { createControlComponent } from '@react-leaflet/core';
import * as L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';
import { textProps } from '../types'




  let textbox = L.Control.extend({
    initialize(options: textProps){
      L.setOptions(this, options);
      console.log('This:', this);
    },
    
    onAdd: (map: L.Map) => {
      console.log(map);
      if(!map.pm) return;
      const text = L.DomUtil.create('div');
      text.id = 'latLongInputBox';
      text.innerHTML = `<form><input className="lat" type="string" placeholder="Latitude"></input>
      <input id="latInputBox" type="string" value='0' placeholder="Longitude"></input>
      <button className='submitButton'>Submit</button></form>`;
      console.log('Text: ', text)
      return text;
    },
  });

  document.addEventListener('click', function(event) {
    event.preventDefault();
    let boxes = document.getElementById('latInputBox');
    let boxes1 = document.getElementById('coordinateBoxes');
    console.log('boxes:', boxes);
    console.log('Coor boxes:', boxes1);
    console.log(event);
  }, false)
  const createTextboxOverlay = (props: textProps) => {

  return new textbox(props);

}
export const TextboxOverlay = createControlComponent(createTextboxOverlay);