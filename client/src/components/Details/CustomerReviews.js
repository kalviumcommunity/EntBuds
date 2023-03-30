import React, { useEffect, useState } from "react";
import "./CustomerReviews.css";

const CustomerReviews = (props) => {
  const { name } = props;
  const [CustReviews, setCustReviews] = useState([]);
  const styling = {
    color: "white",
  };

  useEffect(() => {
    fetch(`http://localhost:7000/api/review/${name}`)
    .then((response) => response.json())
      .then((data) => {
        if (data.exist) {
          setCustReviews(data.out.reviews);
          console.log(data.out.reviews);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [name]);
  return (
    <div style={styling}>
      {CustReviews.length > 0 &&
        CustReviews.map((review) => {
          return (
            <div className="letsrevw">
                <img src={review.image} className="ppic" alt="prof_pic" />
                <div className="textrev">
                <h3>{review.name}</h3>   
              <p key={review._id}>
                <i>"{review.review}"</i>
              </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CustomerReviews;
