import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'

const Navigation = () => {


    return (
        <div className={css.container}>
           <p className={css.title}>Travel<span className={css.span}>Tracks</span> </p> 
      <nav className={css.navigation}>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/catalog"> Catalog </NavLink>
            </nav>
        </div>
  )}

export default Navigation