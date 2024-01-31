import { Route, Routes } from 'react-router-dom';

import ProtectedLayout from './layouts/ProtectedLayout';
import LoginPage from './pages/Login';
import Attendance from './pages/ProtectedPages/Attendance';
import Courseware from './pages/ProtectedPages/Courseware';
import HomePage from './pages/ProtectedPages/Home';
import Missionary from './pages/ProtectedPages/Missionary';
import Student from './pages/ProtectedPages/Student';
import Visit from './pages/ProtectedPages/Visit';

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="aluno" element={<Student />} />
        <Route path="evangelizador" element={<Missionary />} />
        <Route path="visita" element={<Visit />} />
        <Route path="chamada" element={<Attendance />} />
        <Route path="material" element={<Courseware />} />
      </Route>
    </Routes>
  );
}
