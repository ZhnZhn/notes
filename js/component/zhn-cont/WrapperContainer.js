"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _Dialog = _interopRequireDefault(require("../style/Dialog.Style"));

var _selectors = require("../../flux/selectors");

var _modalRouter = _interopRequireDefault(require("../dialogs/modalRouter"));

var _WrapperModalDialog = _interopRequireDefault(require("../zhn-ch/WrapperModalDialog"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var DialogStack = function DialogStack(_ref) {
  var TS = _ref.TS,
      store = _ref.store,
      shows = _ref.shows,
      data = _ref.data,
      dialogs = _ref.dialogs,
      onClose = _ref.onClose;
  return dialogs.map(function (dialog) {
    var type = dialog.type,
        comp = dialog.comp;
    return (0, _uiApi.createElement)(comp, {
      TS: TS,
      key: type,
      isShow: shows[type],
      data: data[type],
      store: store,
      dispatch: store.dispatch,
      onClose: onClose.bind(null, type)
    });
  });
};

var WrapperContainer = (0, _uiApi.memo)(function (_ref2) {
  var store = _ref2.store;

  var TS = (0, _useTheme["default"])(_Dialog["default"]),
      _refModal = (0, _uiApi.useRef)(),
      _useState = (0, _uiApi.useState)({
    isShow: false,
    currentDialog: null,
    dialogs: [],
    inits: {},
    shows: {},
    data: {}
  }),
      state = _useState[0],
      setState = _useState[1],
      _hClose = (0, _uiApi.useCallback)(function (type) {
    setState(function (prevState) {
      prevState.shows[type] = false;
      return (0, _extends2["default"])({}, prevState, {
        isShow: false,
        currentDialog: null,
        shows: prevState.shows
      });
    });
  }, []);
  /*eslint-disable react-hooks/exhaustive-deps */


  (0, _uiApi.useEffect)(function () {
    var _onStore = function _onStore() {
      var modal = _selectors.sApp.modal(store.getState()),
          type = modal.id,
          _modal$data = modal.data,
          dialogProps = _modal$data === void 0 ? {} : _modal$data,
          _modal = (0, _uiApi.getRefValue)(_refModal);

      if (type && _modal !== modal) {
        (0, _uiApi.setRefValue)(_refModal, modal);
        setState(function (prevState) {
          var inits = prevState.inits,
              shows = prevState.shows,
              data = prevState.data,
              dialogs = prevState.dialogs;

          if (!inits[type]) {
            dialogs.push({
              type: type,
              comp: _modalRouter["default"].getDialog(type)
            });
            inits[type] = true;
          }

          shows[type] = true;
          data[type] = dialogProps;
          return {
            isShow: true,
            currentDialog: type,
            shows: shows,
            data: data,
            dialogs: dialogs,
            inits: inits
          };
        });
      }
    };

    return store.subscribe(_onStore);
  }, []); // store

  /*eslint-disable react-hooks/exhaustive-deps */

  var isShow = state.isShow,
      currentDialog = state.currentDialog,
      shows = state.shows,
      data = state.data,
      dialogs = state.dialogs;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_WrapperModalDialog["default"], {
    isShow: isShow,
    onClose: _hClose.bind(null, currentDialog),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(DialogStack, {
      TS: TS,
      store: store,
      shows: shows,
      data: data,
      dialogs: dialogs,
      onClose: _hClose
    })
  });
});
/*
WrapperContainer.propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func
  })
}
*/

var _default = WrapperContainer;
exports["default"] = _default;
//# sourceMappingURL=WrapperContainer.js.map