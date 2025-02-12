import React from 'react'
import './products.css'
import { StoreContext } from '../../context/StoreContext';
import{ useContext } from 'react';
import ProductItem from '../ProductItem/ProductItem';


const Products = ({category}) => {

  const {product_list} = useContext(StoreContext)

  return (
    <div className='products' id='product'>
      <h1>Our  <span style={{color:"rgb(71, 166, 255" }} >Products</span></h1>
    
      <div className='product-display' id='product-display'>         
            {/* <h2>Top dishes near you</h2> */}
            <div className="product-display-list">
        
             {product_list.map((item,index)=>{
                 if(category==="All" || category===item.category){
                    return <ProductItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }  
             })}
            </div>
        </div>
    </div>
  )
}

export default Products
