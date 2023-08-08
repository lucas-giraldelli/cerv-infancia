import './Tab.styles.scss';

interface TabProps extends HTMLElement {
  href: string;
}

function Tab({ children, ...props }: TabProps) {
  const tabStyle = `tab ${
    window.location.pathname === props.href ? `tabActive` : `tabInactive`
  }`;

  return (
    <a href={props.href} className={tabStyle}>
      {children}
    </a>
  );
}

export default Tab;
