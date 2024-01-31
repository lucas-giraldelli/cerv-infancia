import { Outlet } from 'react-router-dom';

import MainHeader from '../../components/MainHeader/MainHeader';
import SideMenu from '../../components/SideMenu/SideMenu';

import './ProtectedLayout.styles.scss';

function ProtectedLayout() {
  // const token = false;

  // if (!token) {
  // return <Navigate to="/login" />;
  // }

  return (
    <div className="container">
      <nav className="side-menu">
        <SideMenu />
      </nav>
      <div className="main-container">
        <header>
          <MainHeader />
        </header>
        <Outlet />
      </div>
    </div>
  );
}

export default ProtectedLayout;
