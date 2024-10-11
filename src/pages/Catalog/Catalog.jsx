import CatalogList from "../../components/CatalogList/CatalogList";

export const Catalog = ({ campers }) => {
    console.log("Cars in Catalog:", campers); // Проверяйте, что здесь отображается

    if (!Array.isArray(campers) || campers.length === 0) {
        return <p>No cars available</p>;
    }
  return (
      <div>
          <p>Location</p>
          <p>Filters</p>
          <h2>Vehicle equipment</h2>
          <button>Ac</button>
          <button>Authomatic</button>
          <button>Kitchen</button>
          <button>TV</button>
          <button>Bathroom</button>
          <h2>Vehicle type</h2>
          <button>Van</button>
          <button>Fully Integrated</button>
          <button>Alcove</button>
          <ul>{campers.map((camper) => {
              return (<li key={camper.id}>
                  <CatalogList camper={camper} />
              </li>)
             })}   
          </ul>
          
          </div>
  )
}

export default Catalog