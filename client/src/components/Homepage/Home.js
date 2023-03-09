import React, { useEffect, useState } from 'react';
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom";
import MovieList from '../List/List';

function Home() {

    const [popularf, setPopularf] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularf(data.results))
    }, [])

  return (
    
      <div className='parts'>
        <Carousel
        showThumbs = {false}
        autoPlay = {true}
        transitionTime = {21}
        infiniteLoop = {true}
        showStatus = {false}
        >
            {
                popularf.map(movie => (
                    <Link style = {{textDecoration:"none", color:"white"}} to={`/movie/${movie.id}`} >
                      <div className='container1'>
                    <div className='partImage'>
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                    </div>
                    <div className='partimage-overlay'>
                      <div className='partimage-title'>{movie ? movie.original_title: ""}</div>
                    <div className='partimage-run'>
                      {movie ? movie.release_date : ""}
                      <span className='partimage-rating'>
                        {movie ? movie.vote_average : ""}
                      </span>
                    </div>
                    <div className='partimage-desc'>{movie ? movie.overview : ""}</div>
                  </div>
                  </div>
                </Link>
            ))
         }
        </Carousel>
        <MovieList />
      </div>
    
  )
}

export default Home
