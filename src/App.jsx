import React from 'react'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList/MovieList';
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png"
import Party from "./assets/partying-face.png"

const App = () => {
  return (
    <div className='app'>

   <Navbar></Navbar>

  <MovieList type="popular" title="Popular" emoji={Fire}></MovieList>
  <MovieList type="top_rated" title="Top Rated" emoji={Star}></MovieList>
  <MovieList type="upcoming" title="Upcoming " emoji={Party}></MovieList>

    </div>
  )
}

export default App