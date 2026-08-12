"use strict";

exports.__esModule = true;
exports.crStyle = exports.crCn = exports.S_UL = exports.S_NONE = exports.S_BLOCK = void 0;
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
//# sourceMappingURL=styleFn.js.map