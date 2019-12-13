"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _actions = require("../../flux/column/actions");

var _isNotDnD = _interopRequireDefault(require("../zhn-dnd/isNotDnD"));

var _Header = _interopRequireDefault(require("./Header"));

var _Main = _interopRequireDefault(require("../zhn-ch/Main"));

var _BoardList = _interopRequireDefault(require("./BoardList"));

var PageBoards =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(PageBoards, _Component);

  function PageBoards() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._hDragEnd = function (result) {
      if ((0, _isNotDnD["default"])(result)) {
        return;
      }

      _this.props.moveColumn(result);
    };

    return _this;
  }

  var _proto = PageBoards.prototype;

  _proto.render = function render() {
    return [_react["default"].createElement(_Header["default"], {
      key: "header"
    }), _react["default"].createElement(_reactBeautifulDnd.DragDropContext, {
      key: "ddc",
      onDragEnd: this._hDragEnd
    }, _react["default"].createElement(_Main["default"], null, _react["default"].createElement(_BoardList["default"], null)))];
  };

  return PageBoards;
}(_react.Component);

var mapDispatchToProps = {
  moveColumn: _actions.moveColumn
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(PageBoards);

exports["default"] = _default;
//# sourceMappingURL=PageBoards.js.map