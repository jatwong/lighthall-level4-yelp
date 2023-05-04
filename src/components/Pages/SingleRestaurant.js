import classes from './SingleRestaurant.module.css';

import filler from '../imgs/marissa-grootes-u2Lp8tXIcjw-unsplash.jpg';
import SectionWrapper from '../UI/SectionWrapper';
import Rating from '../UI/Rating';
import { NavLink } from 'react-router-dom';

const SingleRestaurant = () => {
  return (
    <SectionWrapper title='Try this!'>
      <div className={classes.page}>
        <NavLink to='/' className={classes.showMore}>Nah, show me more</NavLink>
        <div className={classes.container}>
          <img className={classes.cardImg} src={filler} alt="filler meal" />
          <div className={classes.details}>
            <p className={classes.name}>Restaurant Name</p>
            <Rating />
            <p>Restaurant details</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SingleRestaurant;
