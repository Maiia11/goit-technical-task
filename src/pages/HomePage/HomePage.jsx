import { useNavigate } from 'react-router-dom'
import css from './HomePage.module.css'

const HomePage = () => {
  const navigate = useNavigate();

  const goToCatalog = () => {
    navigate('/catalog')
  }
  return (
      <div className={css.container}>
          <div className={css.title}>
          <h1 className={css.heroText}>Campers of your dreams</h1>
          <p className={css.heroParagraph}> You can find everything you want in our catalog</p>
          <button className={css.btn} onClick={goToCatalog}> View Now</button>
          </div>
    </div>
  )
}

export default HomePage