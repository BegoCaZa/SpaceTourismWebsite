import { v4 } from 'uuid';
import { useState } from 'react';
import { PAGES } from '../../constants/pages';
import {
  StyledOptionsContainer,
  StyledMenuContainer,
  StyledMenuIconContainer,
  StyledPageItem,
  StyledPageNumber,
  StyledPageTitle
} from './menu.styles';
const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen);
  const menuIcon = menuOpen
    ? '/assets/images/shared/icon-close.svg'
    : '/assets/images/shared/icon-hamburger.svg';

  return (
    <StyledMenuContainer>
      <StyledMenuIconContainer
        src={menuIcon}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <nav>
        <StyledOptionsContainer $menuOpen={menuOpen}>
          {PAGES.map(page => (
            <StyledPageItem
              key={v4()}
              to={page.link}
              onClick={() => setMenuOpen(false)}
            >
              <StyledPageNumber>{page.number}</StyledPageNumber>
              <StyledPageTitle>{page.title}</StyledPageTitle>
            </StyledPageItem>
          ))}
        </StyledOptionsContainer>
      </nav>
    </StyledMenuContainer>
  );
};

export default Menu;
