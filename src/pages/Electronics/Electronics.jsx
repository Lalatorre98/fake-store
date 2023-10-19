import React, {useEffect, useState} from 'react'
import './Electronics.css'
import axios from 'axios'
import ListingCard from '../../components/ListingCard/ListingCard'


function Electronics() {
  //when the user selects the page, the page shows the filtered info about the page 
  const [listing, setListings]=useState([])
  //this page should show all the listings when it loads
  //create useEffect for this
  //'https://fakestoreapi.com/products'
  

  useEffect(
    ()=>{
      //console.log('homepage loaded')
      //make api call to get characters 
      //axios.get(`https://fakestoreapi.com/products/category/electronics`)

      axios.get(`https://fakestoreapi.com/products/category/electronics`)
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
    <div className="electronics-container">
      
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

export default Electronics