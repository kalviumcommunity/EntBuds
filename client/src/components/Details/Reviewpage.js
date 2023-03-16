import React, { useEffect, useState } from "react";
import axios from "axios";
import {Carousel} from "react-responsive-carousel";
import MovieDetail from "./Details";
import "./Reviewpage.css"

const FilmDetail = ({ filmId, title }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
<<<<<<< HEAD
      console.log(
        "Testing URL :",
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${
          MovieDetail ? MovieDetail.original_title : ""
        }review&type=video&key=AIzaSyDcPfOvNAZ2PwHX2lrX1oHfI_D_TJLkNgk`
=======

      console.log("Testing URL :", `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${MovieDetail ? MovieDetail.original_title: ""} review&type=video&key=AIzaSyDcPfOvNAZ2PwHX2lrX1oHfI_D_TJLkNgk`)


      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${MovieDetail ? MovieDetail.original_title: ""} review&type=video&key=AIzaSyDcPfOvNAZ2PwHX2lrX1oHfI_D_TJLkNgk`
>>>>>>> a999a4da6f61f55d65725fe0c14d5dac496ebd30
      );
console.log(
  MovieDetail
)
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${title}review&type=video&key=AIzaSyDcPfOvNAZ2PwHX2lrX1oHfI_D_TJLkNgk`
      );
      console.log("Link: ", `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=Shotgun Wedding
      review&type=video&key=AIzaSyDcPfOvNAZ2PwHX2lrX1oHfI_D_TJLkNgk`)
      setReviews(response.data.items);
    };
    fetchReviews();
  }, [filmId]);
  console.log(reviews);
  return (
    <div>
      <h1>Film Detail</h1>
      

      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={21}
        infiniteLoop={true}
        showStatus={false}
      >
        {reviews.map((review) => (
          <div key={review.id.videoId} className="video">
            <iframe
              src={`https://www.youtube.com/embed/${review.id.videoId}`}
              className="ytvid"
            ></iframe>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FilmDetail;
