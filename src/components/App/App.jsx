
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { selectCars, selectError, selectLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/operations';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import Navigation from '../Navigation/Navigation';

function App() {
  const dispatch = useDispatch();
  
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchCampers())
  }, [dispatch])
 

  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </div>
  )
}

export default App
