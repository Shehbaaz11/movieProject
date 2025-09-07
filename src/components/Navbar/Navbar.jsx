import React from 'react'

import "./Navbar.css";
import DarkMode from '../DarkMode-20250906T192233Z-1-001/DarkMode/DarkMode';
import Fire from '../../assets/fire.png'
import Star from '../../assets/glowing-star.png'
import Party from '../../assets/partying-face.png'

const Navbar = () => {
  return <nav className='navbar'>
   
   <h1>MovieManiac</h1>

  <div className="navbar_link">
    <DarkMode/>
    <a href="#popular">Popular <img src={Fire}alt="fire emoji" className='navbar_emoji' /></a>
    <a href="#top_rated">Top Rated <img src={Star}alt="star emoji" className='navbar_emoji' /></a>
    <a href="#upcoming">Upcoming <img src={Party}alt="party emoji" className='navbar_emoji' /></a>
  </div>
  </nav>
    
  
}

export default Navbar