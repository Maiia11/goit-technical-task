
export const Catalog = ({ campers }) => {
    console.log("Cars in Catalog:", campers); // Проверяйте, что здесь отображается

    if (!Array.isArray(campers) || campers.length === 0) {
        return <p>No cars available</p>;
    }
  return (
      <div>
          <ul>{campers.map((camper) => {
              return (<li key={camper.id}>
                  <p>{camper.name}</p>
              </li>)
             })}   
          </ul>
          </div>
  )
}

export default Catalog