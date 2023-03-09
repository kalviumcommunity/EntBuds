import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import cinebuds from './entbuds.png'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='container'>
          <div className='left'>
          <Link to= "/" ><img src = {cinebuds} alt='logo' className='logo'></img></Link>
            
            <Link to = "/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
            <Link to = "/movies/top-rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
            <span>Categories</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
