import './SideMenu.styles.scss';

import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

import MenuTab from './MenuTab';
import sideMenuLogo from '../../assets/images/sidemenu_logo.png';
import { menuItems } from '../../constants/SideMenu.constants';

function SideMenu() {
  return (
    <div className="side-menu">
      <div className="side-menu__title-box">
        <img src={sideMenuLogo} className="side-menu__logo" />
      </div>
      {menuItems.map(({ href, name, icon: MenuIcon }) => (
        <nav
          key={href}
          className="side-menu__tabs-container side-menu--navitagion"
        >
          <MenuTab href={href}>
            <MenuIcon />
            <span>{name}</span>
          </MenuTab>
        </nav>
      ))}
      <hr className="side-menu__horizontal" />
      <>
        <nav className="side-menu__tabs-container side-menu--configs">
          <MenuTab href="/config">
            <SettingsIcon />
            <span>Configurações</span>
          </MenuTab>
          <MenuTab href="/login">
            <LogoutIcon />
            <span>Sair</span>
          </MenuTab>
        </nav>
      </>
    </div>
  );
}

export default SideMenu;
