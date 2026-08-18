"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _store = _interopRequireDefault(require("../../store"));
var _modalRouter = require("../../../component/dialogs/modalRouter");
var _reducer = _interopRequireWildcard(require("../reducer"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  dispatch,
  getState
} = _store.default;
const _selectModal = () => getState().modal;
const _testActionResult = (prevState, expectedState) => {
  const nextState = _selectModal();
  expect(nextState).toEqual(expectedState);
  expect(nextState).not.toBe(prevState);
};
describe('modal slice', () => {
  test('should init to initialState', () => {
    expect((0, _reducer.default)(void 0, {})).toEqual(_reducer.initialState);
  });
  test('should use action showDetails', () => {
    const prevState = _selectModal();
    const data = {
      id: 1
    };
    dispatch((0, _reducer.showDetails)(data));
    _testActionResult(prevState, {
      id: _modalRouter.MD_DETAILS,
      data
    });
  });
  test('should use action showSettings', () => {
    const prevState = _selectModal();
    dispatch((0, _reducer.showSettings)());
    _testActionResult(prevState, {
      id: _modalRouter.MD_SETTINGS,
      data: void 0
    });
  });
  test('should use action showNotif', () => {
    const prevState = _selectModal();
    const data = 'info';
    dispatch((0, _reducer.showNotif)(data));
    _testActionResult(prevState, {
      id: _modalRouter.MD_NOTIF,
      data
    });
  });
});
//# sourceMappingURL=reducer.test.js.map