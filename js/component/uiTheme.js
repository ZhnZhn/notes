"use strict";

exports.__esModule = true;
exports.setUiTheme = exports.UI_THEME_OPTIONS = exports.DF_UI_THEME_ITEM = void 0;
const _crRgba = (v, a) => `rgba(${v}, ${v}, ${v}, ${a})`;
const DF_BGC = "#5f5f5f";
const DF_C_BGC = "#4d4d4d";
const DF_SO_BGC = "#404040";
const DF_SI_C = "#f8f8ff";
const DF_SI_HF = _crRgba(255, 0.1);
const PALLETE_DARK = {
    'bgc': DF_BGC,
    'c-bgc': DF_C_BGC,
    'so-bgc': DF_SO_BGC,
    'si-c': DF_SI_C,
    'si-hf': DF_SI_HF
  },
  PALLETE_LIGHT = {
    'bgc': 'darkgrey',
    'c-bgc': '#ebf1f5',
    'so-bgc': '#dfe4e7',
    'si-c': '#303030',
    'si-hf': _crRgba(255, 0.4)
  },
  PALLETE_SAND = {
    'bgc': 'darkgrey',
    'c-bgc': '#e8e0cb',
    'so-bgc': '#c6bda5',
    'si-c': '#303030',
    'si-hf': _crRgba(255, 0.4)
  };
const UI_THEME_DARK_ID = 'DARK',
  UI_THEME_LIGHT_ID = 'LIGHT',
  UI_THEME_SAND_ID = 'SAND';
const UI_THEME_OPTIONS = exports.UI_THEME_OPTIONS = [{
  caption: 'Dark',
  value: UI_THEME_DARK_ID
}, {
  caption: 'Light',
  value: UI_THEME_LIGHT_ID
}, {
  caption: 'Sand',
  value: UI_THEME_SAND_ID
}];
const DF_UI_THEME_ITEM = exports.DF_UI_THEME_ITEM = UI_THEME_OPTIONS[0];
const HP_UI_THEME = {
  [UI_THEME_DARK_ID]: PALLETE_DARK,
  [UI_THEME_LIGHT_ID]: PALLETE_LIGHT,
  [UI_THEME_SAND_ID]: PALLETE_SAND
};
const CUSTOM_CSS_PROPERTY_CONFIGS = [["bgc", DF_BGC], ["c-bgc", DF_C_BGC], ["so-bgc", DF_SO_BGC], ["si-c", DF_SI_C], ["si-hf", DF_SI_HF]];
const _setStyleProperties = uiThemePallete => {
  const _style = document.body.style;
  CUSTOM_CSS_PROPERTY_CONFIGS.forEach(_ref => {
    let [propName, dfValue] = _ref;
    _style.setProperty(`--${propName}`, uiThemePallete[propName] || dfValue);
  });
};
let currentUiThemeId = DF_UI_THEME_ITEM.value;
const setUiTheme = uiThemeId => {
  const _nextUiThemePallete = HP_UI_THEME[uiThemeId];
  if (_nextUiThemePallete && currentUiThemeId !== uiThemeId) {
    _setStyleProperties(_nextUiThemePallete);
    currentUiThemeId = uiThemeId;
  }
};
exports.setUiTheme = setUiTheme;
//# sourceMappingURL=uiTheme.js.map