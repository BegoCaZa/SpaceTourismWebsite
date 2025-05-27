import styled from 'styled-components';
import { BACKGROUND_IMAGES } from '../../constants/bgImages';

export const StyledGeneralContainer = styled.div`
  background-image: url(${({ $images }) => $images.mobile});
  background-size: cover;
  background-position: center;
`;

// ${({ $active }) => ($active ? '3px solid white' : 'none')};
