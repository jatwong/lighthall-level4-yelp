import { NavLink } from 'react-router-dom';

import classes from './CannotFind.module.css';

const CannotFind = () => {
  return (
    <div className={classes.error}>
      <p>Sorry we didn't find any restaurants.</p>
      <NavLink to='/'>Try again</NavLink>
    </div>
  );
};

export default CannotFind;
