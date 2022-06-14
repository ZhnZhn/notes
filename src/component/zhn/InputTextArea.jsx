import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  useImperativeHandle,
  getRefValue
} from '../uiApi';

import isKeyDelete from './isKeyDelete';

const InputTextArea = forwardRef(({
  className,
  style,
  initialValue,
  maxLength
}, ref) => {
  const _refInput = useRef()
  , [value, setValue] = useState(initialValue)
  , _hChange = useCallback((evt) => {
    setValue(evt.target.value)
  }, [])
  , _hKeyDown = useCallback((evt) => {
    if (isKeyDelete(evt)) {
      setValue('')
    }
  });

  useImperativeHandle(ref, () => ({
    getValue: () => value,
    focus: () => {
      const _input = getRefValue(_refInput);
      if (_input) {
        _input.focus()
      }
    }
  }), [value])

  return (
    <textarea
      ref={_refInput}
      className={className}
      style={style}
      value={value}
      maxLength={maxLength}
      onChange={_hChange}
      onKeyDown={_hKeyDown}
    />
  );
})

export default InputTextArea
