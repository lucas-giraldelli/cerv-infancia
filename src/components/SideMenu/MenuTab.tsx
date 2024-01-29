import { Link, useLocation } from 'react-router-dom';
import './MenuTab.styles.scss';

type MenuTabProps = {
  extraProp?: string;
} & React.PropsWithChildren<React.ComponentPropsWithRef<'a'>>;

function MenuTab(props: MenuTabProps) {
  const { children, href } = props;

  const { state } = useLocation();

  const tabStyle = `tab ${
    state?.location === href ? `tabActive` : `tabInactive`
  }`;

  return (
    <Link to={href || '/'} className={tabStyle} state={{ location: href }}>
      {children}
    </Link>
  );
}

export default MenuTab;
