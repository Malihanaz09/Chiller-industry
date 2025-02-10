import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import bag_icon from './bag_icon.png'
import basket_icon from './basket_icon.png'
import search_icon from './search_icon.png'
import parcel_icon from './parcel_icon.png'
import logo from './logo.png'

import about from './about.jpg'

import value_img from './value_img.png'

import Category from './categories.png'

import header_1 from './header_1.png'
import header_2 from './header_2.png'
import header_3 from './header_3.png'
import header_4 from './header_4.png'

import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'

import product_1 from './product_1.png'
import product_2 from './product_2.png'
import product_3 from './product_3.png'
import product_4 from './product_4.png'
import product_5 from './product_5.png'
import product_6 from './product_6.png'


export const assets = {
    about,
    Category,
    value_img,
    logo,
    basket_icon,
    // header_img,
    search_icon,
    // rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    // app_store,
    // play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    // selector_icon,
    // profile_icon,
    // logout_icon,
    bag_icon,
    parcel_icon
}

export const slideData = [
  {
    image: header_1,
    heading: "Water Chiller",
    paragraph: "Lorem ipsum dolor sit consectetur,culpa, dolores minima error vel.Lorem ipsum dolor sit consectetur,culpa, dolores minima error vel."
  },
  {
    image: header_2,
    heading: "Water Cooler",  
    paragraph: "Lorem ipsum dolor sit consectetur,culpa, dolores minima error vel. Lorem ipsum dolor sit consectetur,culpa, dolores minima error vel."
  },
  {
    image: header_3,
    heading: "Electric Water Heater",
    paragraph: "Lorem ipsum dolor sit consectetur, culpa, dol minima error vel. Lorem ipsum dolor sit consectetur,culpa, dolores minima error vel."
  },
  {
    image: header_4,
    heading: "Water Dispenser",
    paragraph: "Lorem ipsum dolor sit consectetur,culpa, dolores minima error vel. Lorem ipsum dolor sit consectetur,culpa, dolores minima error vel."
  }
  ];

  export const menu_list = [
    {
        menu_name: "Water Chiller",
        menu_image: menu_1
    },
    {
        menu_name: "Water Cooler",
        menu_image: menu_2
    },
    {
        menu_name: "Dispenser",
        menu_image: menu_3
    },
    {
        menu_name: "Electric Heater",
        menu_image: menu_4
    },
    {
      menu_name: "AC",
      menu_image: menu_5
  }

  ]

    export const product_list = [
      {
          _id: "1",
          name: "Water Cooler",
          image: product_1,
          price: 12,
          description: "this product is very useful",
          category: "Water Cooler"
      },
      {
          _id: "2",
          name: "Dispenser",
          image: product_2,
          price: 18,
          description: "this product is very useful",
          category: "Dispenser"
      }, {
          _id: "3",
          name: "Electric Heater",
          image: product_3,
          price: 16,
          description: "this product is very useful",
          category: "Electric Heater"
      }
      , {
          _id: "4",
          name: "Water Chiller",
          image: product_4,
          price: 24,
          description: "this product is very useful",
          category: "Water Chiller"
      },
      {
        _id: "5",
        name: "AC",
        image: product_5,
        price: 29,
        description: "this product is very useful",
        category: "AC"
    },
    {
      _id: "6",
      name: "AC Outer",
      image: product_6,
      price: 24,
      description: "this product is very useful",
      category: "AC"
  }
      // , 
      //  {
      //     _id: "5",
      //     name: "Fried Cauliflower",
      //     image: food_22,
      //     price: 22,
      //     description: "Food provides essential nutrients for overall health and well-being",
      //     category: "Pure Veg"
      // }
    ]