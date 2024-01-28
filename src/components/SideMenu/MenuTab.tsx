import './MenuTab.styles.scss';

type MenuTabProps = {
  extraProp?: string;
} & React.PropsWithChildren<React.ComponentPropsWithRef<'a'>>;

function MenuTab(props: MenuTabProps) {
  const { children, href } = props;

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
