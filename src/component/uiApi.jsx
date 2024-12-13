export { NavLink } from "react-router-dom";

export {
  connect,
  useDispatch,
  useSelector
} from "react-redux";

export {
  StrictMode,
  Component,
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

const _isFn = fn => typeof fn === "function";

export const cloneUiElement = (
  Element,
  overrideProps,
  key=Element.key
) => (<Element.type
  key={key}
  {...Element.props}
  {...overrideProps}
/>)

export const getRefValue = ref => (ref || {}).current

export const setRefValue = (
  ref,
  value
) => {
  if (ref) {
    ref.current = value
  }
}

export const focusRefElement = (
  ref1
) => {
  const _el = getRefValue(ref1);
  if (_el && _isFn(_el.focus)) {
    _el.focus()
  }
}
