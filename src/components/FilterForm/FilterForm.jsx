import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors";
import { useState } from "react";
import { chooseLocation, setEquipmentFilter } from "../../redux/filtersSlice";
import { Field, Form, Formik } from "formik";

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

    // Обновляем фильтры в Redux при изменении формы
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormValues(prevValues => ({
            ...prevValues,
            [name]: newValue
        }));

        // Обновляем фильтры в Redux при каждом изменении
        if (name === "location") {
            dispatch(chooseLocation(newValue));
        } else {
            dispatch(setEquipmentFilter({
                ...formValues,
                [name]: newValue
            }));
        }
    };

    const handleSubmit = (values) => {
        // Обрабатываем отправку формы
        dispatch(chooseLocation(values.location));
        dispatch(setEquipmentFilter({
            ac: values.ac,
            automatic: values.automatic,
            kitchen: values.kitchen,
            tv: values.tv,
            bathroom: values.bathroom
        }));
    };

    return (
        <Formik
            initialValues={formValues}
            onSubmit={handleSubmit}
        >
            {() => {
                return (
                    <Form>
                        <Field
                            name="location"
                            placeholder="Location"
                            onChange={handleChange}
                        />
                        <label>
                            <Field
                                type="checkbox"
                                name="ac"
                                onChange={handleChange}
                            />
                            AC
                        </label>
                        <label>
                            <Field
                                type="checkbox"
                                name="automatic"
                                onChange={handleChange}
                            />
                            Automatic
                        </label>
                        <label>
                            <Field
                                type="checkbox"
                                name="kitchen"
                                onChange={handleChange}
                            />
                            Kitchen
                        </label>
                        <label>
                            <Field
                                type="checkbox"
                                name="tv"
                                onChange={handleChange}
                            />
                            TV
                        </label>
                        <label>
                            <Field
                                type="checkbox"
                                name="bathroom"
                                onChange={handleChange}
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