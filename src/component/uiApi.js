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
