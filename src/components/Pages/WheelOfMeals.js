import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import classes from './WheelOfMeals.module.css';

import Wheel from './Wheel';
import RestaurantList from './RestaurantList';

const WheelOfMeals = () => {
  const { state } = useLocation();

  const [isSearching, setIsSearching] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [country, setCountry] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [data, setData] = useState([]);

  const countryHandler = (e) => {
    setCountry(e.target.value);
  };
  const zipcodeHandler = (e) => {
    setZipcode(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://couplesyelp.jayraval20.repl.co/top-cuisine-restaurants/${zipcode}/${country}/${cuisine}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setData(response);
        setIsSearching(true);
      });
  };

  let page;
  let content = (
    <>
      <p className={classes.text}>
        Looks like your next meal is <span>{cuisine}</span>!
      </p>
      <form className={classes.form}>
        <div>
          <input
            placeholder='----Enter country----'
            type='text'
            value={country}
            onChange={countryHandler}
          />
          <input
            placeholder='----Enter zipcode----'
            type='text'
            inputMode='numeric'
            value={zipcode}
            onChange={zipcodeHandler}
          />
        </div>
        <button onClick={onSubmit}>View restaurants</button>
      </form>
    </>
  );

  if (!isSearching) {
    page = (
      <>
        {isClicked && content}
        <Wheel
          setCuisine={setCuisine}
          setIsClicked={setIsClicked}
          options={state.options}
        />
      </>
    );
  } else {
    page = <RestaurantList cuisine={cuisine} data={data} />;
  }

  return <div className={classes.page}>{page}</div>;
};

export default WheelOfMeals;
