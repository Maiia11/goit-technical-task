
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { selectCars, selectError, selectLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchCampers } from '../redux/operations';

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
      <p>Hello</p>
    </div>
  )
}

export default App
