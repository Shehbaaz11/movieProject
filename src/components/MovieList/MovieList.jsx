import React, {  useEffect, useState } from "react";

import { orderBy } from "lodash";



import "./MovieList.css";

import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({type , title , emoji}) => {
  const [movie, setmovie] = useState([]);
  const [minRating, setMinRate] = useState(0);
  const [filterMovie, setFilterMovie] = useState([]);
   const [sort ,setSort] = useState({
    by:"default",
    order:"asc",
   })


  useEffect(() => {
    //fetch humesha promise return krta hai promise response return karega data aaya ya nhi late pr karega
    fetchMovie();
  }, []);

  useEffect(()=>{
    if(sort.by !== 'default'){ //this method  is used for sorting and changing order to aes des both in same function
    const sortedMovies = orderBy(movie,[sort.by],[sort.order]) //1st parameter => we pass array where we want to sort , 
     setFilterMovie(sortedMovies) 
  }// 2nd => we pass array of property by which arr will be sort  and this expression return an array which store in sortedMovie
  },[sort.by,sort.order,movie]) 



  const fetchMovie = async () => {
    const res = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=81e039cedf4d2c179bea086e4ad2ca9b&language=en-US&region=IN`
    );
    const data = await res.json(); // res.json khudh ek promise return krta hai

    const excludeIds = [1231813, 1418896, 1270922, 482600];

const filtermovie = data.results.filter(
  (movie) =>
    !excludeIds.includes(movie.id) &&
    movie.original_title !== "Together"
);
    // const safeid = [55, 333, 234,4556,567];
    // const extradata = await Promise.all(  //multiple async data  fetch hore rehge
    //   safeid.map(async (id) => {
    //     const res = await fetch(
    //       `https://api.themoviedb.org/3/movie/${id}?api_key=81e039cedf4d2c179bea086e4ad2ca9b`
    //     );
    //     const m = await res.json();
    //     return m;
    //   })
    // );  // ek ek id leke ek ek object in the array dera hai

    const finalMovie = [...filtermovie];
    setmovie(finalMovie);
    setFilterMovie(finalMovie); //sare isme bhi aagaye
  };

  const handleFilter = (rate) => {
    if (rate === minRating) { //yaha rate=6 hai aur dabayege re-waps
      setMinRate(0);
      setFilterMovie(movie);
    } else {
      setMinRate(rate);   // start me yeh run hoga yeh condition yaha rate =0 aisa socho
      const filterRate = movie.filter((mov) => Math.round(mov.vote_average) >= rate);
      setFilterMovie(filterRate);
    }
  };


  const handleSort = e => {
    const {name,value} = e.target;
    setSort(prev => ({...prev,[name]:value}))
  }
  
  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title} <img src={emoji} alt={`${emoji} icon`} className="navbar_emoji" />
        </h2>

        <div className=" align_center movie_list_fs">
          <FilterGroup  minRating={minRating} handleFilter={handleFilter} ratings={[8,7,6]}  ></FilterGroup>

          <select name="by" id="" onChange={handleSort}  value={sort.by}  className="movie_sorting">
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select name="order" id="" onChange={handleSort} value={sort.order} className="movie_sorting">
            <option value="asc">Ascending Order</option>
            <option value="desc">Descending Order</option>
          </select>
        </div>
      </header>
      

      <div className="movie_cards">
        {filterMovie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
