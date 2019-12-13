"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _hocDnD = _interopRequireDefault(require("../zhn-dnd/hocDnD"));

var _Topic = _interopRequireDefault(require("./Topic"));

var DnDTopic = (0, _hocDnD["default"])(_Topic["default"]);
DnDTopic.displayName = 'DnDTopic';
var _default = DnDTopic;
exports["default"] = _default;
//# sourceMappingURL=DnDTopic.js.map