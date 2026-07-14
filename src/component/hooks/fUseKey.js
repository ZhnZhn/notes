import { useCallback } from '../uiApi';
import { isEventKeyEscape } from '../zhn/isEventKey';

/*eslint-disable react-hooks/exhaustive-deps */
const _fUseKey = isKey => (fn, deps) => useCallback(evt => {
  if (isKey(evt)) {
    evt.preventDefault()
    evt.stopPropagation()
    fn(evt)
  }
}, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

export const useKeyEscape = _fUseKey(isEventKeyEscape)
