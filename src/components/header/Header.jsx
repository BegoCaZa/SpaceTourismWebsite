import { NavLink } from 'react-router-dom';
import Menu from '../menu/Menu';
import { StyledHeaderContainer } from './Header.styles';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <NavLink to='/'>
        <img src='/assets/images/shared/logo.svg' />
      </NavLink>
      <Menu />
    </StyledHeaderContainer>
  );
};

export default Header;
