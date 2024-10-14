import { useNavigate } from "react-router-dom";
import css from "./CatalogeList.module.css"
import { useDispatch, useSelector } from "react-redux";

import icons from "../../images/icons.svg";

const CatalogList = ({ camper }) => {
    const {gallery: [{ original }], id, name, price, rating, reviews, location, description, transmission, engine, kitchen, AC
    } = camper;

    const navigate = useNavigate();

    const handleShowMore = () => {
        navigate(`/catalog/${id}`)   
    }

    

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
                      <p className={css.bages}>
                         <svg className={css.iconBages}
                      width={20}
                      height={20}
                      fill="#101828"
                    >
                      <use href={`${icons}#icon-diagram`}></use>
                    </svg>
                        {transmission}</p>
                      <p className={css.bages}>
                        <svg className={css.iconBages}
                      width={20}
                      height={20}
                      fill="#101828"
                    >
                      <use href={`${icons}#icon-petrol`}></use>
                    </svg>
                        {engine}</p>
                      {kitchen && <p className={css.bages}>
                        <svg className={css.iconBages}
                      width={20}
                      height={20}
                      fill="#101828"
                    >
                      <use href={`${icons}#icon-cup`}></use>
                    </svg>
                         Kitchen </p>}
                      {AC && <p className={css.bages}>
                        <svg className={css.iconBages}
                      width={20}
                      height={20}
                      fill="#101828"
                    >
                      <use href={`${icons}#icon-wind`}></use>
                    </svg>
                        AC</p>}
                  </div>
                  <button className={css.btn} type="button" onClick={handleShowMore}>Show more</button>
              </div>
          </div>
    </div>
  )
}

export default CatalogList