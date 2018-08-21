'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _selectors = require('../../flux/selectors');

var _actions = require('../../flux/drawerMsg/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  UL: 'drawer__msg-ul',
  LI: 'drawer__msg-li',
  LI_BT: 'drawer__msg-bt'
};

var DrawerMsgList = function DrawerMsgList(_ref) {
  var items = _ref.items,
      removeDrawerMsg = _ref.removeDrawerMsg;
  return _react2.default.createElement(
    'ul',
    { className: CL.UL },
    items.map(function (item) {
      return _react2.default.createElement(
        'li',
        {
          key: item.id,
          className: CL.LI
        },
        _react2.default.createElement(
          'button',
          {
            className: CL.LI_BT,
            onClick: removeDrawerMsg.bind(null, item.id)
          },
          item.msg
        )
      );
    })
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    items: _selectors.sDrawer.msg(state)
  };
};

var mapDispatchToProps = {
  removeDrawerMsg: _actions.removeDrawerMsg
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DrawerMsgList);
//# sourceMappingURL=DrawerMsgList.js.map