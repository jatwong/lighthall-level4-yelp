import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';

import WheelOfMeals from './components/Pages/WheelOfMeals';
import FindARestaurant from './components/Pages/FindARestaurant';
import Header from './components/UI/Header';
import Landing from './components/Pages/Landing';

function App() {
  return (
    <>
      <Header />
      <div className='page'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/wheel-of-meals' element={<WheelOfMeals />} />
          <Route path='/find-a-restaurant' element={<FindARestaurant />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
