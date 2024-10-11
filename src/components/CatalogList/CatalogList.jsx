

const CatalogList = ({ camper }) => {
    const {gallery: [{ original }], name, price, rating, reviews, location, description, transmission, engine, kitchen, AC
    } = camper;
  return (
      <div>
          <img src={original} alt={name} />
          <p>{name}</p>
                  <p>{price}</p>
                  <p>{`${rating} (${reviews.length} Reviews)`}</p>
                  <p>{
                      location}</p>
                  <p>{
                      description}</p>
                  <p>{transmission}</p>
                  <p>{engine}</p>
                  <p>{kitchen
                  }</p>
          <p>{AC}</p>
          <button type="button">Show more</button>
    </div>
  )
}

export default CatalogList