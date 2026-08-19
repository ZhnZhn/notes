import {
  CL_ITEM_CARD,
  S_NONE,
  crStyle
} from '../styleFn';

const CardItem = (
  props
) => (
  <section
    className={CL_ITEM_CARD}
    style={crStyle([props.isHide, S_NONE])}
  >
    {props.children}
  </section>
);

export default CardItem
