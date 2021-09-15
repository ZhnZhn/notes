"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _store = _interopRequireDefault(require("../../store"));

var _modalRouter = require("../../../component/dialogs/modalRouter");

var _reducer = _interopRequireWildcard(require("../reducer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var dispatch = _store["default"].dispatch,
    getState = _store["default"].getState;

var _selectModal = function _selectModal() {
  return getState().modal;
};

var _testActionResult = function _testActionResult(prevState, expectedState) {
  var nextState = _selectModal();

  expect(nextState).toEqual(expectedState);
  expect(nextState).not.toBe(prevState);
};

describe('modal slice', function () {
  test('should init to initialState', function () {
    expect((0, _reducer["default"])(void 0, {})).toEqual(_reducer.initialState);
  });
  test('should use action showDetails', function () {
    var prevState = _selectModal();

    var data = {
      id: 1
    };
    dispatch((0, _reducer.showDetails)(data));

    _testActionResult(prevState, {
      id: _modalRouter.MD.DETAILS,
      data: data
    });
  });
  test('should use action showSettings', function () {
    var prevState = _selectModal();

    dispatch((0, _reducer.showSettings)());

    _testActionResult(prevState, {
      id: _modalRouter.MD.SETTINGS,
      data: void 0
    });
  });
  test('should use action showNotif', function () {
    var prevState = _selectModal();

    var data = 'info';
    dispatch((0, _reducer.showNotif)(data));

    _testActionResult(prevState, {
      id: _modalRouter.MD.NOTIF,
      data: data
    });
  });
});
//# sourceMappingURL=reducer.test.js.map