import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors";
import { chooseLocation, setEquipmentFilter } from "../../redux/filtersSlice";
import { Field, Form, Formik } from "formik";
import css from './FilterForm.module.css'

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
                        {/* Location */}
                        
                        <div className={css.formLocation}>
                        <h3 className={css.locationLabel}>Location</h3>
                        <Field className={css.locationInput}
                            name="location"
                            placeholder="name of the city"
                            value={filters.location}
                            onChange={handleLocationChange}
                            />
                        </div>
                        
                        {/*  Filters*/}
                        
                        <h3 className={css.title}>Filters</h3>

                        <div className={css.containerCheckbox}>
                            <h4 className={css.titleCheckbox}>Vehicle equipment</h4>
                            
                            <div className={css.checkbox}>
                                <label className={css.checkboxLabel}>
                                    <Field className={css.checkboxInput}
                                        type="checkbox"
                                        name="AC"
                                        checked={filters.equipment.ac}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className={css.customCheckbox}>AC</span> {/* Текст внутри чекбокса */}
                                </label>

                                <label className={css.checkboxLabel}>
                                    <Field className={css.checkboxInput}
                                        type="checkbox"
                                        name="transmission"
                                        checked={filters.equipment.transmission === "automatic"}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className={css.customCheckbox}>Automatic</span>
                                </label>
                                
                                <label className={css.checkboxLabel}>
                                    <Field className={css.checkboxInput}
                                        type="checkbox"
                                        name="kitchen"
                                        checked={filters.equipment.kitchen}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className={css.customCheckbox}>Kitchen</span>
                                </label>
                                <label className={css.checkboxLabel}>
                                    <Field className={css.checkboxInput}
                                        type="checkbox"
                                        name="TV"
                                        checked={filters.equipment.tv}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className={css.customCheckbox}>TV</span>
                                </label>
                                
                                <label className={css.checkboxLabel}>
                                    <Field className={css.checkboxInput}
                                        type="checkbox"
                                        name="bathroom"
                                        checked={filters.equipment.bathroom}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className={css.customCheckbox}>Bathroom</span>
                                </label>
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default FilterForm;