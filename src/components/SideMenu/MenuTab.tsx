import './MenuTab.styles.scss';

interface MenuTabProps
  extends React.PropsWithChildren<React.ComponentPropsWithRef<'a'>> {
  extraProp?: string;
}

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
