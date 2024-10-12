import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors";
import { chooseLocation, setEquipmentFilter } from "../../redux/filtersSlice";
import { Field, Form, Formik } from "formik";

const FilterForm = () => {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);

    const handleLocationChange = (e) => {
    dispatch(chooseLocation(e.target.value)); // Обновляем фильтр по локации при изменении поля
    };
    
     const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    dispatch(setEquipmentFilter({ [name]: checked }));  // Обновляем состояние чекбоксов
    };
    


    return (
        <Formik
            initialValues={filters}
            onSubmit={()=>{}}
        >
            {() => {
                return (
                    <Form>
                        <Field
                            name="location"
                            placeholder="Location"
                            value={filters.location}
                            onChange={handleLocationChange}
                        />
                        <label>
                            <Field
                                type="checkbox"
                                name="AC"
                                checked={filters.equipment.ac}
              onChange={handleCheckboxChange}
                            />
                            AC
                        </label>
                        <label>
                            <Field
                                type="checkbox"
                                name="transmission"
                                checked={filters.equipment.transmission === "automatic"}
              onChange={handleCheckboxChange}
                            />
                            Automatic
                        </label>
                        <label>
                            <Field
                                type="checkbox"
                                name="kitchen"
                                checked={filters.equipment.kitchen}
              onChange={handleCheckboxChange}
                            />
                            Kitchen
                        </label>
                        <label>
                            <Field
                                type="checkbox"
                                name="TV"
                               checked={filters.equipment.tv}
              onChange={handleCheckboxChange}
                            />
                            TV
                        </label>
                        <label>
                            <Field
                                type="checkbox"
                                name="bathroom"
                                checked={filters.equipment.bathroom}
              onChange={handleCheckboxChange}
                            />
                            Bathroom
                        </label>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default FilterForm;