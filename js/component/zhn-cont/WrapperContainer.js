"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _Dialog = _interopRequireDefault(require("../style/Dialog.Style"));
var _selectors = require("../../flux/selectors");
var _modalRouter = _interopRequireDefault(require("../dialogs/modalRouter"));
var _WrapperModalDialog = _interopRequireDefault(require("../zhn-ch/WrapperModalDialog"));
var _jsxRuntime = require("react/jsx-runtime");
//import PropTypes from 'prop-types'

const DialogStack = _ref => {
  let {
    TS,
    store,
    shows,
    data,
    dialogs,
    onClose
  } = _ref;
  return dialogs.map(dialog => {
    const {
      type,
      comp: DialogComp
    } = dialog;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(DialogComp, {
      TS: TS,
      isShow: shows[type],
      data: data[type],
      store: store,
      dispatch: store.dispatch,
      onClose: onClose.bind(null, type)
    }, type);
  });
};
const WrapperContainer = (0, _uiApi.memo)(_ref2 => {
  let {
    store
  } = _ref2;
  const TS = (0, _useTheme.default)(_Dialog.default),
    _refModal = (0, _uiApi.useRef)(),
    [state, setState] = (0, _uiApi.useState)({
      isShow: false,
      currentDialog: null,
      dialogs: [],
      inits: {},
      shows: {},
      data: {}
    }),
    _hClose = (0, _uiApi.useCallback)(type => {
      setState(prevState => {
        prevState.shows[type] = false;
        return {
          ...prevState,
          isShow: false,
          currentDialog: null,
          shows: prevState.shows
        };
      });
    }, []);

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    const _onStore = () => {
      const modal = _selectors.sApp.modal(store.getState()),
        {
          id: type,
          data: dialogProps = {}
        } = modal,
        _modal = (0, _uiApi.getRefValue)(_refModal);
      if (type && _modal !== modal) {
        (0, _uiApi.setRefValue)(_refModal, modal);
        setState(prevState => {
          const {
            inits,
            shows,
            data,
            dialogs
          } = prevState;
          if (!inits[type]) {
            dialogs.push({
              type,
              comp: _modalRouter.default.getDialog(type)
            });
            inits[type] = true;
          }
          shows[type] = true;
          data[type] = dialogProps;
          return {
            isShow: true,
            currentDialog: type,
            shows,
            data,
            dialogs,
            inits
          };
        });
      }
    };
    return store.subscribe(_onStore);
  }, []);
  // store
  /*eslint-enable react-hooks/exhaustive-deps */

  const {
    isShow,
    currentDialog,
    shows,
    data,
    dialogs
  } = state;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_WrapperModalDialog.default, {
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
var _default = exports.default = WrapperContainer;
//# sourceMappingURL=WrapperContainer.js.map