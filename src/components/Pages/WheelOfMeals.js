import classes from './WheelOfMeals.module.css';
import RestaurantList from "./RestaurantList";

const WheelOfMeals = () => {
  return (
    <div className={classes.page}>
      <RestaurantList />
    </div>
  );
};

export default WheelOfMeals;
