import {
  useRef,
  useEffect,
  setRefValue,
  focusRefElement
} from '../uiApi';

export const useFocusPrevElement = (
  isShow
) => {
  const _refPrevElement = useRef();
  useEffect(() => {
    let _idFocus;
    if (isShow) {
      setRefValue(_refPrevElement, document.activeElement)
    } else {
      _idFocus = setTimeout(() => focusRefElement(_refPrevElement), 100)
    }
    return () => clearTimeout(_idFocus);
  }, [isShow])
}
