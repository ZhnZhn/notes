import ModalPane from '../zhn-ch/ModalPane'
import ShowHide from '../zhn-ch/ShowHide'

const S = {
  PANE: {
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
  },
  ITEM: {
    lineHeight: 2.2,
    paddingLeft: 12
  },
  ITEM_CURRENT: {
    color: 'greenyellow'
  }
};

const _fOnKeyPress = onKeyPress => evt => {
  if (evt.which === 13) {
    onKeyPress(evt)
  }
};

const _renderOptions = (
  options, currentItem,
  clItem, onSelect,
  isShow
) => {
  return options.map(item => {
    const _style = (item.value === currentItem.value)
         ? {...S.ITEM, ...S.ITEM_CURRENT }
         : S.ITEM
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
}

const OptionsPane = ({
  isShow, options, item,
  rootStyle, clItem,
  onSelect, onClose
}) => (
  <ModalPane
     style={rootStyle}
     isShow={isShow}
     onClose={onClose}
  >
    <ShowHide
       isShow={isShow}
       style={{ ...S.PANE, ...rootStyle }}
    >
      {_renderOptions(options, item, clItem, onSelect, isShow)}
    </ShowHide>
  </ModalPane>
);

export default OptionsPane
