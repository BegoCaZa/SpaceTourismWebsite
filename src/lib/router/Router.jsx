import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../../pages/home/Home';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='destination' element={<h1>DESTINATION</h1>} />
          <Route path='crew' element={<h1>CREW</h1>} />
          <Route path='technology' element={<h1>TECHNOLOGY</h1>} />
        </Route>
      </Routes>
    </>
  );
};
export default Router;
