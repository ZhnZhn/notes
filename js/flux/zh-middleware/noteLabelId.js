"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _actions = require("../note/actions");

var _selectors = require("../selectors");

var _crArrFromHm = _interopRequireDefault(require("../../utils/crArrFromHm"));

var _crId = _interopRequireDefault(require("./crId"));

var _appConf = _interopRequireDefault(require("../appConf"));

var _isArr = Array.isArray,
    _isObj = function _isObj(v) {
  return v && typeof v === 'object';
};

var _fIsLabel = function _fIsLabel(item) {
  return function (_) {
    return _.title === item.title && _.color === item.color;
  };
};

var _crLabels = function _crLabels(hmLabel, labels) {
  var labelsTo = [],
      newLabels = [];

  if (!_isObj(hmLabel) || !_isArr(labels)) {
    return {
      labelsTo: labelsTo,
      newLabels: newLabels
    };
  }

  var _arrLabels = (0, _crArrFromHm["default"])(hmLabel);

  labels.forEach(function (item) {
    if (item.id) {
      labelsTo.push(item);
    } else {
      var _label = _arrLabels.find(_fIsLabel(item));

      if (!_label) {
        item.id = (0, _crId["default"])(_appConf["default"].NLABELS_PREFIX);
        labelsTo.push(item);
        newLabels.push(item);
      } else {
        item.id = _label.id;
        labelsTo.push(item);
      }
    }
  });
  return {
    labelsTo: labelsTo,
    newLabels: newLabels
  };
};

var noteLabelIdMiddleware = function noteLabelIdMiddleware(_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.type === _actions.editNoteLabels.type) {
        var hmLabels = _selectors.sNoteLabel.labels(getState()),
            payload = action.payload;

        action.payload = (0, _extends2["default"])({}, payload, _crLabels(hmLabels, payload.labels));
      }

      return next(action);
    };
  };
};

var _default = noteLabelIdMiddleware;
exports["default"] = _default;
//# sourceMappingURL=noteLabelId.js.map