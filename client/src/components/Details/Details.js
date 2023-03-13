import React, {useEffect, useState} from "react"
import "./Details.css"
import { useParams } from "react-router-dom"
import {Link} from "react-router-dom";
import FilmDetail from "./Reviewpage";

const Movie = () => {
    const [MovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
         fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))

        // const data2 = fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        // .then(res => res.json())
        // .then(data => setMovie(data))

        // const mergedArray = [...array1, ...array2]
    }

    return (
        <div className="movie">
            <div className="movie-intro">
                <img className="movie-back" src={`https://image.tmdb.org/t/p/original${MovieDetail ? MovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie-detail">
                <div className="movie-detailm">
                    <div className="movieposterBox">
                        <img className="movie-poster" src={`https://image.tmdb.org/t/p/original${MovieDetail ? MovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie-detailn">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{MovieDetail ? MovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{MovieDetail ? MovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {MovieDetail ? MovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{MovieDetail ? "(" + MovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{MovieDetail ? MovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{MovieDetail ? "Release date: " + MovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                MovieDetail && MovieDetail.genres
                                ? 
                                MovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="sypnosisText">Sypnosis</div>
                        <div className="sypnosis">{MovieDetail ? MovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    MovieDetail && MovieDetail.homepage && <a href={MovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    MovieDetail && MovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + MovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    MovieDetail && MovieDetail.production_companies && MovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>

            <FilmDetail />

            


        <br>
            </br>
            <br></br>
            <div className="inputs">
            <div className="review-section">
                <h2 color="red">Reviews</h2>
                <input type='text' className="review"  placeholder = 'Type your review here'></input>

            </div>


            <div className="fantheories">
                <h2 color="red">Let's Discuss</h2>
                <input type='text' className="theory"  placeholder = 'What do you think about this?'></input>

            </div>
            </div>
        </div>
    )
}

export default Movie