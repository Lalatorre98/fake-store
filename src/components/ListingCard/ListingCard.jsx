import React, { useContext, useEffect } from 'react'
import './ListingCard.css'
import {FaHeart, FaRegHeart} from "react-icons/fa"
import { FavoritesContext } from '../../contexts/FavoritesContext';


function ListingCard({listing}) {
  //create variable to test rendering 
  const {addListing, favorites, removeListing}=useContext(FavoritesContext)

  // const isFavorite=false;
  //change to state
  const [isFavorite, setIsFavorite]=React.useState(false)

  //create useEffect to run anytime favorites changes
  useEffect(
    ()=>{
      // console.log(favorites)
      //is this character im favorties?
      setIsFavorite(favorites?.find(item=>item.id===listing.id))
    },[favorites]
  )

  return (
    <div className="listing-container">
     <div className="listing-card">
        
      <div className="image-border">
        {
          isFavorite?
          <FaHeart className='heart-icon'
          onClick={()=>removeListing(listing.id)} />
          :
          <FaRegHeart className='heart-icon'
           onClick={()=>addListing(listing)}/>
         }
         <img src={listing.image} />
         
         </div>
         
        <a href={`/details/${listing.id}`}>
          <div className="title">
          <p>{listing.title?.slice(0,18)}</p>
          {/* {upcomingMovies[index]?.overview.slice(0, 130)}... */}
          </div>
          </a>
        <div className="description">
         
            <p className='listing'>{listing.category}</p>
            
        </div>
        <div>
         
        <p className='price'>{listing.price}€</p>
      
        </div> 
    </div>
    </div>
  )
}

export default ListingCard