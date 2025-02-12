// import { useState } from 'react';
// import './navbar.css';
// import { assets } from '../../assets/frontend-img/assets';
// import { Link } from 'react-router-dom';

// function  Navbar() {

//     // const [menu,setMenu]= useState("menu")

//   return (
//     <div className='navbar'>
//      <Link to='/'> <img className='logo' src={assets.logo} alt="" /> </Link>
//       <ul  className="navbar-menu">
//         <Link to='/'>Home</Link>
//         <a href='#about'>About Us</a>
//         <a href='#product'>Our Products</a>
//         <a href='#client'>Our Clients</a>
//         <a href=''><i>Shop</i></a>
//         <a href='#categories'>Our Catalog</a>
//         <a href=''>Gallery</a>
//       </ul>
//       <div className="navbar-right">
//             {/* <img src={assets.search_icon} alt="" />
//             <div className="navbar-basket">
//             <Link to='/Cart'><img  src={assets.basket_icon} alt="" /></Link>
//             <div className="dot"></div>
//             </div> */}
//             <button>Contact Us</button>
         
//         </div>
//       </div>
//   )
// }

// export default Navbar

import { useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/frontend-img/assets';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false); // State to toggle mobile menu visibility

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile); // Toggle mobile menu
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="Logo" />
      </Link>

      {/* Navigation menu */}
      <ul className={`navbar-menu ${isMobile ? 'nav-links-mobile' : ''}`}>
        <Link to="/">Home</Link>
        <a href="#about">About Us</a>
        <a href="#product">Our Products</a>
        <a href="#client">Our Clients</a>
        <a href=""><i>Shop</i></a>
        <a href="#categories">Our Catalog</a>
        <a href="">Gallery</a>
      </ul>

      {/* Navbar right section */}
      <div className="navbar-right">
        <button>Contact Us</button>

        {/* Mobile menu toggle button */}
        <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobile ? <>&#10005;</> : <>&#9776;</>} {/* Show either close (×) or hamburger (☰) */}
        </button>
      </div>
    </div>
  );
}

export default Navbar;


