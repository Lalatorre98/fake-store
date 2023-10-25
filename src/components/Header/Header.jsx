import React, {useContext, useEffect, useState} from 'react'
import './Header.css'
import axios from 'axios'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { AddCartContext } from '../../contexts/AddCartContext'


function Header() {
  //  const {addListing, cart, removeListing}=useContext(AddCartContext)
  // const [isAdded, setIsAdded]=React.useState(false)

  // useEffect(
  //   ()=>{
  //     //console.log(favorites)
  //     //is this in cart?
  //     setIsAdded(cart?.find(item=>item.id===listing.id))

  //   }, [cart]
  // )

  return (
 
      
      <div className="header">
        <div className='title-header'>
        <h1>Fake Store</h1>
        <h2><a href='/MyFavorites'>My Favorites</a></h2>

        <a href='/MyCart'>
        <AiOutlineShoppingCart className='cart'/>
        </a>

    
        </div>
      
      
      <div className="header-container">
      
        <a href='/' style={{marginRight:"28px"}}>All</a>
        <a href='/electronics' style={{marginRight:"28px"}}>Electronics</a>
        <a href='/jewelry' style={{marginRight:"28px"}}>Jewelry</a>
        <a href='/MensClothing' style={{marginRight:"28px"}}>Men's Clothing</a>
        <a href='WomensClothing'>Women's Clothing</a>
        </div>
        </div>

        
      
    
  )
}

export default Header