export {
  Component,
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
