import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Landing.module.css';

const Landing = () => {
  const navigate = useNavigate();

  const [optOne, setOptOne] = useState('');
  const [optTwo, setOptTwo] = useState('');

  const onSelectOne = (e) => {
    setOptOne(e.target.value);
  };

  const onSelectTwo = (e) => {
    setOptTwo(e.target.value);
  };

  let options = [optOne, optTwo];

  let formIsValid = false;
  if (optOne !== '' && optTwo !== '') {
    formIsValid = true;
  }

  const onSubmit = () => {
    navigate('/wheel-of-meals', { state: { options: options } });
  };
  return (
    <>
      <div className={classes.greeting}>
        <p>Can't choose your next meal?</p>
        <p>
          Find your <span>lucky bite</span>!
        </p>
      </div>
      <form className={classes.form}>
        <select onChange={onSelectOne} defaultValue='DEFAULT'>
          <option value='DEFAULT' disabled hidden>
            Choose a cuisine
          </option>
          <option>American</option>
          <option>Chinese</option>
          <option>Filipino</option>
          <option>Greek</option>
          <option>Italian</option>
          <option>Japanese</option>
          <option>Korean</option>
          <option>Mediterranean</option>
          <option>Thai</option>
          <option>Turkish</option>
          <option>Vietnamese</option>
        </select>
        <select onChange={onSelectTwo} defaultValue='DEFAULT'>
          <option value='DEFAULT' disabled hidden>
            Choose a cuisine
          </option>
          <option>American</option>
          <option>Chinese</option>
          <option>Filipino</option>
          <option>Greek</option>
          <option>Italian</option>
          <option>Japanese</option>
          <option>Korean</option>
          <option>Mediterranean</option>
          <option>Thai</option>
          <option>Turkish</option>
          <option>Vietnamese</option>
        </select>
      </form>

      <button className={classes.button} onClick={onSubmit} disabled={!formIsValid}>
        Submit
      </button>
    </>
  );
};

export default Landing;
