import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import { StyledGeneralContainer } from './layout.styles';
import { BACKGROUND_IMAGES } from '../../constants/bgImages';

const Layout = () => {
  const location = useLocation();
  console.log(location);
  const pathname = location.pathname.slice(1);
  const images = BACKGROUND_IMAGES[checkPathname(pathname)];
  return (
    <StyledGeneralContainer $images={images}>
      <Header />
      <Outlet />
    </StyledGeneralContainer>
  );
};

// necesito hacer una funcion que si es / crea home

const checkPathname = pathname => {
  if ((pathname = '/')) {
    return 'home';
  }
};
export default Layout;
