import {
  useEffect,
  getRefValue
} from '../uiApi';

/*eslint-disable react-hooks/exhaustive-deps */
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
// refBt, isSelected
/*eslint-enable react-hooks/exhaustive-deps */

export default useBtFocus
