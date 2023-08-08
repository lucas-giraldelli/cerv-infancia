import './SideMenu.styles.scss';
import ChurchIcon from '@mui/icons-material/Church';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Tab from './Tab';

function SideMenu() {
  return (
    <div className="sideMenu">
      <div className="titleBox">
        <h2>Menu</h2>
      </div>
      <nav className="tabsContainer navigation">
        <Tab href="/">
          <ChurchIcon />
          <span>Início</span>
        </Tab>
      </nav>
      <nav className="tabsContainer configs">
        <Tab href="/config">
          <SettingsIcon />
          <span>Configurações</span>
        </Tab>
        <Tab href="/login">
          <LogoutIcon />
          <span>Sair</span>
        </Tab>
      </nav>
    </div>
  );
}

export default SideMenu;
