"use strict";

exports.__esModule = true;
exports.crStyle = exports.crCn = void 0;
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