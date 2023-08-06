import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import ProtectedLayout from './layouts/ProtectedLayout';

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
