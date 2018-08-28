import React from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from '../style/Header.Style'

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
       style={{...style, ...TS.HEADER}}       
    >
       {children}
    </header>
  );
}

export default withTheme(Header)
