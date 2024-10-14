import css from './Reviews.module.css'
import icons from "../../images/icons.svg";

const Reviews = ({ camper }) => {
  return (
    <div className={css.container}>
      {camper.reviews.map((review, index) => (
        <div key={index} className={css.review}>
          <p className={css.name}><strong>{review.reviewer_name}</strong></p>
          
          <div className={css.stars}>
            {/* Генерируем массив звездочек на основе рейтинга */}
            {Array.from({ length: review.reviewer_rating }).map((_, starIndex) => (
              <svg
                key={starIndex}
                className={css.iconCheckbox}
                width={16}
                height={16}
                fill="#ffc531"
              >
                <use href={`${icons}#icon-rating`}></use>
              </svg>
            ))}
          </div>

          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;