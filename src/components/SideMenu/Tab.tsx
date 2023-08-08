import './Tab.styles.scss';

interface TabProps extends HTMLAnchorElement {}

function Tab({ children, href }: TabProps) {
  const tabStyle = `tab ${
    window.location.pathname === href ? `tabActive` : `tabInactive`
  }`;

  return (
    <a href={href} className={tabStyle}>
      {children}
    </a>
  );
}

export default Tab;
