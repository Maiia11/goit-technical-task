import css from "./CatalogeList.module.css"

const CatalogList = ({ camper }) => {
    const {gallery: [{ original }], name, price, rating, reviews, location, description, transmission, engine, kitchen, AC
    } = camper;
  return (
      <div className={css.card}>
          <div className={css.containerContent}>
              <div>
                  <img className={css.img} src={original} alt={name} />
              </div>
              <div>
                  <div className={css.titleCard}>
                      <h3>{name}</h3>
                      <p>{price}</p>
                  </div>
                  
                  <div className={css.details}>
                      <p>{`${rating} (${reviews.length} Reviews)`}</p>
                      <p>{location}</p>
                  </div>

                  <p className={css.text}>{description}</p>

                  <div className={css.bagesContainer}>
                      <p className={css.bages}>{transmission}</p>
                      <p className={css.bages}>{engine}</p>
                      {kitchen && <p className={css.bages}> Kitchen </p>}
                      {AC && <p className={css.bages}>AC</p>}
                  </div>
                  <button className={css.btn} type="button">Show more</button>
              </div>
          </div>
    </div>
  )
}

export default CatalogList