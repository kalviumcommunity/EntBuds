import React, { useEffect, useState } from "react";
import {Carousel} from "react-responsive-carousel";
import "./Reviewpage.css"

const FilmDetail = ({ filmId, title }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
   fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${title}moviereview&type=video&key=AIzaSyDcPfOvNAZ2PwHX2lrX1oHfI_D_TJLkNgk`
      ).then(response => response.json())
      .then(data =>setReviews(data.items));
  }, [title]);
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
              title="video"
            ></iframe>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FilmDetail;
