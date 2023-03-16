import React, { useState, useEffect } from "react";
import Cards from "../Card/Card";
import "./List.css";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [mList, setmList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setmList(data.results));
  };
  console.log(mList);
  return (
    <div className="list">
      <h2 className="listTitle">{type ? type : "Popular"}</h2>
      <div className="listCard">
        {mList.map((movie, index) => (
          <Cards key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
