import styled from 'styled-components';

export const StyledGeneralContainer = styled.div`
  background-image: url(${({ $images }) => $images.mobile});
  background-size: cover;
  background-position: center;
`;
