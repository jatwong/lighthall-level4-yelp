import { Route, Routes } from "react-router-dom";

import WheelOfMeals from "./components/Pages/WheelOfMeals";
import FindARestaurant from "./components/Pages/FindARestaurant";

function App() {
  return (
    <>
      <Routes>
        <Route path="/wheel-of-meals" element={<WheelOfMeals />} />
        <Route path="/find-a-restaurant" element={<FindARestaurant />} />
      </Routes>
    </>
  );
}

export default App;
