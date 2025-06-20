import {
  StyledExploreLink,
  StyledHomeContainer,
  StyledHeaderTitle,
  StyledTitle,
  StyledDescription
} from './home.styles';

const Home = () => {
  return (
    <StyledHomeContainer>
      <StyledHeaderTitle>SO, YOU WANT TO TRAVEL TO</StyledHeaderTitle>
      <StyledTitle>SPACE</StyledTitle>
      <StyledDescription>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </StyledDescription>
      <StyledExploreLink to='destination'>EXPLORE</StyledExploreLink>
    </StyledHomeContainer>
  );
};
export default Home;
