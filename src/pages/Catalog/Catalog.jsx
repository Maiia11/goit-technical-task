import { useSelector } from "react-redux";
import CatalogList from "../../components/CatalogList/CatalogList";
import FilterForm from "../../components/FilterForm/FilterForm";
import { filteredCampers } from "../../redux/selectors";
import css from "./Catalog.module.css";
import { useEffect, useState } from "react";

export const Catalog = () => {
  const campers = useSelector(filteredCampers);

  const [itemsPerPage, setItemsPerPage] = useState(3); // Количество отображаемых кемперов
  const [currentPage, setCurrentPage] = useState(0); // Текущая страница
  const [hasMore, setHasMore] = useState(true); 

  useEffect(() => {
    // Проверяем, есть ли еще данные для загрузки
    if ((currentPage + 1) * itemsPerPage >= campers.length) {
      setHasMore(false); // Если больше данных нет, отключаем кнопку
    } else {
      setHasMore(true); // Иначе оставляем кнопку активной
    }
  }, [currentPage, campers]);

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
      <div>
        <div className={css.containerCatalog}>
          <ul>
            {displayedCampers.map((camper) => {
              return (
                <li key={camper.id}>
                  <CatalogList camper={camper} />
                </li>
              );
            })}
          </ul>
              {hasMore && ( // Условный рендеринг кнопки Load More
          <div className={css.buttonContainer}>
            <button className={css.btn} onClick={loadMoreCampers}>
              Load More
            </button>
          </div>
        )}
              </div>

        
      </div>
    </div>
  );
};

export default Catalog;
