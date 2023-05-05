import SingleRestaurant from './SingleRestaurant';
import filler from '../imgs/marissa-grootes-u2Lp8tXIcjw-unsplash.jpg'

const DUMMY_DATA = {
  id: 1,
  name: 'McDonald',
  details: 'fast food, borgers',
  rating: 2.5,
  image: filler
};

const FindARestaurant = () => {
  return (
    <SingleRestaurant
      name={DUMMY_DATA.name}
      rating={DUMMY_DATA.rating}
      details={DUMMY_DATA.details}
      image={DUMMY_DATA.image}
    />
  );
};

export default FindARestaurant;
