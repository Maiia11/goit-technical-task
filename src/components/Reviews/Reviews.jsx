import css from './Reviews.module.css'

const Reviews = ({ camper }) => {
  return (
    <div className={css.container}>
      {camper.reviews.map((review, index) => (
        <div key={index}>
          <p className={css.name}><strong>{review.reviewer_name}</strong></p>
          <p> {review.reviewer_rating}</p>
          <p className={css.comment}>{review.comment}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Reviews;