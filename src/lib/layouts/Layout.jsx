import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import { StyledGeneralContainer } from './layout.styles';
import { BACKGROUND_IMAGES } from '../../constants/bgImages';

const Layout = () => {
  const location = useLocation();

  const images = getBackgroundImage(location);

  return (
    <StyledGeneralContainer $images={images}>
      <Header />
      <Outlet />
    </StyledGeneralContainer>
  );
};

// necesito hacer una funcion que si es / crea home

const getBackgroundImage = location => {
  const pathname = location.pathname.slice(1);
  if (pathname === '') {
    return BACKGROUND_IMAGES.home;
  }
  return BACKGROUND_IMAGES[pathname];
};
export default Layout;
