const Reviews = ({ camper }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {camper.reviews.map((review, index) => (
        <div key={index}>
          <p><strong>{review.author}</strong>: {review.comment}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;