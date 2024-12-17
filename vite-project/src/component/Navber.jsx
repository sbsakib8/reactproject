import React from 'react'
import { NavLink , Outlet } from 'react-router-dom'


function Navber() {
  return (
    <div>
        <ul>
            <li><NavLink to='/'>home</NavLink> </li>
            <li><NavLink to='/about'>about</NavLink> </li>
        </ul>
<Outlet/>
    </div>
  )
}

export default Navber