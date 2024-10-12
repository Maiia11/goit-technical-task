import { Field, Form, Formik } from "formik"
import { useEffect, useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors";
import { chooseLocation, setEquipmentFilter } from "../../redux/filtersSlice";
import css from "./FilterForm.module.css"



const FilterForm = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilters);
   
    
    const [formValues, setFormValues] = useState({
        location: filter.location || "",
        ac: filter.equipment.ac || false,
        automatic: filter.equipment.automatic || false,
        kitchen: filter.equipment.kitchen || false,
        tv: filter.equipment.tv || false,
        bathroom: filter.equipment.bathroom || false
    });

    
    
    // const initialValues = {
    //     location: filter.location || "",
    //     ac: filter.equipment.ac || false,
    //     automatic: filter.equipment.automatic || false,
    //     kitchen: filter.equipment.kitchen || false,
    //     tv: filter.equipment.tv || false,
    //     bathroom: filter.equipment.bathroom || false,
    // };
   
    const handleSubmit = (values) => {
        console.log("Submitted values:", values);
        dispatch(chooseLocation(values.location));
        dispatch(setEquipmentFilter({
            ac: values.ac,
            automatic: values.automatic,
            kitchen: values.kitchen,
            tv: values.tv,
            bathroom: values.bathroom
        }));
    };

     useEffect(() => {
        setFormValues({
            location: filter.location || "",
            ac: filter.equipment.ac || false,
            automatic: filter.equipment.automatic || false,
            kitchen: filter.equipment.kitchen || false,
            tv: filter.equipment.tv || false,
            bathroom: filter.equipment.bathroom || false
        });
    }, [filter]);


    const locationFieldId = useId();
    return (
      <>
            <Formik initialValues={formValues} onSubmit={handleSubmit}>
                
                <Form className={css.formLocation}>
                    {/* location */}
                    <label htmlFor={locationFieldId} className={css.locationLabel}>Location</label>
                    <Field className={css.locationInput} type="text" name="location" id={locationFieldId}  placeholder="Name of the city"/>
                
                    <h4 className={css.title}>Filters</h4>

                    {/*Vehicle equipment  */}
                    <h5>Vehicle equipment</h5>
                     
                    <div className="vehicle-equipment">
          <label className="equipment-item">
            <Field type="checkbox" name="ac" />
            <div className="label">
              <p>AC</p>
            </div>
          </label>

          <label className="equipment-item">
            <Field type="checkbox" name="automatic" />
            <div className="label">
              <p>Automatic</p>
            </div>
          </label>

          <label className="equipment-item">
            <Field type="checkbox" name="kitchen" />
            <div className="label">
              <p>Kitchen</p>
            </div>
          </label>

          <label className="equipment-item">
            <Field type="checkbox" name="tv" />
            <div className="label">
              <p>TV</p>
            </div>
          </label>

          <label className="equipment-item">
            <Field type="checkbox" name="bathroom" />
            <div className="label">
              <p>Bathroom</p>
            </div>
          </label>
        </div>

                </Form>
            </Formik>
            
        </>
  )
}

export default FilterForm