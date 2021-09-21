
const S_DIV = {
  paddingTop: 8,
  paddingBottom: 8,
  lineHeight: '36px'
};

const Header = ({
  children
}) => (
  <div style={S_DIV}>
    {children}
  </div>
);

export default Header
