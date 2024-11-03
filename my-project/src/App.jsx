import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Katalog from './pages/Katalog'
import DetailProduk from './pages/DetailProduk'
// import Home from './pages/Home'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Katalog/>}/>
      <Route path='/DetailProduk' element = {<DetailProduk/>}/>
      {/* <Route path='/' element = {<Home/>}/> */}
    </Routes>

    </>
  )
}

export default App

