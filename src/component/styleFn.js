const _fCrStyle = propName => value => ({
  [propName]: value
})
, _crDisplayStyle = _fCrStyle("display");
export const S_BLOCK = _crDisplayStyle("block")
export const S_NONE = _crDisplayStyle("none")

export const S_UL = {
  listStyleType: 'none'
}

const _isArr = Array.isArray;

const _getCn = (arrOrStr) => _isArr(arrOrStr)
  ? arrOrStr[0] ? arrOrStr[1] : ''
  : arrOrStr || '';

export const crCn = (
  conf1,
  conf2
) => {
  const _cl1 = _getCn(conf1)
  , _cl2 = _getCn(conf2);
  return _cl1
    ? _cl2 ? `${_cl1} ${_cl2}` : _cl1
    : _cl2 || void 0 ;
}

const _getStyle = (arrOrStr) => _isArr(arrOrStr)
  ? arrOrStr[0] ? arrOrStr[1] : void 0
  : arrOrStr || void 0;

export const crStyle = (
  conf1,
  conf2
) => {
  const _s1 = _getStyle(conf1)
  , _s2 = _getStyle(conf2);
  return _s1
    ? _s2 ? {..._s1, ..._s2} : _s1
    : _s2 || void 0 ;
}

export const crBlockNoneStyle = (
  props
) => crStyle(
  props.style,
  props.isShow ? S_BLOCK : S_NONE
)

export const CL_HEADER = 'header'
export const CL_LOGO = `${CL_HEADER}__logo-notes`
export const CL_TITLE_GAP = `${CL_HEADER}__title-gap`
export const CL_LOGO_BOARD = `${CL_HEADER}-board__logo_notes`

export const CL_HEADER_TITLE = `${CL_HEADER}__title`
export const CL_TITLE_BOARD = 'header-board__title'

export const CL_CONT = 'container-list'

export const CL_MODAL_PANE = 'modal-pane'
export const CL_MODAL_DIALOG = 'modal-dialog'
export const CL_MD_ACTIONS = 'md__actions'

export const CL_SHOWING = 'show-popup'

export const CL_ITEM_CARD = 'card'
export const CL_CARD_TITLE = `${CL_ITEM_CARD}__title`
export const CL_CARD_BT = 'bt__card'

export const CL_NOTE_LABEL = 'note__label'
export const CL_NOTE_LABEL_CLOSE = `${CL_NOTE_LABEL}__close`

export const CL_INPUT = 'input-text'
export const CL_BT_CIRCLE = 'bt-circle'

export const CL_NAV_LINK = 'nav-link'

export const CL_ML_8 = 'ml-8'
