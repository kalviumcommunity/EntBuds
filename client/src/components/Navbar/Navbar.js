import React, {useState} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import cinebuds from './entbuds.png'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div>
      <nav className='navbar'>
        <div className='container'>
          <div className='left'>
          <Link to= "/" ><img src = {cinebuds} alt='logo' className='logo'></img></Link>
            
            <Link to = "/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>

            <Link to = "/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
            

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
