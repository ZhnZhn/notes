"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reducer = _interopRequireWildcard(require("../reducer"));

var _initialState = _interopRequireDefault(require("../../initialState"));

var _store = _interopRequireDefault(require("../../store"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getState = _store["default"].getState,
    dispatch = _store["default"].dispatch;

var _selectDrawerMsg = function _selectDrawerMsg() {
  return getState().drawerMsg;
};

describe('reducer drawerMsg', function () {
  test('should init to initialState', function () {
    expect((0, _reducer["default"])(undefined, {})).toEqual(_initialState["default"].drawerMsg);
  });
  test('should handle actions correctly', function () {
    // addDrawerMsg
    var msg = 'Msg',
        id = dispatch((0, _reducer.addDrawerMsg)({
      msg: msg
    })),
        itemMsg = _selectDrawerMsg()[0];

    expect(itemMsg.id).toBe(id);
    expect(itemMsg.msg.indexOf(msg)).not.toBe(-1); // removeDrawerMsg

    dispatch((0, _reducer.removeDrawerMsg)({
      id: id
    }));
    expect(_selectDrawerMsg()).toEqual([]);
  });
});
//# sourceMappingURL=reducer.test.js.map