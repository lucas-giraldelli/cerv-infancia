import { Link, useLocation } from 'react-router-dom';
import './MenuTab.styles.scss';

type MenuTabProps = {
  extraProp?: string;
} & React.PropsWithChildren<React.ComponentPropsWithRef<'a'>>;

function MenuTab(props: MenuTabProps) {
  const { children, href } = props;

  const { pathname } = useLocation();

  const tabStyle = `tab ${pathname === href ? `tabActive` : `tabInactive`}`;

  return (
    <Link to={href || '/'} className={tabStyle}>
      {children}
    </Link>
  );
}

export default MenuTab;
