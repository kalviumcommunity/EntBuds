import React, { useEffect, useState } from "react";
import axios from "axios";
import {Carousel} from "react-responsive-carousel";
import MovieDetail from "./Details";
import "./Reviewpage.css"

const FilmDetail = ({ filmId, title }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      

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
        autoPlay={false}
        transitionTime={2100}
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
