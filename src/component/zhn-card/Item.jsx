import React from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from '../style/Item.Style'
import CL from '../style/CL'

const Item = (props) => {
  const { theme, children } = props
  , TS = theme.createStyle(styleConfig);
  return (
    <section
      className={CL.ITEM_CARD}
      style={TS.ITEM}
    >
      {children}
    </section>
  );
};

export default withTheme(Item)
