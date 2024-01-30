import './SideMenu.styles.scss';

import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { For } from 'million/react';

import MenuTab from './MenuTab';
import { menuItems } from '../../constants/SideMenu.constants';

function SideMenu() {
  return (
    <div className="sideMenu">
      <div className="titleBox">
        <h2>Menu</h2>
      </div>
      <For each={menuItems} as="div">
        {({ href, name, icon: MenuIcon }) => (
          <nav key={href} className="tabsContainer navitagion">
            <MenuTab href={href}>
              <MenuIcon />
              <span>{name}</span>
            </MenuTab>
          </nav>
        )}
      </For>
      <hr />
      <>
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
      </>
    </div>
  );
}

export default SideMenu;
