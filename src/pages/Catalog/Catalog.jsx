import { useSelector } from "react-redux";
import CatalogList from "../../components/CatalogList/CatalogList";
import FilterForm from "../../components/FilterForm/FilterForm";
import { filteredCampers } from "../../redux/selectors";

export const Catalog = () => {
    const campers = useSelector(filteredCampers);
    console.log(campers);
    

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