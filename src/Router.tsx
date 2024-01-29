import { Route, Routes } from 'react-router-dom';

import ProtectedLayout from './layouts/ProtectedLayout';
import LoginPage from './pages/Login';
import { menuItems } from './shared/constants';

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/" element={<ProtectedLayout />}>
        {menuItems.map((item) => {
          const { href, component: Element } = item;
          return <Route key={href} path={href} element={<Element />} />;
        })}
      </Route>
    </Routes>
  );
}
