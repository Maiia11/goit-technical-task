
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { filteredCampers, selectError, selectLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/operations';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import Navigation from '../Navigation/Navigation';
import Catalog from '../../pages/Catalog/Catalog';

function App() {
  const dispatch = useDispatch();
  // const campers = useSelector(filteredCampers);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchCampers())
  }, [dispatch])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<Catalog/>} />
      </Routes>
    </div>
  )
}

export default App
