import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { filteredCampers } from "../../redux/selectors";
import { useEffect, useState } from "react";
import Features from "../../components/Featers/Featers";
import Reviews from "../../components/Reviews/Reviews";
import BookingForm from "../../components/BookingForm/BookingForm";


const CamperDetaills = () => {

    const { id } = useParams();
    const campers = useSelector(filteredCampers);
    const [camper, setCamper] = useState(null);
    const [activeTab, setActiveTab] = useState('features');

    useEffect(() => {
        const selectCamper = campers.find(camp => camp.id === id);
        
        if (selectCamper) {
            setCamper(selectCamper);
        }
    }, [id, campers])

    if (!camper) {
        return <p>Loading...</p>
    }

  return (
     <div>
          <h2>{camper.name}</h2>
          <p>{`${camper.rating} (${camper.reviews.length} Reviews)`}</p>
          <p>{camper.location}</p>
          <p>{camper.price}</p>

          {camper.gallery.map((image, index) => (
              <img key={index} src={image.original} alt={`Gallery image ${index + 1}`} />
          ))}

            <p> {camper.description}</p>
            
          <div>
              <button onClick={() => setActiveTab('features')}>Features</button>
        <button onClick={() => setActiveTab('reviews')}>Reviews</button>
          </div>
          
          {camper && activeTab === 'features' ? <Features camper={camper} /> : <Reviews camper={camper} />}

          <BookingForm />
        </div>
  )
}

export default CamperDetaills