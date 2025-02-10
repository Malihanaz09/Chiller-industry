import React from 'react'
import './categories.css'
import { assets } from '../../assets/frontend-img/assets'

const Categories = () => {
  return (
    <div className='categories'>
      <div className='categories-text'>
      <h1>Appliances That Matter</h1>
      <p>Fischer is known for manufacturing cooling and hot water appliances. Our geysers are found installed in most 
households in Pakistan. Our commercial water coolers are a must have for every industrial unit. We recently started 
production of Indoor plastic body water dispensers which is very well received products for both home and offices.
</p>
      </div>
      <div className="categories-img">
        <img src={assets.Category} alt="" />
      </div>
    </div>
  )
}

export default Categories
