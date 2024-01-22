import React from 'react'
import '.././chr.css'
import logo from '../../assets/petcare.png';
import searchicon from '../../assets/search-icon.png';

function NavbarHero() {
  return (
  <div className='hero'>
    <div className='navbar-hero'>
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt='petcare-logo' className='logo' />
      </div>
      <div className='navbar-links'>
        <a href='#'>Home</a>
        <a href='#'>Product</a>
        <a href='#'>Promo</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
        <img src={searchicon} alt='search' className='search' />
      </div>
      </nav>
      
    </div>
    <div className='hero-title'>
        We Care About Your Pet
      </div>
      <div className='hero-p'>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</div>
      <button className='hero-btn'>Order Now</button>
  </div>
  
  )
}

export default NavbarHero