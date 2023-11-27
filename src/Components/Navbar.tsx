import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Link as RouterLink } from 'react-router-dom'


const Navbar = () => {

  return(
    <div className='navBar' style={{
      display: 'flex', 
      justifyContent: 'space-around', 
      flexDirection: 'row', 
      border: '1px solid grey',
      margin: '5px',
      padding: '10px' }}>
      <button className='navBtn'><RouterLink to='/job'>Jobs</RouterLink></button>
      <button className='navBtn'><RouterLink to='/'>Map</RouterLink></button>
    </div>
  )

}

export default Navbar;