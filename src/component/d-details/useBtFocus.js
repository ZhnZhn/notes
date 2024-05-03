import {
  useEffect,
  getRefValue
} from '../uiApi';

const useBtFocus = (
  refBt,
  isSelected,
  props
) => useEffect(() => {
  const _bt = getRefValue(refBt);
  if (isSelected && _bt) {
    _bt.focus()
  }
}, [props])
// isSelected

export default useBtFocus
