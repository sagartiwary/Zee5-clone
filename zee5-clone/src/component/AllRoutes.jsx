
import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
import TvShows from '../Pages/TvShows';
const AllRoutes = () => {
  return (
    <>
   <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path="/movies" element={<Movies/>}/>
  <Route path="/tvShows" element={<TvShows/>}/>
   </Routes>
    </>
  )
}

export default AllRoutes