import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';

import WheelOfMeals from './components/Pages/WheelOfMeals';
import Header from './components/UI/Header';
import Landing from './components/Pages/Landing';
import CannotFind from './components/Pages/CannotFind';

function App() {
  return (
    <>
      <Header />
      <div className='page'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/wheel-of-meals' element={<WheelOfMeals />} />
          <Route path='/not-found' element={<CannotFind />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
