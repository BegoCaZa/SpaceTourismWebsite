import { v4 } from 'uuid';
import { useState } from 'react';
import { PAGES } from '../../constants/pages';
import {
  StyledOptionsContainer,
  StyledMenuContainer,
  StyledHamburguerMenuIcon,
  StyledCloseIcon,
  StyledPageItem,
  StyledPageNumber,
  StyledPageTitle
} from './menu.styles';
const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen);

  return (
    <StyledMenuContainer>
      <StyledHamburguerMenuIcon
        src='/assets/images/shared/icon-hamburger.svg'
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <nav>
        <StyledCloseIcon
          src='/assets/images/shared/icon-close.svg'
          $menuOpen={menuOpen}
          onClick={() => setMenuOpen(false)}
        />
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
