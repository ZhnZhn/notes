"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _jsxRuntime = require("react/jsx-runtime");
const CL_HANDLE = 'note__handle',
  CL_OPEN = 'note__handle--open';
const NoteHandle = _ref => {
  let {
    isDetails,
    ...restProps
  } = _ref;
  const _cl = (0, _styleFn.crCn)(CL_HANDLE, [isDetails, CL_OPEN]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: _cl,
    ...restProps
  });
};
var _default = exports.default = NoteHandle;
//# sourceMappingURL=NoteHandle.js.map