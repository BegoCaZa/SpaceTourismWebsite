import { useState } from 'react';
import { DESTINATIONS } from '../../constants/destinations';
import {
  StyledDestinationContainer,
  StyledDestinationTitle,
  StyledDestinationTitleNumber,
  StyledImageContainer,
  StyledPlanetImage,
  StyledDestinationInfoContainer,
  StyledNavigationMenu,
  StyledNavTab,
  StyledTitle,
  StyledDescription,
  StyledStatsContainer,
  StyledStatItem,
  StyledStatLabel,
  StyledStatValue
} from './destination.styles';

const Destination = () => {
  const [activeDestination, setActiveDestination] = useState(
    DESTINATIONS[0].id
  ); //que empiece con la luna

  const currentDestination = DESTINATIONS.find(
    dest => dest.id === activeDestination
  );

  console.log('DESTINATIONS:', DESTINATIONS);
  console.log('activeDestination:', activeDestination);
  return (
    <StyledDestinationContainer>
      <StyledDestinationTitle>
        <StyledDestinationTitleNumber>01</StyledDestinationTitleNumber>
        <span>PICK YOUR DESTINATION</span>
      </StyledDestinationTitle>

      <StyledImageContainer>
        <StyledPlanetImage src={currentDestination.image} />
      </StyledImageContainer>

      <StyledDestinationInfoContainer>
        <StyledNavigationMenu>
          {DESTINATIONS.map(destination => (
            <StyledNavTab
              key={destination.id}
              $active={destination.id === activeDestination}
              onClick={() => setActiveDestination(destination.id)}
            >
              {destination.name}
            </StyledNavTab>
          ))}
        </StyledNavigationMenu>
        <StyledTitle>{currentDestination.name}</StyledTitle>
        <StyledDescription>{currentDestination.description}</StyledDescription>

        <StyledStatsContainer>
          <StyledStatItem>
            <StyledStatLabel>AVG. DISTANCE</StyledStatLabel>
            <StyledStatValue>{currentDestination.distance}</StyledStatValue>
          </StyledStatItem>
          <StyledStatItem>
            <StyledStatLabel>EST. TRAVEL TIME</StyledStatLabel>
            <StyledStatValue>{currentDestination.travelTime}</StyledStatValue>
          </StyledStatItem>
        </StyledStatsContainer>
      </StyledDestinationInfoContainer>
    </StyledDestinationContainer>
  );
};
export default Destination;
