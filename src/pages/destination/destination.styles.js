import styled from 'styled-components';

import { COLORS } from '../../styles/Colors';
import { TYPOGRAPHY } from '../../styles/Typography';
import { TYPOGRAPHY_FONTS } from '../../styles/Typography';
import { TYPOGRAPHY_WEIGHTS } from '../../styles/Typography';
import { BACKGROUND_IMAGES } from '../../constants/bgImages';

export const StyledDestinationContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 90px 20px;
  background-image: url(${BACKGROUND_IMAGES.destination.mobile});
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: -1;
  top: 0;
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
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const StyledNavTab = styled.button`
  appearance: none;
  background: none;
  border: none;
  color: ${COLORS.white};
  cursor: pointer;
  padding: 10px;
  border-bottom: ${({ $active }) => ($active ? '3px solid white' : 'none')};
`;

export const StyledTitle = styled.h1`
  font-family: ${TYPOGRAPHY_FONTS.Bellefair_sansSerif};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset3};
  font-weight: ${TYPOGRAPHY_WEIGHTS.fontWeightMedium};
  margin: 16px 0;
`;
export const StyledDescription = styled.p`
  font-family: ${TYPOGRAPHY_FONTS.BarlowCondensed};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset8};
  color: ${COLORS.blue300};
  text-align: center;
  margin: 0;
`;

export const StyledStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  gap: 10px;
  border-top: 1px solid ${COLORS.white};
`;

export const StyledStatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;
export const StyledStatLabel = styled.span`
  font-family: ${TYPOGRAPHY_FONTS.BarlowCondensed};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset8};
  color: ${COLORS.blue300};
`;
export const StyledStatValue = styled.span`
  font-family: ${TYPOGRAPHY_FONTS.Bellefair};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset6};
  color: ${COLORS.white};
  font-weight: ${TYPOGRAPHY_WEIGHTS.fontWeightSemiBold};
`;
