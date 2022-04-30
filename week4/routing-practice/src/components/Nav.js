import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/"> Root </NavLink></li>
        <li><NavLink to="/home">Home </NavLink></li>
        <li><NavLink to="/4">4</NavLink></li>
        <li><NavLink to="/hello">Hello </NavLink></li>
      </ul>
        
    </nav>
  )
}

export default Nav