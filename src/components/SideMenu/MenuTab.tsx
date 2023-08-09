import './MenuTab.styles.scss';

interface MenuTabProps extends HTMLAnchorElement {}

function MenuTab({ children, href }: MenuTabProps) {
  const tabStyle = `tab ${
    window.location.pathname === href ? `tabActive` : `tabInactive`
  }`;

  return (
    <a href={href} className={tabStyle}>
      {children}
    </a>
  );
}

export default MenuTab;
