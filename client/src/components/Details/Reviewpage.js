import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-slick';
import MovieDetail from './Details';


const FilmDetail = ({ filmId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {

      console.log("Testing URL :", `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${MovieDetail ? MovieDetail.original_title: ""} review&type=video&key=AIzaSyDcPfOvNAZ2PwHX2lrX1oHfI_D_TJLkNgk`)


      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${MovieDetail ? MovieDetail.original_title: ""} review&type=video&key=AIzaSyDcPfOvNAZ2PwHX2lrX1oHfI_D_TJLkNgk`
      );
      setReviews(response.data.items);
    };
    fetchReviews();
  }, [filmId]);

  return (
    <div>
      <h1>Film Detail</h1>
      <Carousel>
        {reviews.map((review) => (
          <div key={review.id.videoId}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${review.id.videoId}`}
              title={review.snippet.title}
              
              allow="autoplay; encrypted-media"
              
            ></iframe>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FilmDetail;
