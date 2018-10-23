'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hocDnD = require('../zhn-dnd/hocDnD');

var _hocDnD2 = _interopRequireDefault(_hocDnD);

var _Topic = require('./Topic');

var _Topic2 = _interopRequireDefault(_Topic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DnDTopic = (0, _hocDnD2.default)(_Topic2.default);
DnDTopic.displayName = 'DnDTopic';

exports.default = DnDTopic;
//# sourceMappingURL=DnDTopic.js.map