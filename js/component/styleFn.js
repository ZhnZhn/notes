"use strict";

exports.__esModule = true;
exports.crStyle = exports.crCn = exports.S_UL = exports.S_NONE = exports.S_BLOCK = exports.CL_TITLE_GAP = exports.CL_TITLE_BOARD = exports.CL_SHOWING = exports.CL_NOTE_LABEL_CLOSE = exports.CL_NOTE_LABEL = exports.CL_NAV_LINK = exports.CL_MODAL_PANE = exports.CL_MODAL_DIALOG = exports.CL_ML_8 = exports.CL_MD_ACTIONS = exports.CL_LOGO_BOARD = exports.CL_LOGO = exports.CL_ITEM_CARD = exports.CL_INPUT = exports.CL_HEADER_TITLE = exports.CL_HEADER = exports.CL_CONT = exports.CL_CARD_TITLE = exports.CL_CARD_BT = exports.CL_BT_CIRCLE = void 0;
const _fCrStyle = propName => value => ({
    [propName]: value
  }),
  _crDisplayStyle = _fCrStyle("display");
const S_BLOCK = exports.S_BLOCK = _crDisplayStyle("block");
const S_NONE = exports.S_NONE = _crDisplayStyle("none");
const S_UL = exports.S_UL = {
  listStyleType: 'none'
};
const _isArr = Array.isArray;
const _getCn = arrOrStr => _isArr(arrOrStr) ? arrOrStr[0] ? arrOrStr[1] : '' : arrOrStr || '';
const crCn = (conf1, conf2) => {
  const _cl1 = _getCn(conf1),
    _cl2 = _getCn(conf2);
  return _cl1 ? _cl2 ? `${_cl1} ${_cl2}` : _cl1 : _cl2 || void 0;
};
exports.crCn = crCn;
const _getStyle = arrOrStr => _isArr(arrOrStr) ? arrOrStr[0] ? arrOrStr[1] : void 0 : arrOrStr || void 0;
const crStyle = (conf1, conf2) => {
  const _s1 = _getStyle(conf1),
    _s2 = _getStyle(conf2);
  return _s1 ? _s2 ? {
    ..._s1,
    ..._s2
  } : _s1 : _s2 || void 0;
};
exports.crStyle = crStyle;
const CL_HEADER = exports.CL_HEADER = 'header';
const CL_LOGO = exports.CL_LOGO = `${CL_HEADER}__logo-notes`;
const CL_TITLE_GAP = exports.CL_TITLE_GAP = `${CL_HEADER}__title-gap`;
const CL_LOGO_BOARD = exports.CL_LOGO_BOARD = `${CL_HEADER}-board__logo_notes`;
const CL_HEADER_TITLE = exports.CL_HEADER_TITLE = `${CL_HEADER}__title`;
const CL_TITLE_BOARD = exports.CL_TITLE_BOARD = 'header-board__title';
const CL_CONT = exports.CL_CONT = 'container-list';
const CL_MODAL_PANE = exports.CL_MODAL_PANE = 'modal-pane';
const CL_MODAL_DIALOG = exports.CL_MODAL_DIALOG = 'modal-dialog';
const CL_MD_ACTIONS = exports.CL_MD_ACTIONS = 'md__actions';
const CL_SHOWING = exports.CL_SHOWING = 'show-popup';
const CL_ITEM_CARD = exports.CL_ITEM_CARD = 'card';
const CL_CARD_TITLE = exports.CL_CARD_TITLE = `${CL_ITEM_CARD}__title`;
const CL_CARD_BT = exports.CL_CARD_BT = 'bt__card';
const CL_NOTE_LABEL = exports.CL_NOTE_LABEL = 'note__label';
const CL_NOTE_LABEL_CLOSE = exports.CL_NOTE_LABEL_CLOSE = `${CL_NOTE_LABEL}__close`;
const CL_INPUT = exports.CL_INPUT = 'input-text';
const CL_BT_CIRCLE = exports.CL_BT_CIRCLE = 'bt-circle';
const CL_NAV_LINK = exports.CL_NAV_LINK = 'nav-link';
const CL_ML_8 = exports.CL_ML_8 = 'ml-8';
//# sourceMappingURL=styleFn.js.map