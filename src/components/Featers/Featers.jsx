import css from "./Featers.module.css";

const Features = ({ camper }) => {
  const {
    transmission,
    engine,
    kitchen,
    AC,
    bathroom,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = camper;

  return (
    <div className={css.container}>
      <div className={css.bagesContainer}>
        <p className={css.bages}>{transmission}</p>
        <p className={css.bages}>{engine}</p>
        {kitchen && <p className={css.bages}> Kitchen </p>}
        {AC && <p className={css.bages}>AC</p>}
        {bathroom && <p className={css.bages}>Bathroom</p>}
        {TV && <p className={css.bages}>TV</p>}
        {radio && <p className={css.bages}>Radio</p>}
        {refrigerator && <p className={css.bages}>Refrigerator</p>}
        {microwave && <p className={css.bages}>Microwave</p>}
        {gas && <p className={css.bages}>gas</p>}
        {water && <p className={css.bages}>water</p>}
      </div>

      <div>
        <h3 className={css.titleDetails}>Vehicle details</h3>
        <div className={css.details}>
          <p>Form</p>
          <p>{form}</p>
        </div>

        <div className={css.details}>
          <p>Length</p>
          <p>{length}</p>
        </div>

        <div className={css.details}>
          <p>Width</p>
          <p>{width}</p>
        </div>

        <div className={css.details}>
          <p>Height</p>
          <p>{height}</p>
        </div>

        <div className={css.details}>
          <p>Tank</p>
          <p>{tank}</p>
        </div>

        <div className={css.details}>
          <p>Consumption</p>
          <p>{consumption}</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
