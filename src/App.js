import { Route, Routes } from 'react-router-dom';

import WheelOfMeals from './components/Pages/WheelOfMeals';
import FindARestaurant from './components/Pages/FindARestaurant';
import Header from './components/UI/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<WheelOfMeals />} />
        <Route path='/find-a-restaurant' element={<FindARestaurant />} />
      </Routes>
    </>
  );
}

export default App;
