import { Route, Routes } from 'react-router-dom';

import ProtectedLayout from './layouts/ProtectedLayout';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
