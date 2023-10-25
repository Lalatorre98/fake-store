import React, {useEffect, useContext} from 'react'
import './ListingDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AddCartContext } from '../../contexts/AddCartContext'


function ListingDetails() {
    //this page shows details of a specific listing
    //when the page loads
    //how do I know which character
    //the id is in the url
    //extract the id with useParams hook
    const {listingId} = useParams()
    //create state to hood character details
    const[listing, setListing]=React.useState('')
    const {addListing, cart, removeListing}=useContext(AddCartContext)

    //https://fakestoreapi.com/products/1

    //set up useEffect to run when the page loads 
    const [isAdded, setIsAdded]=React.useState(false)


  useEffect(
    ()=>{
      //console.log(favorites)
      //is this in cart?
      setIsAdded(cart?.find(item=>item.id===listing.id))

    }, [cart]
  )
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
            <button className='button' onClick={()=>addListing(listing.id)}>Add to Cart</button>
            {/* {
          isAdded?
        <button className='button' onClick={()=>addListing(listing.id)}/>
        :
        <button className='button' onClick={()=>removeListing(listing.id)}/>

        } */}
        
        </div>
        </div>
  )
}

export default ListingDetails