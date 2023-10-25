import { useState, createContext, useEffect } from "react";

export const AddCartContext=createContext()

export default function AddCartContextProvider(props){

    const [cart, setCart]=useState([])

    //set up useEffect to run when component loads to check localStorage
    useEffect(
        ()=>{
            //get the value from localStorage
            const storedCart=localStorage.getItem('cartList')
            //console.log(storedDarkMode)
            //check if something was there {
                
                if (storedCart){
                    //use this value for the state
                setCart(JSON.parse(storedCart))
            }
            
        },[]
    )

    //set up useEffect to run anytime darkmode changes
    useEffect(
        ()=>{
            //save the favorites of favorites to localStorage
            localStorage.setItem('cartList', JSON.stringify(cart))
        },[cart]
    )

    //need a function to add a character to favorites
    const addListing=(listToAdd)=>{
        console.log('adding', listToAdd)
        //I need to add this object to favorites state
        //create new array with all the old stuff in the new object
        let newItem=[...cart, listToAdd]
        //update my state to this
        setCart(newItem)
    
    }
    //need function to remove a character
    const removeListing=(listId)=>{
        console.log('removing', listId)
        //keep all that are not in this id
        let newItem=cart.filter(item=>item.id !=listId)
        //update state to this
        setCart(newItem)
    }
    return(
        <AddCartContext.Provider value={{addListing, cart, removeListing}}>
            {props.children}
        </AddCartContext.Provider>
    )

}
