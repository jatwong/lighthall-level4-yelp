import classes from './RestaurantList.module.css';
import RestaurantItemCard from '../UI/RestaurantItemCard';

const RestaurantList = () => {
  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h2>option 2 Restaurants</h2>
      </div>
      <div className={classes.sort}>
        <p>Sort by</p>
        <div>
          <button>Rating</button>
          <button>Reviews</button>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.list}>
          {/* map restaurant items here */}
          <RestaurantItemCard />
          <RestaurantItemCard />
          <RestaurantItemCard />

        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
