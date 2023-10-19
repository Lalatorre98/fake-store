import React, {useContext} from 'react'
import './Myfavorites.css'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import ListingCard from '../../components/ListingCard/ListingCard'


function Myfavorites() {
  const {favorites}=useContext(FavoritesContext)
  return (
    <div className='favorites-container'>
      <h1>My Favorites</h1>
      <div className="favorite-listings">
        {

          favorites.length > 0?
          favorites.map(item=><ListingCard listing={item}
          key={item.id}/>)
            :
                <p>You have not selected any favorites yet</p>
        }
      </div>
      </div>
  )
}

export default Myfavorites