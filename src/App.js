import { Route, Routes } from 'react-router-dom';

import './App.css';

import WheelOfMeals from './components/Pages/WheelOfMeals';
import FindARestaurant from './components/Pages/FindARestaurant';
import Header from './components/UI/Header';

function App() {
  return (
    <>
      <Header />
      <div className='page'>
        <Routes>
          <Route path='/' element={<WheelOfMeals />} />
          <Route path='/find-a-restaurant' element={<FindARestaurant />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
