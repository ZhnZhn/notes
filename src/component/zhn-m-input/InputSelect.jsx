import {
  useState,
  useCallback
} from '../uiApi';

import useBool from '../hooks/useBool';

import ArrowCell from './ArrowCell';
import OptionsPane from './OptionsPane';

import {
  CL_SELECT,
  CL_LABEL,
  CL_DIV,
  CL_DIV_VALUE,
  CL_DIV_BT,
  CL_INPUT_LINE
} from './CL';

const DF_INITIAL_ITEM = {
  caption: '',
  value: ''
}
, DF_TS = {};

const InputSelect = ({
  initialItem,
  caption,
  options,
  styleConfig:TS=DF_TS,
  onSelect
}) => {
  const [
    isShow,
    _hOpen,
    _hClose
  ] = useBool()
  , [
    item,
    setItem
  ] = useState(initialItem || DF_INITIAL_ITEM)
  , _hSelect = useCallback((item, event) => {
    event.stopPropagation()
    onSelect(item)
    _hClose()
    setItem(item)
  }, [onSelect, _hClose]);

  return (
    <div
      role="presentation"
      className={CL_SELECT}
      style={TS.ROOT}
      onClick={_hOpen}
    >
      <OptionsPane
         style={TS.MODAL_PANE}
         isShow={isShow}
         item={item}
         options={options}
         clItem={TS.CL_ITEM}
         onSelect={_hSelect}
         onClose={_hClose}
       />
      <label className={CL_LABEL}>
        {caption}
      </label>
      <div className={CL_DIV}>
        <div className={CL_DIV_VALUE}>
           {item.caption}
        </div>
        <button className={CL_DIV_BT} tabIndex="0">
          <ArrowCell />
        </button>
        <div className={CL_INPUT_LINE} />
      </div>
    </div>
  );
}

export default InputSelect
