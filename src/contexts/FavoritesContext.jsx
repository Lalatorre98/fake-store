import { useState, createContext, useEffect } from "react";

//create this context "thing"
export const FavoritesContext=createContext()

export default function FavoritesContextProvider(props){

    //create my global state
    const [favorites, setFavorites]=useState([])

    
    //set up useEffect to run when component loads to check localStorage
    useEffect(
        ()=>{
            //get the value from localStorage
            const storedFavorites=localStorage.getItem('favoritesList')
            //console.log(storedDarkMode)
            //check if something was there {
                
                if (storedFavorites){
                    //use this value for the state
                setFavorites(JSON.parse(storedFavorites))
            }
            
        },[]
    )
    

    //set up useEffect to run anytime darkmode changes
    useEffect(
        ()=>{
            //save the favorites of favorites to localStorage
            localStorage.setItem('favoritesList', JSON.stringify(favorites))
        },[favorites]
    )
        
    
        //need a function to add a character to favorites
        const addListing=(listToAdd)=>{
            console.log('adding', listToAdd)
            //I need to add this object to favorites state
            //create new array with all the old stuff in the new object
            let newFavorites=[...favorites, listToAdd]
            //update my state to this
            setFavorites(newFavorites)
        
        }
        //need function to remove a character
        const removeListing=(listId)=>{
            console.log('removing', listId)
            //keep all that are not in this id
            let newFavorites=favorites.filter(item=>item.id !=listId)
            //update state to this
            setFavorites(newFavorites)
        }
    
    return(
        <FavoritesContext.Provider value={{addListing, favorites, removeListing}}>
            {props.children}
        </FavoritesContext.Provider>
    )
}