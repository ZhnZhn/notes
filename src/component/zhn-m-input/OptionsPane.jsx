import { bindToArg } from '../../utils/bindTo';

import { safeMap } from '../uiApi';

import ModalPane from '../zhn-ch/ModalPane'
import ShowHide from '../zhn-ch/ShowHide'

import crStyle from '../zhn-utils/crStyle'

const S_PANE ={
  position: 'absolute',
  top: 12,
  zIndex: 20,
  width: '100%',
  padding: '12px 0',
  lineHeight: 1.8,
  backgroundColor: 'rgb(77, 77, 77)',
  borderRadius: 2,
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'
}
, S_ITEM = {
  display: 'block',
  lineHeight: 2.2,
  paddingLeft: 16,
  width: '100%',
  textAlign: 'left'
}
, S_ITEM_CURRENT = {
  color: 'greenyellow'
};

const _renderOptions = (
  options,
  currentItem,
  clItem,
  onSelect
) => safeMap(options, item => {
  const _style = crStyle(
    S_ITEM,
    [item.value === currentItem.value, S_ITEM_CURRENT]
  )
  , _onSelect = bindToArg(onSelect, item);

  return (
    <button
      key={item.value}
      type="button"
      className={clItem}
      style={_style}
      tabIndex="0"
      onClick={_onSelect}
    >
      {item.caption}
    </button>
  );
})


const OptionsPane = ({
  isShow,
  style,
  options,
  item,
  clItem,
  onSelect,
  onClose
}) => (
  <ModalPane
    isShow={isShow}
    style={style}
    onClose={onClose}
  >
    <ShowHide
      isShow={isShow}
      style={{...S_PANE, ...style}}
    >
      {_renderOptions(options, item, clItem, onSelect, isShow)}
    </ShowHide>
  </ModalPane>
);

export default OptionsPane
