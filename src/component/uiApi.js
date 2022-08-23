export {
  StrictMode,
  Component,
  createElement,
  cloneElement,
  createContext,
  memo,
  forwardRef,
  useRef,
  useState,
  useReducer,
  useCallback,
  useEffect,
  useContext,
  useImperativeHandle
} from 'react';

export const getRefValue = ref => (ref || {}).current

export const setRefValue = (
  ref,
  value
) => {
  if (ref) {
    ref.current = value
  }
}

const _isFn = fn => typeof fn === 'function';

export const focusRefElement = (
  ref1
) => {
  const _el = getRefValue(ref1);
  if (_el && _isFn(_el.focus)) {
    _el.focus()
  }
}
