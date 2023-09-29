import React, {useEffect, useState} from 'react'
import './Header.css'
import axios from 'axios'

function Header() {

  return (
 
      
      <div className="header">
        <div className='title-header'>
        <h1>Fake Store</h1>
        </div>
      
      
      <div className="header-container">
      
        <a href='#' style={{marginRight:"28px"}}>All</a>
        <a href='#' style={{marginRight:"28px"}}>Electronics</a>
        <a href='#' style={{marginRight:"28px"}}>Jewelry</a>
        <a href='#' style={{marginRight:"28px"}}>Men's Clothing</a>
        <a href='#'>Women's Clothing</a>
        </div>
        </div>

        
      
    
  )
}

export default Header