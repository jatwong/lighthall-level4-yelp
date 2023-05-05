import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <NavLink className={classes.logo} to='/'>
        lucky<span>bite</span>
      </NavLink>
    </div>
  );
};

export default Header;
