import { useSelector } from "react-redux";
import CatalogList from "../../components/CatalogList/CatalogList";
import FilterForm from "../../components/FilterForm/FilterForm";
import { filteredCampers } from "../../redux/selectors";
import css from "./Catalog.module.css"
import { useState } from "react";

export const Catalog = () => {
    const campers = useSelector(filteredCampers);
    

    const [itemsPerPage, setItemsPerPage] = useState(3); // Количество отображаемых кемперов
    const [currentPage, setCurrentPage] = useState(0); // Текущая страница
    
console.log(campers);
    if (!Array.isArray(campers) || campers.length === 0) {
        return <p>No cars available</p>;
    }

    const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCampers = campers.slice(startIndex, endIndex);

  const loadMoreCampers = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    };
    
  return (
      <div className={css.container}>
          <FilterForm />
          <div className={css.containerCatalog}>
          <ul>{displayedCampers.map((camper) => {
              return (<li key={camper.id}>
                  <CatalogList camper={camper} />
              </li>)
             })}   
          </ul> 
          </div>
           <button onClick={loadMoreCampers}>
            Load More
          </button>
        </div>
  )
}

export default Catalog