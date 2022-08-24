import ModalPane from '../zhn-ch/ModalPane'
import ShowHide from '../zhn-ch/ShowHide'

import crStyle from '../zhn-utils/crStyle'

const S_PANE ={
  position: 'absolute',
  top: 12,
  zIndex: 20,
  width: '100%',
  paddingTop: 12,
  paddingBottom: 12,
  lineHeight: 1.8,
  backgroundColor: 'rgb(77, 77, 77)',
  borderRadius: 2,
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'
}
, S_ITEM = {
  lineHeight: 2.2,
  paddingLeft: 12
}
, S_ITEM_CURRENT = {
  color: 'greenyellow'
};


const _fOnKeyPress = onKeyPress => evt => {
  if (evt.which === 13) {
    onKeyPress(evt)
  }
};

const _renderOptions = (
  options,
  currentItem,
  clItem,
  onSelect,
  isShow
) => options
 .map(item => {
    const _style = crStyle(
      S_ITEM,
      [item.value === currentItem.value, S_ITEM_CURRENT]
    )
    , _onSelect = onSelect.bind(null, item)
    , _onKeyPress = _fOnKeyPress(_onSelect);

    return (
      <div
        role="button"
        tabIndex="0"
        key={item.value}
        style={_style}
        className={clItem}
        onClick={_onSelect}
        onKeyPress={_onKeyPress}
      >
        {item.caption}
      </div>
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
