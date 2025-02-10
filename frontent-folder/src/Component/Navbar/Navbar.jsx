// import { useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/frontend-img/assets';
// import { assets } from '../../assets/fronte/nd_assets/assets';
import { Link } from 'react-router-dom';
// import { assets } from '../../assets/frontend_assets/assets.js';

function  Navbar() {

    // const [menu,setMenu]= useState("menu")

  return (
    <div className='navbar'>
     <Link to='/'> <img className='logo' src={assets.logo} alt="" /> </Link>
      <ul className="navbar-menu">
        <Link to='/'>Home</Link>
        <a href=''>About Us</a>
        <a href=''>Our Products</a>
        <a href=''>Our Clients</a>
        <a href='' style={{color:"rgb(71, 166, 255"}}><i>Shop</i></a>
        <a href=''>Our Catalog</a>
        <a href=''>Gallery</a>
      </ul>
      <div className="navbar-right">
            {/* <img src={assets.search_icon} alt="" />
            <div className="navbar-basket">
            <Link to='/Cart'><img  src={assets.basket_icon} alt="" /></Link>
            <div className="dot"></div>
            </div> */}
            <button>Contact Us</button>
        </div>
      </div>
  )
}

export default Navbar
