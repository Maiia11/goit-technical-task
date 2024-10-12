import { Field, Form, Formik } from "formik"
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors";
import { chooseLocation } from "../../redux/filtersSlice";
import css from "./FilterForm.module.css"



const FilterForm = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilters);
    
    const initialValues = {
    location: filter || "",
}
   
    const handleSubmit = (values) => {
        dispatch(chooseLocation(values.location));
    };


    const locationFieldId = useId();
    return (
      <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={css.formLocation}>
                    <label htmlFor={locationFieldId} className={css.locationLabel}>Location</label>
                    <Field className={css.locationInput} type="text" name="location" id={locationFieldId}  placeholder="Name of the city"/>
                </Form>
      </Formik>
      <div>
         
        </div>
          
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
        </>
  )
}

export default FilterForm