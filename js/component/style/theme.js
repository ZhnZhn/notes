'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THEME_NAME = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _THEME_CONFIG;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var P_DARK = {
  BG_BODY: '#5f5f5f',
  BG: '#4d4d4d',
  BG_HEADER: '#3a6799',
  C_HEADER: '#8a8a8a'
};
var P_WHITE = {
  BG_BODY: '#d2d2d2',
  BG: '#ebf1f5',
  BG_HEADER: 'rgb(0, 150, 200)',
  C_HEADER: '#4d4d4d'
};
var P_SAND = {
  BG_BODY: 'darkgrey',
  BG: '#e8e0cb',
  BG_HEADER: 'rgb(0, 150, 200)',
  C_HEADER: '#4d4d4d'
};

var CSS_RULE = {
  BG: {},
  ITEM: {}
};

var _assign = Object.assign;
var _setBodyBg = function _setBodyBg(conf, P) {
  document.body.style.backgroundColor = P.BG_BODY;
};
var _crBg = function _crBg(conf, P) {
  _assign(conf.BG, {
    backgroundColor: P.BG
  });
};
var _crItem = function _crItem(conf, P) {
  _assign(conf.ITEM, {
    backgroundColor: P.BG,
    border: '1px solid ' + P.BG
  });
};

var _FN_STYLES = [_setBodyBg, _crBg, _crItem];
var _setStyleTo = function _setStyleTo(conf, pallete) {
  _FN_STYLES.forEach(function (fn) {
    return fn(conf, pallete);
  });
};

var THEME_NAME = exports.THEME_NAME = {
  DEFAULT: 'DARK',
  DARK: 'DARK',
  WHITE: 'WHITE',
  SAND: 'SAND'
};
var THEME_CONFIG = (_THEME_CONFIG = {}, (0, _defineProperty3.default)(_THEME_CONFIG, THEME_NAME.DARK, {
  pallete: P_DARK,
  clSuffix: ''
}), (0, _defineProperty3.default)(_THEME_CONFIG, THEME_NAME.WHITE, {
  pallete: P_WHITE,
  clSuffix: '--white'
}), (0, _defineProperty3.default)(_THEME_CONFIG, THEME_NAME.SAND, {
  pallete: P_SAND,
  clSuffix: '--sand'
}), _THEME_CONFIG);

var CL_PROPS = {};

var _setClassNameTo = function _setClassNameTo() {
  var suffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  Object.keys(CL_PROPS).forEach(function (key) {
    CSS_RULE[key] = CL_PROPS[key] + suffix;
  });
};

var _setTheme = function _setTheme(themeName) {
  var config = THEME_CONFIG[themeName];
  var clSuffix = config.clSuffix,
      pallete = config.pallete;

  _setClassNameTo(clSuffix);
  _setStyleTo(CSS_RULE, pallete);
};

var theme = {
  themeName: THEME_NAME.DEFAULT,
  _init: function _init() {
    this.setThemeName(THEME_NAME.DEFAULT);
  },
  getThemeName: function getThemeName() {
    return this.themeName;
  },
  setThemeName: function setThemeName(themeName) {
    this.themeName = THEME_NAME[themeName] || THEME_NAME.DEFAULT;
    _setTheme(this.themeName);
  },
  createStyle: function createStyle(config) {
    if (this.themeName !== config.themeName) {
      config.style = config.createStyle(CSS_RULE, this.themeName);
      config.themeName = this.themeName;
    }
    return config.style;
  }
};

theme._init();

exports.default = theme;
//# sourceMappingURL=theme.js.map