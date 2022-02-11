import useTheme from '../hooks/useTheme';
import styleConfig from '../style/Comp.Style';

const Header = ({
  className,
  style,
  children
}) => {
  const TS = useTheme(styleConfig);
  return (
    <header
       className={className}
       style={{...style, ...TS.COMP}}
    >
       {children}
    </header>
  );
};

export default Header
