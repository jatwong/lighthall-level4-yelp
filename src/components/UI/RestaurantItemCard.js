import classes from './RestaurantItemCard.module.css';

import fillerImg from '../imgs/marissa-grootes-u2Lp8tXIcjw-unsplash.jpg';
import Rating from './Rating';

const RestaurantItemCard = () => {
  return (
    <div>
      <div className={classes.card}>
        <img className={classes.cardImg} src={fillerImg} alt='filler meal' />
        <div className={classes.details}>
          <div className={classes.name}>Restaurant Name</div>
          <Rating />
          <div>Restaurant details</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItemCard;
