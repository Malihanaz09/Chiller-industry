import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='about' id='about'>
           <div className="overlay"></div>
     <div className="about-content">
     <h1  data-aos="zoom-in-left" >Our Journey So Far</h1>
      <p  data-aos="zoom-in-right">Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy 
text ever since the 1500s</p>
      <button>Learn more</button>
     </div>
    </div>
    
  )
}

export default About
