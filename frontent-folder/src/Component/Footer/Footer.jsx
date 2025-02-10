// import { assets } from '../../assets/frontend_assets/assets';
import './footer.css'
import { assets } from '../../assets/frontend-img/assets';

const Footer = () => {
    return(
        <div className="footer" id='footer'>
          <div className="footer-content">
            <div className="footer-content-left">
             <img className='logo' src={assets.logo} alt="" />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quasi enim aut optio illum, magnam aliquam reiciendis molestiae cum vel ad, dolores necessitatibus nam dignissimos! Officia necessitatibus soluta iusto nesciunt.</p>
             <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt=""/> 
             </div>
            </div>
            <div className="footer-content-center">
                <h2>Products</h2>
                <ul>
                    <li>Water Chiller</li>
                    <li>Water Cooler</li>
                    <li>Water Dispensers</li>
                    <li>Electric Water Heater</li>
                </ul>
            </div>
            <div className="footer-content-right">
            <h2>Usefull Skills</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Our Products</li>
                    <li>Our Client</li>
                    <li><i style={{color:"rgb(17 166 255)"}}>Shop</i></li>
                    <li>Gallery</li>
                    <li>Contact Us</li>
                </ul>
            </div>
          </div>
          <hr />
          <p className="footer-copyright">Copyright 2025 0 Tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer;
