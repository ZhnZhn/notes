import { isArr } from '../../utils/isTypeFn';
import { memo } from '../uiApi';

const ItemStack = memo(({
  items,
  crItem,
  ...restProps
}) => isArr(items)
  ? items.map((item, index) => crItem(item, index, restProps))
  : null
);

export default ItemStack
