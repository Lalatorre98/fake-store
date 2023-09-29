import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ListingCard from '../../components/ListingCard/ListingCard'

function Homepage() {
  //create state to hold the listings
  const [listing, setListings]=useState([])
  //this page should show all the listings when it loads
  //create useEffect for this
  //'https://fakestoreapi.com/products'
  

  useEffect(
    ()=>{
      //console.log('homepage loaded')
      //make api call to get characters 
      //axios.get(`https://fakestoreapi.com/products/`)

      axios.get(`https://fakestoreapi.com/products/`)
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
    <div className="home-container">
      
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

export default Homepage