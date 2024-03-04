import logo from '../../assets/images/logo.png';
import './LoginBox.styles.scss';

type LoginBoxProps = {
  action: () => void;
};

function LoginBox({ action }: LoginBoxProps) {
  return (
    <div className="login-container">
      <img
        className="logo"
        src={logo}
        alt="CERV | Casa espírita Rafael Verlangieri"
      />
      <form className="login-container__box">
        <button
          type="button"
          onClick={() => {
            action();
            console.log('Loggin');
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginBox;
