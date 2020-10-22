import withTheme from '../hoc/withTheme'
import styleConfig from '../style/Item.Style'
import CL from '../style/CL'

const S = {
  HIDE: {
    display: 'none'
  }
};

const Item = (props) => {
  const {
    isHide,
    theme,
    children
  } = props
  , TS = theme.createStyle(styleConfig)
  , _style = isHide
      ? {...TS.ITEM, ...S.HIDE}
      : TS.ITEM;

  return (
    <section
      className={CL.ITEM_CARD}
      style={_style}
    >
      {children}
    </section>
  );
};

export default withTheme(Item)
