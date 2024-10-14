
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { selectError, selectLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/operations';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import Navigation from '../Navigation/Navigation';
import Catalog from '../../pages/Catalog/Catalog';
import CamperDetaills from '../../pages/CamperDetails/CamperDetaills';
import NotFound from '../../pages/NotFound/NotFound';
import { loadFavorites } from '../../redux/favoritesSlice';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchCampers());
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Загружаем избранные кемперы из localStorage
    dispatch(loadFavorites(favorites)); // Загружаем избранные в Redux
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
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:id' element={<CamperDetaills />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App
