import {
  isArr,
  isFn
} from '../utils/isTypeFn';

export {
  NavLink
} from './zhn-router/Router';

export {
  useDispatch,
  useSelector
} from "react-redux";

export {
  StrictMode,
  Component,
  createContext,
  memo,
  useId,
  useRef,
  useState,
  useReducer,
  useCallback,
  useMemo,
  useEffect,
  useContext,
  useImperativeHandle
} from "react";

export const KEY_ARROW_DOWN = "ArrowDown"
export const KEY_ARROW_UP = "ArrowUp"
export const KEY_ENTER = "Enter"
export const KEY_SPACE = " "
export const KEY_HOME = "Home"
export const KEY_END = "End"
export const KEY_ESCAPE = "Escape"
export const KEY_TAB = "Tab"
export const KEY_DELETE = "Delete"

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

const _focusHtmlElement = (
  element
) => {
  if (element && isFn(element.focus)) {
    element.focus()
  }
}

export const focusElementById = (
  id
) => {
  _focusHtmlElement(
    document.getElementById(id)
  )
}

export const focusRefElement = (
  ref1
) => {
  _focusHtmlElement(
    getRefValue(ref1)
  )
}

export const stopDefaultFor = (
  evt
) => {
  evt.stopPropagation()
  evt.preventDefault()
}

export const safeMap = (
  itemsOr,
  crElement
) => isArr(itemsOr) && itemsOr.length > 0
  ? itemsOr.map(crElement)
  : null
