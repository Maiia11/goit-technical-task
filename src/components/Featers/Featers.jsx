import css from './Featers.module.css'

const Features = ({ camper }) => {
    console.log(camper);
    const { transmission, engine, kitchen, AC, bathroom, TV, radio, refrigerator, microwave, gas, water

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
        {radio
 && <p className={css.bages}>Radio
          </p>}
        {refrigerator
 && <p className={css.bages}>Refrigerator
          </p>}
        {microwave
 && <p className={css.bages}>Microwave
          </p>}
        {gas
 && <p className={css.bages}>gas
          </p>}
        {water
 && <p className={css.bages}>water
          </p>}
        
        
        
                  </div>
            {/* <div>
                {transmission && <p>Transmission: {transmission}</p>}
                {engine && <p>Engine: {engine}</p>}
                {kitchen && <p>Kitchen: Kitchen</p>}
                {AC && <p>AC: Air Conditioning</p>}
            </div> */}
        </div>
  );
};

export default Features;