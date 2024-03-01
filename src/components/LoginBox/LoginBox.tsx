import logo from '../../assets/images/logo.png';
import './LoginBox.styles.scss';

function LoginBox() {
  return (
    <div className="login-container">
      <img
        className="logo"
        src={logo}
        alt="CERV | Casa espírita Rafael Verlangieri"
      />
      <form className="login-container__box">
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginBox;
