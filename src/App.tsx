import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';

function App({ routes }) {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route />
    </Routes>
  );
}

export default App;
