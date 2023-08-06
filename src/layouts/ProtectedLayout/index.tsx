import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';

import './ProtectedLayout.styles.scss';

export default function ProtectedLayout() {
  // const token = false;

  // if (!token) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div className="container">
      <nav className="side-menu"></nav>
      <div className="main-container">
        <header className="header">
          <h1>Cabeçalho</h1>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
