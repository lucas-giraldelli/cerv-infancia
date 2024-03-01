import { useEffect } from 'react';

import { useAuth } from './hooks/useAuth';
import { Router } from './Router';
import useUserStore from './store';

export function App() {
  const auth = useUserStore((state) => state.authenticated);
  const setAuth = useUserStore((state) => state.setAuth);
  useAuth(setAuth);

  useEffect(() => {
    console.log({ auth });
  }, [auth]);

  return <Router />;
}
