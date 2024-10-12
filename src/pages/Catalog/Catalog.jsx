import CatalogList from "../../components/CatalogList/CatalogList";
import FilterForm from "../../components/FilterForm/FilterForm";

export const Catalog = ({ campers }) => {
    console.log("Cars in Catalog:", campers); // Проверяйте, что здесь отображается

    if (!Array.isArray(campers) || campers.length === 0) {
        return <p>No cars available</p>;
    }
  return (
      <div>
          <FilterForm/>
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