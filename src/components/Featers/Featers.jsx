const Features = ({ camper }) => {
    console.log(camper);
    const { transmission, engine, kitchen, AC } = camper;
    
  return (
    <div>
            <h3>Features</h3>
            <div>
                {transmission && <p>Transmission: {transmission}</p>}
                {engine && <p>Engine: {engine}</p>}
                {kitchen && <p>Kitchen: Kitchen</p>}
                {AC && <p>AC: Air Conditioning</p>}
            </div>
        </div>
  );
};

export default Features;