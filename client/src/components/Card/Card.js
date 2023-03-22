  import React, {useEffect, useState} from "react";
  import Skeleton, {SkeletonTheme} from "react-loading-skeleton"
  import "./Card.css"
  import { Link } from "react-router-dom";
  


  const Cards =  ({movie}) => {
    console.log(movie);
    const [Loading, SetLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        SetLoading(false)
      }, 1500)
    }, [])

    return <>
    {
      Loading 
      ?
      <div className="card">
        <SkeletonTheme color = "#202020" highlightColor="#444">
          <Skeleton height={300} duration = {20} />
        </SkeletonTheme>
      </div>
      :
      <Link to={`/movie/${movie.id}`} style = {{textDecoration: "none", color: "white"}}>
        <div className="card">
          <img className="cards-img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
          <div className="card-overlay">
            <div className="card-title">{movie?movie.original?.title:""}</div>
            <div className="card-runtime">
              {movie?movie.release_date:""}
              <span className="card-rating">{movie?movie.vote_average:""}</span>
            </div>
            <div className="card-desc">{movie?movie.overview.slice(0,118) + "..." : "" }</div>
          </div>
        </div>
      </Link>
    }
    </>
  }

  export default Cards;