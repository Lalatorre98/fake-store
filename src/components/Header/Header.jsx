import React, {useEffect, useState} from 'react'
import './Header.css'
import axios from 'axios'

function Header() {

  return (
 
      
      <div className="header">
        <div className='title-header'>
        <h1>Fake Store</h1>
        <h2><a href='/myfavorites'>My Favorites</a></h2>
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