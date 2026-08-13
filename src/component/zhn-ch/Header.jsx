const Header = ({
  className,
  style,
  children
}) => (
  <header
    className={className}
    style={style}
  >
    {children}
  </header>
);

export default Header
