import classes from './SingleRestaurant.module.css';

import SectionWrapper from '../UI/SectionWrapper';
import Rating from '../UI/Rating';
import { NavLink } from 'react-router-dom';

const SingleRestaurant = (props) => {
  return (
    <SectionWrapper title='Try this!'>
      <div className={classes.page}>
        <NavLink to='/' className={classes.showMore}>Nah, show me more</NavLink>
        <div className={classes.container}>
          <img className={classes.cardImg} src={props.image} alt="filler meal" />
          <div className={classes.details}>
            <p className={classes.name}>{props.name}</p>
            <Rating rating={props.rating}/>
            <p>{props.details}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SingleRestaurant;
