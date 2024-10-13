import { useSelector } from "react-redux";
import CatalogList from "../../components/CatalogList/CatalogList";
import FilterForm from "../../components/FilterForm/FilterForm";
import { filteredCampers } from "../../redux/selectors";
import css from "./Catalog.module.css"

export const Catalog = () => {
    const campers = useSelector(filteredCampers);
    console.log(campers);
    

    if (!Array.isArray(campers) || campers.length === 0) {
        return <p>No cars available</p>;
    }
  return (
      <div className={css.container}>
          <FilterForm />
          <div className={css.containerCatalog}>
          <ul>{campers.map((camper) => {
              return (<li key={camper.id}>
                  <CatalogList camper={camper} />
              </li>)
             })}   
          </ul> 
          </div>
        </div>
  )
}

export default Catalog