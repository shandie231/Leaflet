import React, { useEffect, useState } from 'react';



type Props = {
  updateLatLong: any;

}
 const Coordinates = (props: Props) => {

  const { updateLatLong} = props;
  let easyLat: number;
  let easyLong: number;
  const [lati, setLat] = useState <number> ()  ;
  const [longi, setLong] = useState<number>();

  const changeLat = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    updateLatLong(lati, longi);

  }
  //

  return (
    <div className='coordiantes'>
      <h1>
        Display Coordinates
      </h1>
      <div id='coordinateBoxes'>
        <form onSubmit={(e) => {changeLat(e)}}>
          <input className="lat" type="string" placeholder="Latitude" onChange={(e) => setLat(Number(e.target.value))}></input>
          <input className="long" type="string" placeholder="Longitude" onChange={(e) => setLong(Number(e.target.value))}></input>
          <br></br>
          <button className='submitLatLongBtn'>Submit</button>
        </form>
      </div>
      <div id='currCoordinates'>
      </div>
    </div>
  )
}

export default Coordinates;