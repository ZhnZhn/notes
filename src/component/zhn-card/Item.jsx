import {
  S_NONE,
  crStyle
} from '../styleFn';

import {
  CL_ITEM_CARD
} from '../style/CL';

const Item = ({
  isHide,
  children
}) => (
  <section
    className={CL_ITEM_CARD}
    style={crStyle([isHide, S_NONE])}
  >
    {children}
  </section>
);

export default Item
