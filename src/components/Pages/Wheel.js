import { useState } from 'react';

import classes from './Wheel.module.css';

const Wheel = (props) => {
  const [wheelClass, setWheelClass] = useState(`${classes.wheel}`);

  const [randomNumber, setRandomNumber] = useState(0);

  const [isSpinning, setIsSpinning] = useState(false);

  const convertDegreeToPieChart = (degree) => {
    // convert degree to pie chart (1-8)
    if (degree <= 21) return 1; // 21
    if (degree <= 23 + 45) return 8; // 68
    if (degree <= 23 + 45 * 2) return 7; //
    if (degree <= 23 + 45 * 3) return 6;
    if (degree <= 23 + 45 * 4) return 5;
    if (degree <= 23 + 45 * 5) return 4;
    if (degree <= 23 + 45 * 6) return 3;
    if (degree <= 23 + 45 * 7) return 2;
    return 1;
  };

  const slices = [
    { class: `${classes.one}`, text: props.options[0] },
    { class: `${classes.two}`, text: props.options[1] },
    { class: `${classes.three}`, text: props.options[0] },
    { class: `${classes.four}`, text: props.options[1] },
    { class: `${classes.five}`, text: props.options[0] },
    { class: `${classes.six}`, text: props.options[1] },
    { class: `${classes.seven}`, text: props.options[0] },
    { class: `${classes.eight}`, text: props.options[1] },
  ];

  const spinHandler = () => {
    setIsSpinning(true);
    setWheelClass(`${classes.wheel} ${classes['start-rotate']}`);

    setTimeout(() => {
      setWheelClass(`${classes.wheel} ${classes['stop-rotate']}`);
      const degree = Math.ceil(Math.random() * 360);
      // TODO: Make it work the way Justina wants it to work (after the project deadline)
      //   console.log(degree)
      console.log(convertDegreeToPieChart(degree));
      setRandomNumber(degree);

      let option;
      if (convertDegreeToPieChart(degree) % 2 === 0) {
        option = props.options[1];
      } else {
        option = props.options[0];
      }

      setIsSpinning(false);
      props.setCuisine(option);

      setTimeout(function() {
        props.setIsClicked(true);
      }, 1000);
    }, 2500); // 2.5s spin
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.arrow}></div>
        <div
          className={wheelClass}
          style={{ '--random-number': `${randomNumber}deg` }}
        >
          {slices.map((slice, index) => (
            <div className={slice.class} key={index}>
              <span>{slice.text}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        className={classes.spin}
        onClick={spinHandler}
        disabled={isSpinning}
      >
        SPIN
      </button>
    </>
  );
};

export default Wheel;
