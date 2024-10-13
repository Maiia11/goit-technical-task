import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { filteredCampers } from "../../redux/selectors";
import { useEffect, useState } from "react";


const CamperDetaills = () => {

    const { id } = useParams();
    const campers = useSelector(filteredCampers);
    const [camper, setCamper] = useState(null);

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
            <h1>{camper.name}</h1>
            <p>Price: {camper.price}</p>
            <p>Rating: {camper.rating}</p>
            <p>Location: {camper.location}</p>
            <p>Description: {camper.description}</p>
            
            <div>
                <h3>Specifications:</h3>
                <p>Transmission: {camper.transmission}</p>
                <p>Engine: {camper.engine}</p>
                {camper.kitchen && <p>Kitchen: Available</p>}
                {camper.AC && <p>AC: Available</p>}
            </div>
        </div>
  )
}

export default CamperDetaills