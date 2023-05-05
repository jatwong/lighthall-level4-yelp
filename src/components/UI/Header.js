import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <NavLink className={classes.logo} to='/'>
        lucky<span>bite</span>
      </NavLink>
      <nav className={classes['links-group']}>
        <NavLink
          className={({ isActive }) => (isActive ? `${classes.selected}` : '')}
        >
          Wheel of Meals
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? `${classes.selected}` : '')}
          to='/find-a-restaurant'
        >
          Find a restaurant
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
