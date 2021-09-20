import useTheme from '../hooks/useTheme';
import crStyle from '../zhn-utils/crStyle';

import styleConfig from '../style/Item.Style';
import CL from '../style/CL';

const S_HIDE = { display: 'none' };

const Item = ({
  isHide,
  children
}) => {
  const TS = useTheme(styleConfig)
  , _style = crStyle(TS.ITEM, [isHide, S_HIDE]);

  return (
    <section
      className={CL.ITEM_CARD}
      style={_style}
    >
      {children}
    </section>
  );
};

export default Item
