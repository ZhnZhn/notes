"use strict";

exports.__esModule = true;
exports.bindToArg = void 0;
const FN_NOOP = () => {};
const bindToArg = (fn, arg) => (fn || FN_NOOP).bind(null, arg);
exports.bindToArg = bindToArg;
//# sourceMappingURL=bindTo.js.map