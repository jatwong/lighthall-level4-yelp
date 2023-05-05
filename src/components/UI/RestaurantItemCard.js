import classes from './RestaurantItemCard.module.css';

import Rating from './Rating';

const RestaurantItemCard = (props) => {
  return (
    <>
      <div className={classes.card}>
        <img className={classes.cardImg} src={props.image} alt='filler meal' />
        <div className={classes.details}>
          <p className={classes.name}>{props.name}</p>
          <Rating rating={props.rating}/>
          <p>{props.price}</p>
          <p>{props.phone}</p>
          <a className={classes.url} href={props.url}>{props.name}'s Website</a>
        </div>
      </div>
    </>
  );
};

export default RestaurantItemCard;
