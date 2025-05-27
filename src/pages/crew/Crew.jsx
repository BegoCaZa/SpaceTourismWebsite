import { useState } from 'react';
import { CREW } from '../../constants/crew';
import {
  StyledPageContainer,
  StyledPageHeaderTitle,
  StyledPageTitleNumber,
  StyledImageContainer,
  StyledCrewImage,
  StyledCrewInfoContainer,
  StyledCrewMemberTitle,
  StyledCrewMemberName,
  StyledCrewMemberDescription,
  StyledNavidationMenu,
  StyledNavTab
} from './crew.styles';

const Crew = () => {
  const [activeCrewMember, setActiveCrew] = useState(CREW[0].id);

  const currentCrewMember = CREW.find(crew => crew.id === activeCrewMember);

  return (
    <StyledPageContainer>
      <StyledPageHeaderTitle>
        <StyledPageTitleNumber>02</StyledPageTitleNumber>
        <span>MEET YOUR CREW</span>
      </StyledPageHeaderTitle>

      <StyledCrewInfoContainer>
        <StyledCrewMemberTitle>{currentCrewMember.title}</StyledCrewMemberTitle>
        <StyledCrewMemberName>{currentCrewMember.name}</StyledCrewMemberName>
        <StyledCrewMemberDescription>
          {currentCrewMember.description}
        </StyledCrewMemberDescription>

        <StyledNavidationMenu>
          {CREW.map(crew => (
            <StyledNavTab
              key={crew.id}
              $active={crew.id === activeCrewMember}
              onClick={() => setActiveCrew(crew.id)}
            ></StyledNavTab>
          ))}
        </StyledNavidationMenu>
      </StyledCrewInfoContainer>

      <StyledImageContainer>
        <StyledCrewImage src={currentCrewMember.image} />
      </StyledImageContainer>
    </StyledPageContainer>
  );
};
export default Crew;
