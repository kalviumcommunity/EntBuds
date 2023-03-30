import React, { useEffect, useState } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import FilmDetail from "./Reviewpage";
import { Button } from "@mui/material";
import axios from "axios";
import CustomerReviews from "./CustomerReviews";
import { useAuth0 } from "@auth0/auth0-react";

const Movie = () => {
  const [popularf, setPopularf] = useState([]);
  const key = "4e44d9029b1270a757cddc766a1bcb63&language=en-US";
  const { user } = useAuth0();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`)
      .then((res) => res.json())
      .then((data) => setPopularf(data.results));
  }, []);

  const [MovieDetail, setMovie] = useState();
  const [review, setReview] = useState("");
  const [isReview, setIsReview] = useState(undefined);
  const [reviewArr, setReviewArr] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
    window.scrollTo(0, 0);
  }, [id]);

  const handleClick = async () => {
    if (review !== "") {
      await fetch(
        `http://localhost:7000/api/review/${MovieDetail.original_title}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (!data.exist) {
            const response = fetch("http://localhost:7000/api/review", {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({
                title: MovieDetail.original_title,
                reviews: {
                  review: review,
                  name: user.name,
                  image: user.picture,
                },
              }),
            })
              .then((resp) => {
                if (!resp.ok) {
                  throw new Error("Network response was not ok.");
                }
                return resp.json();
              })
              .then((data) => {
                console.log(data);
              })
              .catch((e) => {
                console.log(e);
              });
          } else {
            const response = fetch("http://localhost:7000/api/review", {
              method: "PUT",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({
                title: MovieDetail.original_title,
                reviews: {
                  name: user.name,
                  review: review,
                  image: user.picture,
                },
              }),
            })
              .then((resp) => {
                if (!resp.ok) {
                  throw new Error("Network response was not ok.");
                }
                return resp.json();
              })
              .then((data) => {
                console.log(data);
              })
              .catch((e) => {
                console.log(e);
              });
          }
        })
        .catch((error) => {
          console.error("There was a problem fetching the data:", error);
        });
    } else {
      alert("Please fill the field");
    }
  };

  return (
    <div className="movie">
      <div className="movie-intro">
        <img
          className="movie-back"
          src={`https://image.tmdb.org/t/p/original${
            MovieDetail ? MovieDetail.backdrop_path : ""
          }`}
          alt="___"
        />
      </div>
      <div className="movie-detail">
        <div className="movie-detailm">
          <div className="movieposterBox">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/original${
                MovieDetail ? MovieDetail.poster_path : ""
              }`}
              alt="___"
            />
          </div>
        </div>
        <div className="movie-detailn">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {MovieDetail ? MovieDetail.original_title : ""}
            </div>
            <div className="movie__tagline">
              {MovieDetail ? MovieDetail.tagline : ""}
            </div>
            <div className="movie__rating">
              {MovieDetail ? MovieDetail.vote_average : ""}{" "}
              <i class="fas fa-star" />
              <span className="movie__voteCount">
                {MovieDetail ? "(" + MovieDetail.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {MovieDetail ? MovieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {MovieDetail ? "Release date: " + MovieDetail.release_date : ""}
            </div>
            <div className="movie__genres">
              {MovieDetail && MovieDetail.genres
                ? MovieDetail.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="sypnosisText">Sypnosis</div>
            <div className="sypnosis">
              {MovieDetail ? MovieDetail.overview : ""}
            </div>
          </div>
        </div>
      </div>
      <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {MovieDetail && MovieDetail.homepage && (
          <a
            href={MovieDetail.homepage}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__homeButton movie__Button">
                Home  <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {MovieDetail && MovieDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + MovieDetail.imdb_id}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__imdbButton movie__Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
      <div className="movie__heading">Production companies</div>
      <div className="movie__production">
        {MovieDetail &&
          MovieDetail.production_companies &&
          MovieDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="movie__productionComapany"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                    alt="___"
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>

      {MovieDetail && (
        <FilmDetail title={MovieDetail ? MovieDetail.original_title : ""} />
      )}

      <br></br>
      <br></br>

      <div className="inputs">
        <div className="review-section">
          <h2 color="red">Reviews</h2>

          {MovieDetail && (
            <CustomerReviews
              name={MovieDetail ? MovieDetail.original_title : ""}
            />
          )}

          <br></br>

          <textarea
            value={review}
            type="text"
            className="review"
            placeholder="Type your review here"
            onChange={(e) => setReview(e.target.value)}
          />

          <Button
            onClick={handleClick}
            variant="contained"
            size="small"
            style={{
              fontSize: "1.2rem",
              background: "red",
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            Post
          </Button>
        </div>

        {/* <div className="fantheories">
                <h2 color="red">Let's Discuss</h2>
                <input type='text' className="theory"  placeholder = 'What do you think about this?'></input>

            </div> */}
      </div>
    </div>
  );
};

export default Movie;
