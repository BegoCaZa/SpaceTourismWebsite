import { useState } from 'react';
import { CREW } from '../../constants/crew';

const Crew = () => {
  const [activeCrewMember, setActiveCrew] = useState(CREW[0].id);

  const currentCrewMember = CREW.find(crew => crew.id === activeCrewMember);

  console.log('CREW MEMBER:', CREW);
  console.log('activeCrewMember:', activeCrewMember);
  return (
    <StyledPageContainer>
      <StyledPageHeaderTitle>
        <StyledPageTitleNumber>02</StyledPageTitleNumber>
        <span>MEET YOUR CREW</span>
      </StyledPageHeaderTitle>

      <StyledImageContainer>
        <StyledCrewImage src={currentCrewMember.image} />
      </StyledImageContainer>
    </StyledPageContainer>
  );
};
export default Crew;
