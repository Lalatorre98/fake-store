import React, {useEffect, useState} from 'react'
import './Womensclothing.css'
import axios from 'axios'
import ListingCard from '../../components/ListingCard/ListingCard'

function Womensclothing() {
  const [listing, setListings]=useState([])
  useEffect(
    ()=>{
      //console.log('homepage loaded')
      //make api call to get characters 
      //axios.get(`https://fakestoreapi.com/products/category/electronics`)

      axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
      .then(res =>{
        console.log(res.data)
        //I have the data, where do I store it?
        //store it in state
        setListings(res.data)
      })
      .catch(err => console.log(err))
    },[]
  )

  return (
    <div className="clothing-container">
      
    <div className="listings-container" >
    { 
    listing.map(item=><ListingCard listing={item}
     key={item.id}/>)
    }
   {/* listing.map(item=><p key={item.id}>{item.title}</p>) */}
   </div> 
   
 </div>
  )
}

export default Womensclothing