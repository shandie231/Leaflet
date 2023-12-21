import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Link as RouterLink } from 'react-router-dom'


const Navbar = () => {

  return(
    <div className='navBar'>
      <button className='navBtn'><RouterLink to='/job'>Jobs</RouterLink></button>
      <button className='homeBtn'><RouterLink to='/'>Homepage</RouterLink></button>
      <button className='navBtn'><RouterLink to='/map'>Map</RouterLink></button>
    </div>
  )

}

export default Navbar;