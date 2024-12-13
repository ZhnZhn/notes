export { NavLink } from "react-router-dom";

export {
  connect,
  useDispatch,
  useSelector
} from "react-redux";

export {
  StrictMode,
  Component,
  cloneElement,
  createContext,
  memo,
  useRef,
  useState,
  useReducer,
  useCallback,
  useMemo,
  useEffect,
  useContext,
  useImperativeHandle
} from "react";

export const getRefValue = ref => (ref || {}).current

export const setRefValue = (
  ref,
  value
) => {
  if (ref) {
    ref.current = value
  }
}

const _isFn = fn => typeof fn === "function";

export const focusRefElement = (
  ref1
) => {
  const _el = getRefValue(ref1);
  if (_el && _isFn(_el.focus)) {
    _el.focus()
  }
}
