import styled from 'styled-components';

import { COLORS } from '../../styles/Colors';
import { TYPOGRAPHY } from '../../styles/Typography';
import { TYPOGRAPHY_FONTS } from '../../styles/Typography';
import { TYPOGRAPHY_WEIGHTS } from '../../styles/Typography';

export const StyledDestinationContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
`;
export const StyledDestinationTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  font-size: ${TYPOGRAPHY.fontSizeTextPreset8};
  font-family: ${TYPOGRAPHY_FONTS.BarlowCondensed};
  font-weight: 300;
  letter-spacing: 2px;
`;

export const StyledDestinationTitleNumber = styled.span`
  font-weight: ${TYPOGRAPHY_WEIGHTS.fontWeightBold};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset8};
`;

export const StyledImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const StyledPlanetImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const StyledDestinationInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  gap: 10px;
`;

export const StyledNavigationMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 40px 0 20px 0;
  width: 100%;
`;

export const StyledNavTab = styled.button`
  appearance: none;
  background: none;
  border: none;
  color: ${({ $active }) => ($active ? COLORS.white : COLORS.blue300)};
  font-family: ${TYPOGRAPHY_FONTS.BarlowCondensed};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset8};
  cursor: pointer;
  padding: 10px;
  border-bottom: ${({ $active }) => ($active ? '3px solid white' : 'none')};
  letter-spacing: 2px;
`;

export const StyledTitle = styled.h1`
  font-family: ${TYPOGRAPHY_FONTS.Bellefair_sansSerif};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset3};
  font-weight: ${TYPOGRAPHY_WEIGHTS.fontWeightMedium};
  margin: 16px 0;
`;
export const StyledDescription = styled.p`
  font-family: ${TYPOGRAPHY_FONTS.BarlowCondensed};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset9};
  color: ${COLORS.blue300};
  text-align: center;
  margin: 0;
  line-height: 1.5;
  margin-bottom: 30px;
`;

export const StyledStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 10px 30px 10px;
  gap: 20px;
  border-top: 1px solid ${COLORS.white};
`;

export const StyledStatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const StyledStatLabel = styled.span`
  font-family: ${TYPOGRAPHY_FONTS.BarlowCondensed};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset8};
  color: ${COLORS.blue300};
  letter-spacing: 2px;
`;
export const StyledStatValue = styled.span`
  font-family: ${TYPOGRAPHY_FONTS.Bellefair};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset5};
  color: ${COLORS.white};
  font-weight: ${TYPOGRAPHY_WEIGHTS.fontWeightRegular};
`;
