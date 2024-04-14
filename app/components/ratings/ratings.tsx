import React from "react";

const Ratings = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const roundedRating = Math.round(rating.ratings * 2) / 2; // Round to nearest half star

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        // Full star
        stars.push(
          <span key={i} className="text-yellow-500">
            &#9733;
          </span>
        );
      } else if (i - 0.5 === roundedRating) {
        // Half star
        stars.push(
          <span key={i} className="text-yellow-500">
            &#9733;&#189;
          </span>
        );
      } else {
        // Empty star
        stars.push(
          <span key={i} className="text-gray-400">
            &#9734;
          </span>
        );
      }
    }

    return stars;
  };

  return (
    <div className="flex items-center">
      {renderStars()}
      <span className="ml-2">({rating.ratingsCount})</span>
    </div>
  );
};

export default Ratings;
