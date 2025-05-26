import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';

export const StyledExploreLink = styled(NavLink)`
  width: 50px;
  height: 50px;
  background-color: ${COLORS.white};
  display: block;
`;

export const StyledHomeContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
