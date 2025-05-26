import { StyledExploreLink, StyledHomeContainer } from './home.styles';

const Home = () => {
  return (
    <StyledHomeContainer>
      <h1>home</h1>
      <StyledExploreLink to='destination' />
    </StyledHomeContainer>
  );
};
export default Home;
