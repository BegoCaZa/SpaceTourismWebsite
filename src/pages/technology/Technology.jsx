import { useState } from 'react';
import { TECHNOLOGY } from '../../constants/technology';
import {
  StyledPageContainer,
  StyledPageHeaderTitle,
  StyledPageTitleNumber,
  StyledImageContainer,
  StyledTechnologyImage,
  StyledTechnologyInfoContainer,
  StyledTechnologyTitle,
  StyledTechnologyDescription,
  StyledNavidationMenu,
  StyledNavTab,
  StyledTechnologyHeader
} from './technology.styles';

const Technology = () => {
  const [activeTechnology, setActiveTechnology] = useState(TECHNOLOGY[0].id);

  const currentTechnology = TECHNOLOGY.find(
    tech => tech.id === activeTechnology
  );
  return (
    <StyledPageContainer>
      <StyledPageHeaderTitle>
        <StyledPageTitleNumber>03</StyledPageTitleNumber>
        <span>SPACE LAUNCH 101</span>
      </StyledPageHeaderTitle>

      <StyledImageContainer>
        <StyledTechnologyImage src={currentTechnology.image} />
      </StyledImageContainer>

      <StyledTechnologyInfoContainer>
        <StyledNavidationMenu>
          {TECHNOLOGY.map(tech => (
            <StyledNavTab
              key={tech.id}
              $active={tech.id === activeTechnology}
              onClick={() => setActiveTechnology(tech.id)}
            ></StyledNavTab>
          ))}
        </StyledNavidationMenu>
        <StyledTechnologyHeader>THE TERMINOLOGY…</StyledTechnologyHeader>
        <StyledTechnologyTitle>
          {currentTechnology.technology}
        </StyledTechnologyTitle>
        <StyledTechnologyDescription>
          {currentTechnology.description}
        </StyledTechnologyDescription>
      </StyledTechnologyInfoContainer>
    </StyledPageContainer>
  );
};
export default Technology;
