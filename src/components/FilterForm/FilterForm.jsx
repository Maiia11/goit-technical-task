import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors";
import {
  chooseLocation,
  setEquipmentFilter,
  setVechicleType,
} from "../../redux/filtersSlice";
import { Field, Form, Formik } from "formik";
import css from "./FilterForm.module.css";
import icons from "../../images/icons.svg";

const FilterForm = ({ onFilterChange }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  return (
    <Formik
      initialValues={{
        location: filters.location,
        equipment: {
          AC: false,
          transmission: '',
          kitchen: false,
          TV: false,
          bathroom: false,
        },
        form: '',
      }}
      onSubmit={(values) => {
        console.log("values", values);
        dispatch(chooseLocation(values.location));
        dispatch(setEquipmentFilter(values.equipment));
        dispatch(setVechicleType(values.form));
        onFilterChange();
      }}
    >
      {() => {
        return (
          <Form>
            {/* Location */}

            <div className={css.formLocation}>
              
              <h3 className={css.locationLabel}>Location</h3>
              <Field
                className={css.locationInput}
                name="location"
                placeholder="name of the city"
              />
              <svg width={20} height={20} fill="black">
                <use href={`${icons}#icon-map`}></use>
              </svg>
            </div>

            {/*  Filters*/}

            <h3 className={css.title}>Filters</h3>

            <div className={css.containerCheckbox}>
              <h4 className={css.titleCheckbox}>Vehicle equipment</h4>

              <div className={css.checkbox}>
                <label className={css.checkboxLabel}>
                  <Field
                    className={css.checkboxInput}
                    type="checkbox"
                    name="equipment.AC"
                  />
                  <span className={css.customCheckbox}>AC</span>{" "}
                  {/* Текст внутри чекбокса */}
                </label>

                <label className={css.checkboxLabel}>
                  <Field
                    className={css.checkboxInput}
                    type="checkbox"
                    name="equipment.transmission"
                  />
                  <span className={css.customCheckbox}>Automatic</span>
                </label>

                <label className={css.checkboxLabel}>
                  <Field
                    className={css.checkboxInput}
                    type="checkbox"
                    name="equipment.kitchen"
                  />
                  <span className={css.customCheckbox}>Kitchen</span>
                </label>

                <label className={css.checkboxLabel}>
                  <Field
                    className={css.checkboxInput}
                    type="checkbox"
                    name="equipment.TV"
                  />
                  <span className={css.customCheckbox}>TV</span>
                </label>

                <label className={css.checkboxLabel}>
                  <Field
                    className={css.checkboxInput}
                    type="checkbox"
                    name="equipment.bathroom"
                  />
                  <span className={css.customCheckbox}>Bathroom</span>
                </label>
              </div>
            </div>
            {/* type */}
            <div className={css.containerRadiobtn}>
              <h4 className={css.titleCheckbox}>Vehicle type</h4>
              <div className={css.radioBtn}>
                <label className={css.checkboxLabel}>
                  <Field
                    className={css.checkboxInput}
                    type="radio"
                    name="form"
                    value="panelTruck"
                  />
                  <span className={css.customCheckbox}>Van</span>{" "}
                  {/* Текст внутри чекбокса */}
                </label>

                <label className={css.checkboxLabel}>
                  <Field
                    className={css.checkboxInput}
                    type="radio"
                    name="form"
                    value="fullyIntegrated"
                  />
                  <span className={css.customCheckbox}>Fully Integrated</span>
                </label>

                <label className={css.checkboxLabel}>
                  <Field
                    className={css.checkboxInput}
                    type="radio"
                    name="form"
                    value="alcove"
                  />
                  <span className={css.customCheckbox}>Alcove</span>
                </label>
              </div>
            </div>
            <button type="submit" className={css.btn}>
              Search
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FilterForm;
