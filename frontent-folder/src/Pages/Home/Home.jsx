import React from 'react'
import ExploreMenu from '../../Component/ExploreMenu/ExploreMenu'
import Slider from '../../Component/Slider/Slider'
import Products from '../../Component/Products/Products'
import Categories from '../../Component/Categories/Categories'
import Values from '../../Component/Values/Values'
import { useState } from 'react'
import About from '../../Component/About/About'
import Client from '../../Component/Client/Client'

const Home = () => {

  const[category,setCategory] = useState("All")


  return (
    <div>
      <Slider/>
     <div className='app'>
     <ExploreMenu category={category} setCategory={setCategory} />
     <Products category={category}/>
    </div>
    <Categories/>
    <div className="app">
    <Client/>
    </div>
    <About/>
    <div className="app">
    <Values/>
    </div>
    </div>
  )
}

export default Home
