import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import {
  TYPOGRAPHY,
  TYPOGRAPHY_FONTS,
  TYPOGRAPHY_WEIGHTS
} from '../../styles/Typography';

export const StyledHomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const StyledHeaderTitle = styled.span`
  color: ${COLORS.blue300};
  font-family: ${TYPOGRAPHY_FONTS.BarlowCondensed};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset9};
  font-weight: ${TYPOGRAPHY_WEIGHTS.fontWeightLight};
  letter-spacing: 1px;
`;
export const StyledTitle = styled.h1`
  font-family: ${TYPOGRAPHY_FONTS.Bellefair_sansSerif};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset2};
  font-weight: ${TYPOGRAPHY_WEIGHTS.fontWeightMedium};
  margin: 16px 0;
`;
export const StyledDescription = styled.p`
  font-family: ${TYPOGRAPHY_FONTS.BarlowCondensed};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset9};
  font-weight: ${TYPOGRAPHY_WEIGHTS.fontWeightRegular};
  color: ${COLORS.blue300};
  text-align: center;
  margin: 0;
  line-height: 1.5;
  margin-bottom: 10px;
  width: 80%;
`;

export const StyledExploreLink = styled(NavLink)`
  width: 144px;
  height: 144px;
  border-radius: 50%;
  background-color: ${COLORS.white};
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${TYPOGRAPHY_FONTS.Bellefair_sansSerif};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset9};
  font-weight: ${TYPOGRAPHY_WEIGHTS.fontWeightMedium};
`;
