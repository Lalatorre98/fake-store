import React from 'react'
import './ListingCard.css'


function ListingCard({listing}) {
  return (
    <div className="listing-container">
     <div className="listing-card">
         <img src={listing.image} />
        <a href={`/details/${listing.id}`}><p>{listing.title}</p></a>
        <div className="description">
            <p>{listing.category}</p>
        </div>
        <div>
        <p>{listing.price}€</p>
        </div> 
    </div>
    </div>
  )
}

export default ListingCard