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



function App() {
  

  return (
    <BrowserRouter>
      <Header />

      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/jewelry' element={<Jewelry/>}/>
        <Route path='/electronics' element={<Electronics />}/>
        <Route path='/MensClothing' element={<Mensclothing />}/>
        <Route path='/WomensClothing' element={<Womensclothing />}/>
  
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
