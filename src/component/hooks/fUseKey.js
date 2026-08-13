import {
  KEY_ENTER,
  KEY_ESCAPE,
  KEY_SPACE,
  KEY_DELETE,
  useCallback,
  stopDefaultFor
} from '../uiApi';

/*eslint-disable react-hooks/exhaustive-deps */
const _fUseKey = isKey => (
  fn,
  deps
) => useCallback(evt => {
  if (isKey(evt)) {
    stopDefaultFor(evt)
    fn(evt)
  }
}, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

const _fIsEventKey = (
  key,
  keyCode
) => evt => evt.key === key
  || evt.keyCode === keyCode;

export const isEventKeyDelete = _fIsEventKey(KEY_DELETE, 46)
export const isEventKeyEnter = _fIsEventKey(KEY_ENTER, 13)
export const isEventKeyEscape = _fIsEventKey(KEY_ESCAPE, 27)

export const useKeyEscape = _fUseKey(isEventKeyEscape)

export const isKeyEnterOrSpace = (
  evtKey
) => evtKey === KEY_ENTER || evtKey === KEY_SPACE
