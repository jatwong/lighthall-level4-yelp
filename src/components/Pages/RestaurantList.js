import classes from './RestaurantList.module.css';

import RestaurantItemCard from '../UI/RestaurantItemCard';
import SectionWrapper from '../UI/SectionWrapper';
import CannotFind from './CannotFind';

const RestaurantList = (props) => {
  let content = (
    <div className={classes.list}>
      {props.data.map((restaurant) => (
        <RestaurantItemCard
          key={restaurant.id}
          name={restaurant.name}
          price={restaurant.price}
          phone={restaurant.display_phone}
          rating={restaurant.rating}
          image={restaurant.image_url}
          url={restaurant.url}
        />
      ))}
    </div>
  );

  if (props.data.length === 0) {
    content = <CannotFind />;
  }
  return (
    <SectionWrapper title={`${props.cuisine} Restaurants`}>
      <div className={classes.container}>{content}</div>
    </SectionWrapper>
  );
};

export default RestaurantList;
