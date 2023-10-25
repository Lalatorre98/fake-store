import React, {useContext, useState} from 'react'
import './MyCart.css'
import { AddCartContext } from '../../contexts/AddCartContext'
import ListingCard from '../../components/ListingCard/ListingCard'
import {BsTrash} from "react-icons/bs"

function MyCart() {
    const {cart}=useContext(AddCartContext)
    const [listing, setListings]=useState([])

  return (
    

    <div className="checkout-container">
      <div className="checkout-nav">
        <p className='item'>Item</p>
        <p className='price'>Price</p>
        <p className='quantity'>Quantity</p>
        <p className='remove'>Remove</p>
      </div>
            <hr></hr>
    <div className="cart-listings">
      <img src={listing?.image}/>
            <div className='lis-price'>{listing?.price}€</div>
            <div className='lis-quantity'>1</div> 
            <BsTrash className='lis-trash'/>

      {
        cart.length > 0?
        cart.map(item=><ListingCard listing={item}
        key={item.id}/>)
          :
              <p>You have not added to your cart</p>
      }
    </div>
    </div>
    
  )
}

export default MyCart