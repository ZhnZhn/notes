'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _actions = require('../note/actions');

var _selectors = require('../selectors');

var _hmToArr = require('../../utils/hmToArr');

var _hmToArr2 = _interopRequireDefault(_hmToArr);

var _crId = require('./crId');

var _crId2 = _interopRequireDefault(_crId);

var _appConf = require('../appConf');

var _appConf2 = _interopRequireDefault(_appConf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fIsLabel = function _fIsLabel(item) {
  return function (_) {
    return _.title === item.title && _.color === item.color;
  };
};

var _crLabels = function _crLabels(hmLabel, labels) {
  var labelsTo = [],
      newLabels = [];

  if (!hmLabel || (typeof hmLabel === 'undefined' ? 'undefined' : (0, _typeof3.default)(hmLabel)) !== 'object' || !Array.isArray(labels)) {
    return { labelsTo: labelsTo, newLabels: newLabels };
  }

  var _arrLabels = (0, _hmToArr2.default)(hmLabel);
  labels.forEach(function (item) {
    if (item.id) {
      labelsTo.push(item);
    } else {
      var _label = _arrLabels.find(_fIsLabel(item));
      if (!_label) {
        item.id = (0, _crId2.default)(_appConf2.default.NLABELS_PREFIX);
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
      if (action.type === _actions.ACTION.EDIT_NOTE_LABELS) {
        var hmLabels = _selectors.sNoteLabel.labels(getState());
        action = (0, _extends3.default)({}, action, _crLabels(hmLabels, action.labels));
      }
      return next(action);
    };
  };
};

exports.default = noteLabelIdMiddleware;
//# sourceMappingURL=noteLabelId.js.map