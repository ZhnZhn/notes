import {
  useState,
  useCallback,
  useImperativeHandle
} from '../uiApi';

import crCn from '../zhn-utils/crCn';
import {
  CL_INPUT
} from '../style/CL';

import isKeyEnter from './isKeyEnter';
import isKeyDelete from './isKeyDelete';

const InputText = ({
  refEl,
  className,
  style,
  initialValue,
  maxLength=40,
  onBlur
}) => {
  const [
    value,
    setValue
  ] = useState(initialValue)
  , _hChange = useCallback((evt) => {
    const { value } = evt.target;
    if (value.length <= maxLength) {
      setValue(value)
    }
  }, [maxLength])
  , _hKeyDown = useCallback((evt) => {
    if (isKeyEnter(evt)) {
      const el = document.activeElement;
      if (el && typeof el.blur === 'function' ) {
        el.blur()
      }
    } else if (isKeyDelete(evt)) {
      setValue('')
    }
  }, []);

  useImperativeHandle(refEl, () => ({
    setValue: (nextValue) => {
      if (nextValue.length <= maxLength) {
        setValue(nextValue)
      }
    }
  }), [maxLength])

  const _className = crCn(CL_INPUT, className);

  return (
    <input
      type="text"
      className={_className}
      style={style}
      value={value}
      onChange={_hChange}
      onBlur={onBlur}
      onKeyDown={_hKeyDown}
    />
  );
};

export default InputText
