import { useNavigate } from "react-router-dom";
import css from "./CatalogeList.module.css"
import { toggleFavorite } from "../../utils/toggleFavorite";
import { useDispatch, useSelector } from "react-redux";

import icons from "../../images/icons.svg";

const CatalogList = ({ camper }) => {
    const {gallery: [{ original }], id, name, price, rating, reviews, location, description, transmission, engine, kitchen, AC
    } = camper;

    


    const navigate = useNavigate();

    const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites); 

    const handleShowMore = () => {
        navigate(`/catalog/${id}`)   
    }

    const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id)); // Вызываем действие для добавления/удаления кемпера из избранного
    };
    
    const isFavorite = favorites.includes(id);

  return (
      <div className={css.card}>
          <div className={css.containerContent}>
              <div>
                  <img className={css.img} src={original} alt={name} />
              </div>
              <div>
                  <div className={css.titleCard}>
                      <h3>{name}</h3>
                      <p>{`€${price}`}</p>
                      <button onClick={handleToggleFavorite}>
              {isFavorite ? "⭐" : "☆"} {/* Изменяем иконку в зависимости от состояния */}
              </button>
                  </div>
                  
                  <div className={css.details}>
                      <svg
                      className={css.iconCheckbox}
                      width={16}
                      height={16}
                      fill="#ffc531"
                    >
                      <use href={`${icons}#icon-rating`}></use>
                    </svg>
                      <p className={css.reviews}>{`${rating} (${reviews.length} Reviews)`}</p>
                      <p>{location}</p>
                  </div>

                  <p className={css.text}>{description}</p>

                  <div className={css.bagesContainer}>
                      <p className={css.bages}>{transmission}</p>
                      <p className={css.bages}>{engine}</p>
                      {kitchen && <p className={css.bages}> Kitchen </p>}
                      {AC && <p className={css.bages}>AC</p>}
                  </div>
                  <button className={css.btn} type="button" onClick={handleShowMore}>Show more</button>
              </div>
          </div>
    </div>
  )
}

export default CatalogList