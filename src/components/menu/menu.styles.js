import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { TYPOGRAPHY } from '../../styles/Typography';
import { TYPOGRAPHY_FONTS } from '../../styles/Typography';

import { TYPOGRAPHY_WEIGHTS } from '../../styles/Typography';

export const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  width: 254px;
  position: relative;
`;

export const StyledHamburguerMenuIcon = styled.img`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: -10px;
`;

export const StyledCloseIcon = styled.img`
  position: absolute;
  top: -10px;
  right: 10px;
  z-index: 2;
  display: ${({ $menuOpen }) => ($menuOpen ? 'block' : 'none')};
  cursor: pointer;
`;

export const StyledOptionsContainer = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  width: 254px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
  margin: 0;
  padding: 118px 0 0 32px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 32px;

  transform: ${({ $menuOpen }) =>
    $menuOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.5s ease-in-out;
`;

export const StyledPageItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 11px;
  text-decoration: none;
  color: ${COLORS.white};
  letter-spacing: 2px;
  font-family: ${TYPOGRAPHY_FONTS.BarlowCondensed};

  &.active {
    border-right: 3px solid ${COLORS.white};
  }
`;

export const StyledPageNumber = styled.span`
  font-weight: ${TYPOGRAPHY_WEIGHTS.fontWeightBold};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset8};
`;

export const StyledPageTitle = styled.span`
  font-weight: ${TYPOGRAPHY_WEIGHTS.fontWeightLight};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset8};
`;
