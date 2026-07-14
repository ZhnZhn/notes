import { useCallback } from '../uiApi';

/*eslint-disable react-hooks/exhaustive-deps */
const fUseKey = isKey => (fn, deps) => useCallback(evt => {
  if (isKey(evt)) {
    evt.preventDefault()
    evt.stopPropagation()
    fn(evt)
  }
}, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

export default fUseKey
