import {
  useRef,
  useState,
  useCallback,
  useImperativeHandle,
  getRefValue
} from '../uiApi';

import isKeyDelete from './isKeyDelete';

const InputTextArea = ({
  refEl,
  className,
  style,
  initialValue,
  maxLength
}) => {
  const _refInput = useRef()
  , [value, setValue] = useState(initialValue)
  , _hChange = useCallback((evt) => {
    setValue(evt.target.value)
  }, [])
  , _hKeyDown = useCallback((evt) => {
    if (isKeyDelete(evt)) {
      setValue('')
    }
  }, []);

  useImperativeHandle(refEl, () => ({
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
};

export default InputTextArea
