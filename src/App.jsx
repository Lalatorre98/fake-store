import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Jewelry from './pages/Jewelry/Jewelry'
import Electronics from './pages/Electronics/Electronics'
import Womensclothing from './pages/WomensClothing/Womensclothing'
import Mensclothing from './pages/MensClothing/Mensclothing'
import ListingDetails from './pages/ListingDetails/ListingDetails'
import Myfavorites from './pages/MyFavorites/Myfavorites'
import FavoritesContextProvider from './contexts/FavoritesContext'
import AddCartContextProvider from './contexts/AddCartContext'
import MyCart from './pages/MyCart/MyCart'



function App() {
  

  return (
    <BrowserRouter>
    <FavoritesContextProvider>
      <AddCartContextProvider>
      <Header />

      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/myfavorites' element={<Myfavorites />} />
        <Route path='/jewelry' element={<Jewelry />}/>
        <Route path='/electronics' element={<Electronics />}/>
        <Route path='/MensClothing' element={<Mensclothing />}/>
        <Route path='/WomensClothing' element={<Womensclothing />}/>
        <Route path='/details/:listingId' element={<ListingDetails />} />
        <Route path='/MyCart' element={<MyCart />} />

  
      </Routes>

      <Footer />
      </AddCartContextProvider>
      </FavoritesContextProvider>
    </BrowserRouter>
  )
}

export default App
