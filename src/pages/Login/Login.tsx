import LoginBox from '../../components/LoginBox';
import './Login.styles.scss';

function LoginPage() {
  return (
    <main className="flex-parent">
      <LoginBox />
      <div className="hero"></div>
    </main>
  );
}

export default LoginPage;
