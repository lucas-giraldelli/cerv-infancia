import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import LoginBox from '../../components/LoginBox';
import { makeLogin } from '../../hooks/makeLogin';
import useUserStore from '../../store';
import './Login.styles.scss';

function LoginPage() {
  const auth = useUserStore((state) => state.authenticated);
  const setAuth = useUserStore((state) => state.setAuth);

  const login = () => {
    makeLogin(setAuth);
  };

  useEffect(() => {
    console.log({ auth });
  }, [auth]);

  /** TODO, correct login logic should save on localStorage */
  /**if (auth) {
    return <Navigate to="/login" />;
  }*/

  return (
    <main className="flex-parent">
      <LoginBox action={login} />
      <div className="hero"></div>
    </main>
  );
}

export default LoginPage;
