import {
  useRef,
  useState,
  useCallback,
  useImperativeHandle,
  getRefValue
} from '../uiApi';

import {
  isEventKeyDelete
} from '../hooks/fUseKey';

const InputTextArea = (
  props
) => {
  const _refInput = useRef()
  , [value, setValue] = useState(props.initialValue)
  , _hChange = useCallback((evt) => {
    setValue(evt.target.value)
  }, [])
  , _hKeyDown = useCallback((evt) => {
    if (isEventKeyDelete(evt)) {
      setValue('')
    }
  }, []);

  useImperativeHandle(props.refEl, () => ({
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
      className={props.className}
      style={props.style}
      value={value}
      maxLength={props.maxLength}
      onChange={_hChange}
      onKeyDown={_hKeyDown}
    />
  );
};

export default InputTextArea
