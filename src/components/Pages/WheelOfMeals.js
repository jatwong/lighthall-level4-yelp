import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import classes from './WheelOfMeals.module.css';

import Wheel from './Wheel';
import RestaurantList from './RestaurantList';

const WheelOfMeals = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [isSearching, setIsSearching] = useState(false);

  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  let formIsValid = false;
  if (country !== '' && zipcode !== '') {
    formIsValid = true;
  }

  const onSubmit = (e) => {
    setIsLoading(true);

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
        if (res.status === 500) {
          throw new Error("Couldn't retrieve data");
        } else {
          return res.json();
        }
      })
      .then((response) => {
        setData(response);
        setIsLoading(false);
        setIsSearching(true);
      })
      .catch(() => {
        navigate('/not-found');
      });
  };

  let page;
  let content = (
    <>
      {isLoading && <p className={classes.loading}>Looking for restaurants</p>}
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
        <button onClick={onSubmit} disabled={!formIsValid}>
          View restaurants
        </button>
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
