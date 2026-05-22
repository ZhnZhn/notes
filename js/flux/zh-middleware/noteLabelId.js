"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _actions = require("../note/actions");
var _selectors = require("../selectors");
var _crArrFromHm = _interopRequireDefault(require("../../utils/crArrFromHm"));
var _crId = _interopRequireDefault(require("./crId"));
var _appConf = _interopRequireDefault(require("../appConf"));
const _isArr = Array.isArray,
  _isObj = v => v && typeof v === 'object';
const _fIsLabel = item => _ => _.title === item.title && _.color === item.color;
const _crLabels = (hmLabel, labels) => {
  const labelsTo = [],
    newLabels = [];
  if (!_isObj(hmLabel) || !_isArr(labels)) {
    return {
      labelsTo,
      newLabels
    };
  }
  const _arrLabels = (0, _crArrFromHm.default)(hmLabel);
  labels.forEach(item => {
    if (item.id) {
      labelsTo.push(item);
    } else {
      const _label = _arrLabels.find(_fIsLabel(item));
      if (!_label) {
        item.id = (0, _crId.default)(_appConf.default.NLABELS_PREFIX);
        labelsTo.push(item);
        newLabels.push(item);
      } else {
        item.id = _label.id;
        labelsTo.push(item);
      }
    }
  });
  return {
    labelsTo,
    newLabels
  };
};
const noteLabelIdMiddleware = _ref => {
  let {
    getState,
    _dispatch
  } = _ref;
  return next => action => {
    if (action.type === _actions.editNoteLabels.type) {
      const hmLabels = (0, _selectors.selectNoteLabels)(getState()),
        {
          payload
        } = action;
      action.payload = {
        ...payload,
        ..._crLabels(hmLabels, payload.labels)
      };
    }
    return next(action);
  };
};
var _default = exports.default = noteLabelIdMiddleware;
//# sourceMappingURL=noteLabelId.js.map