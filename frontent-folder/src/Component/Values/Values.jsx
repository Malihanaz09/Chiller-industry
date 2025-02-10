import React from 'react'
import './values.css'
import { assets } from '../../assets/frontend-img/assets'
const Values = () => {
  return (
    <div className='values'>
        <div className='right-side'>
        <h1>Our <span style={{color:"rgb(71, 166, 255" }} >Values</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat numquam recusandae eaque vel ipsam nemo quae possimus a laborum, natus, corrupti, consequuntur omnis exercitationem earum amet suscipit! Amet, optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat dolorum, consequatur nemo cupiditate molestias neque ea. Nulla voluptatem fugit sapiente atque perspiciatis exercitationem perferendis illo adipisci, quis magni voluptate!</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, doloremque debitis esse vero quo adipisci perferendis. Odit, praesentium alias, quia inventore culpa necessitatibus non fugiat illo vero dignissimos labore. Sunt?</p>
        </div>
        <div className="left-side">
            <img src={assets.value_img} alt="" />
        </div>
    </div>
  )
}

export default Values
