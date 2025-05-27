import styled from 'styled-components';

import { COLORS } from '../../styles/Colors';
import { TYPOGRAPHY } from '../../styles/Typography';
import { TYPOGRAPHY_FONTS } from '../../styles/Typography';
import { TYPOGRAPHY_WEIGHTS } from '../../styles/Typography';

export const StyledPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const StyledPageHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  font-size: ${TYPOGRAPHY.fontSizeTextPreset8};
  font-family: ${TYPOGRAPHY_FONTS.BarlowCondensed};
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 64px;
`;

export const StyledPageTitleNumber = styled.span`
  font-weight: ${TYPOGRAPHY_WEIGHTS.fontWeightBold};
  font-size: ${TYPOGRAPHY.fontSizeTextPreset8};
`;

export const StyledImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const StyledTechnologyImage = styled.img`
  width: 100%;
`;

export const StyledTechnologyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  gap: 10px;
  margin-bottom: 50px;
`;
export const StyledNavidationMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100px;
  height: 12px;
`;
export const StyledNavTab = styled.button`
  appearance: none;
  background: none;
  border: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $active }) => ($active ? COLORS.white : 'grey')};

  cursor: pointer;
`;

export const StyledTechnologyHeader = styled.span`
  font-size: ${TYPOGRAPHY.fontSizeTextPreset8};
  font-family: ${TYPOGRAPHY_FONTS.Bellefair_sansSerif};
  font-weight: ${TYPOGRAPHY_WEIGHTS.fontWeightRegular};
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin: 0;
`;

export const StyledTechnologyTitle = styled.span`
  font-size: ${TYPOGRAPHY.fontSizeTextPreset6};
  font-family: ${TYPOGRAPHY_FONTS.Bellefair};
  font-weight: ${TYPOGRAPHY_WEIGHTS.fontWeightMedium};
  color: ${COLORS.white};
  text-align: center;
  margin: 0;
`;

export const StyledTechnologyDescription = styled.p`
  font-size: ${TYPOGRAPHY.fontSizeTextPreset8};
  font-family: ${TYPOGRAPHY_FONTS.Barlow};
  font-weight: ${TYPOGRAPHY_WEIGHTS.fontWeightLight};
  color: ${COLORS.blue300};
  text-align: center;
  width: 90%;
  line-height: 1.5;
  margin-bottom: 50px;
`;
