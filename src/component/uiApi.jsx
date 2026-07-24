import {
  isArr,
  isFn
} from '../utils/isTypeFn';

export {
  NavLink
} from "react-router";

export {
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

export const cloneUiElement = (
  Element,
  overrideProps,
  key=Element.key
) => (<Element.type
  key={key}
  {...Element.props}
  {...overrideProps}
/>)

export const getRefValue = ref => ref?.current

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
  if (_el && isFn(_el.focus)) {
    _el.focus()
  }
}

export const safeMap = (
  itemsOr,
  crElement
) => isArr(itemsOr) && itemsOr.length > 0
  ? itemsOr.map(crElement)
  : null
