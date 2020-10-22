import withTheme from '../hoc/withTheme'
import styleConfig from '../style/Comp.Style'

const Header = (props) => {
  const {
    className,
    style,
    theme,
    children
  } = props
  , TS = theme.createStyle(styleConfig);
  return (
    <header
       className={className}
       style={{...style, ...TS.COMP}}
    >
       {children}
    </header>
  );
}

export default withTheme(Header)
