import React, {useEffect} from 'react'
import './ListingDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ListingDetails() {
    //this page shows details of a specific listing
    //when the page loads
    //how do I know which character
    //the id is in the url
    //extract the id with useParams hook
    const {listingId} = useParams()
    //create state to hood character details
    const[listing, setListing]=React.useState('')

    //https://fakestoreapi.com/products/1

    //set up useEffect to run when the page loads 
    useEffect(

        ()=>{
            console.log('get data for id', listingId)
            //make api call to get the data for this character
            axios.get(`https://fakestoreapi.com/products/${listingId}`)
            .then(res=>{
                console.log(res.data)
                //I have the data for this character, where do I store it?
                //store in state
                setListing(res.data)
            })

            .catch(err=>console.log(err))

        },[] //runs once when the page loads
    )

  return (
        <div className="details-container">
        <div className='img-details'>
            <img src={listing?.image} />
            </div>
        <div className="container-info">
            <p className='title'>{listing?.title}</p>
            <p className='price'>{listing?.price}€</p>
            <p className='description'>Description:</p> 
            <p className='text'>{listing?.description}</p>
            <button className='button'>Add to Cart</button>
        
        </div>
        </div>
  )
}

export default ListingDetails