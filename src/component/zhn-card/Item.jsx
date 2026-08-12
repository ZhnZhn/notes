import {
  S_NONE,
  crStyle
} from '../styleFn';
import useTheme from '../hooks/useTheme';

import styleConfig from '../style/Item.Style';
import {
  CL_ITEM_CARD
} from '../style/CL';

const Item = ({
  isHide,
  children
}) => {
  const TS = useTheme(styleConfig)
  , _style = crStyle(TS.ITEM, [isHide, S_NONE]);

  return (
    <section
      className={CL_ITEM_CARD}
      style={_style}
    >
      {children}
    </section>
  );
};

export default Item
