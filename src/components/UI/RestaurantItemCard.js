import classes from './RestaurantItemCard.module.css';

import fillerImg from '../imgs/marissa-grootes-u2Lp8tXIcjw-unsplash.jpg';
import Rating from './Rating';

const RestaurantItemCard = () => {
  return (
    <>
      <div className={classes.card}>
        <img className={classes.cardImg} src={fillerImg} alt='filler meal' />
        <div className={classes.details}>
          <p className={classes.name}>Restaurant Name</p>
          <Rating />
          <p>Restaurant details</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantItemCard;
