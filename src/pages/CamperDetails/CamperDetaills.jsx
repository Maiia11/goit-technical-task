import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { filteredCampers } from "../../redux/selectors";
import { useEffect, useState } from "react";
import Features from "../../components/Featers/Featers";
import Reviews from "../../components/Reviews/Reviews";
import BookingForm from "../../components/BookingForm/BookingForm";
import css from "./CamperDetails.module.css"
import CamperNotFound from "../../components/CamperNotFound/CamperNotFound";
import icons from "../../images/icons.svg";


const CamperDetaills = () => {

    const { id } = useParams();
    const campers = useSelector(filteredCampers);
    const [camper, setCamper] = useState(null);
  const [activeTab, setActiveTab] = useState('features');
   const [error, setError] = useState(null);

    useEffect(() => {
        const selectCamper = campers.find(camp => camp.id === id);
        
        if (selectCamper) {
          setCamper(selectCamper);
          setError(null)
        } else {
            setCamper(null); // Сбросьте camper, если не найден
            setError(<CamperNotFound/>); // Установите сообщение об ошибке
        }
    }, [id, campers])
  
  if (error) {
        return <p>{error}</p>; // Отображение сообщения об ошибке
    }
  

    if (!camper) {
        return <p>Loading...</p>
    }

    return (
      
     <div className={css.container}>
          <div>
                <h2 className={css.tittle}>{camper.name}</h2>
          <div className={css.details}>
            <svg
                      className={css.iconCheckbox}
                      width={16}
                      height={16}
                      fill="#ffc531"
                    >
                      <use href={`${icons}#icon-rating`}></use>
                    </svg>
          <p className={css.reviews}>{`${camper.rating} (${camper.reviews.length} Reviews)`}</p>
          <p>{camper.location}</p>
          </div>
          <p className={css.price}>{`€${camper.price}`}</p>
            </div>

            <div className={css.imgContainer}>
          {camper.gallery.map((image, index) => (
              <img className={css.img} key={index} src={image.original} alt={`Gallery image ${index + 1}`} />
          ))}
            </div>

            <p className={css.description}> {camper.description}</p>
            
          <div className={css.containerLink}>
      <a 
        className={`${css.btn} ${activeTab === 'features' ? css.active : ''}`} 
        onClick={() => setActiveTab('features')}
      >
        Features
      </a>
      <a 
        className={`${css.btn} ${activeTab === 'reviews' ? css.active : ''}`} 
        onClick={() => setActiveTab('reviews')}
      >
        Reviews
      </a>
    </div>
          
            <div className={css.containerInfo}>
          {camper && activeTab === 'features' ? <Features camper={camper} /> : <Reviews camper={camper} />}

                <BookingForm />
            </div>
    </div>
  )
}

export default CamperDetaills