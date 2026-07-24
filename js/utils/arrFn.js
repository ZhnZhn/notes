"use strict";

exports.__esModule = true;
exports.joinByColon = exports.joinByBlank = void 0;
const _fJoinBy2 = strDelimeter => (str1, str2) => [str1, str2].filter(Boolean).join(strDelimeter);
const joinByBlank = exports.joinByBlank = _fJoinBy2(' ');
const joinByColon = exports.joinByColon = _fJoinBy2(': ');
//# sourceMappingURL=arrFn.js.map