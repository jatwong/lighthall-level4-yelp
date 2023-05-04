import classes from './RestaurantList.module.css';
import RestaurantItemCard from '../UI/RestaurantItemCard';
import SectionWrapper from '../UI/SectionWrapper';

const RestaurantList = () => {
  return (
    <SectionWrapper title='option 2 Restaurants'>
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
    </SectionWrapper>
  );
};

export default RestaurantList;
