import AccountCircle from '@mui/icons-material/AccountCircle';
import CalendarMonth from '@mui/icons-material/CalendarMonth';

import './MainHeader.styles.scss';

function MainHeader() {
  return (
    <section className="header">
      <article className="header__start">
        <p>INSTITUTO DA CRIANÇA</p>
      </article>
      <article className="header__end">
        <CalendarMonth />
        <hr className="header__separator" />
        <p className="header__username">Thyciane Joanil</p>
        <AccountCircle />
      </article>
    </section>
  );
}

export default MainHeader;
