import './SideMenu.styles.scss';
import ChurchIcon from '@mui/icons-material/Church';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

import MenuTab from './MenuTab';

function SideMenu() {
  return (
    <div className="sideMenu">
      <div className="titleBox">
        <h2>Menu</h2>
      </div>
      <nav className="tabsContainer navigation">
        <MenuTab href="/">
          <ChurchIcon />
          <span>Início</span>
        </MenuTab>
      </nav>
      <nav className="tabsContainer configs">
        <MenuTab href="/config">
          <SettingsIcon />
          <span>Configurações</span>
        </MenuTab>
        <MenuTab href="/login">
          <LogoutIcon />
          <span>Sair</span>
        </MenuTab>
      </nav>
    </div>
  );
}

export default SideMenu;
