
const _fIsEventKey = (
  key,
  keyCode
) => evt => evt.key === key
  || evt.keyCode === keyCode;

export const isEventKeyDelete = _fIsEventKey('Delete', 46)
export const isEventKeyEnter = _fIsEventKey('Enter', 13)
export const isEventKeyEscape = _fIsEventKey('Escape', 27)
