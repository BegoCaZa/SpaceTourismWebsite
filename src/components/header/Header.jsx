import { NavLink } from 'react-router-dom';
import Menu from '../menu/Menu';

const Header = () => {
  return (
    <>
      <NavLink to='/'>
        <img src='/assets/images/shared/logo.svg' />
      </NavLink>
      <Menu />
    </>
  );
};

export default Header;
