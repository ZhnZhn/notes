'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _actions = require('../../flux/board/actions');

var _selectors = require('../../flux/selectors');

var _CL = require('../style/CL');

var _CL2 = _interopRequireDefault(_CL);

var _isArrEmpty = require('../../utils/isArrEmpty');

var _isArrEmpty2 = _interopRequireDefault(_isArrEmpty);

var _Card = require('../zhn-card/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardColumnList = require('./CardColumnList');

var _CardColumnList2 = _interopRequireDefault(_CardColumnList);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  LINK: {
    marginTop: 8,
    marginLeft: 8,
    marginBottom: 4
  }
};

var BoardCard = function (_Component) {
  (0, _inherits3.default)(BoardCard, _Component);

  function BoardCard() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, BoardCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BoardCard.__proto__ || Object.getPrototypeOf(BoardCard)).call.apply(_ref, [this].concat(args))), _this), _this._hBlurTitle = function (evt) {
      var _this$props = _this.props,
          board = _this$props.board,
          editBoardTitle = _this$props.editBoardTitle;

      editBoardTitle(board.id, evt.target.value);
    }, _this._hSetCurrent = function () {
      var _this$props2 = _this.props,
          board = _this$props2.board,
          setBoardCurrent = _this$props2.setBoardCurrent;

      setBoardCurrent(board.id);
    }, _this._hRemove = function () {
      var _this$props3 = _this.props,
          board = _this$props3.board,
          removeBoard = _this$props3.removeBoard;

      removeBoard(board.id);
    }, _this._hToNotes = function () {
      var _this$props4 = _this.props,
          board = _this$props4.board,
          setBoardCurrent = _this$props4.setBoardCurrent;

      setBoardCurrent(board.id);
    }, _this._renderColumnInfo = function (columnIds, columns) {
      if (columnIds.length === 0) {
        return null;
      }
      return _react2.default.createElement(
        'ul',
        { style: S.UL },
        columnIds.map(function (id) {
          return _react2.default.createElement(
            'li',
            { key: id },
            _react2.default.createElement(
              'span',
              null,
              columns[id].title
            ),
            _react2.default.createElement(_Card2.default.Counter, {
              value: columns[id].noteIds.length
            })
          );
        })
      );
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(BoardCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          board = _props.board,
          columns = _props.columns,
          columnIds = board.columnIds;


      return _react2.default.createElement(
        _Card2.default.Item,
        null,
        _react2.default.createElement(_Card2.default.Title, {
          value: board.title,
          onBlur: this._hBlurTitle
        }),
        _react2.default.createElement(_Card2.default.Counter, {
          value: columnIds.length
        }),
        _react2.default.createElement(_CardColumnList2.default, {
          columnIds: columnIds,
          columns: columns
        }),
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          {
            to: '/boards/' + board.id,
            className: _CL2.default.NAV_LINK,
            style: S.LINK,
            onClick: this._hToNotes
          },
          'ToNotes'
        ),
        _react2.default.createElement(
          'div',
          null,
          (0, _isArrEmpty2.default)(columnIds) && _react2.default.createElement(_FlatButton2.default, {
            clCaption: _CL2.default.CARD_BT,
            caption: 'Remove Board',
            onClick: this._hRemove
          })
        )
      );
    }
  }]);
  return BoardCard;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    board: _selectors.sBoard.board(state, ownProps.id),
    columns: _selectors.sColumn.columns(state)
  };
};

var mapDispatchToProps = {
  editBoardTitle: _actions.editBoardTitle,
  setBoardCurrent: _actions.setBoardCurrent,
  removeBoard: _actions.removeBoard
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BoardCard);
//# sourceMappingURL=BoardCard.js.map