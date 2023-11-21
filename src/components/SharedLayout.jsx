import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from '../data/index';

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;
