//const DF_BGC = "#808080";
const DF_BGC = "#5f5f5f"
const DF_C_BGC = "#4d4d4d";

const PALLETE_DARK = {
  'bgc': DF_BGC,
  'c-bgc': DF_C_BGC
}
, PALLETE_LIGHT = {
  'bgc': 'darkgrey',
  'c-bgc': '#ebf1f5'
}
, PALLETE_SAND = {
  'bgc': 'darkgrey',
  'c-bgc': '#e8e0cb'
};

const UI_THEME_DARK_ID = 'DARK'
, UI_THEME_LIGHT_ID = 'LIGHT'
, UI_THEME_SAND_ID = 'SAND';

export const UI_THEME_OPTIONS = [
  { caption: 'Dark', value: UI_THEME_DARK_ID },
  { caption: 'Light', value: UI_THEME_LIGHT_ID },
  { caption: 'Sand', value: UI_THEME_SAND_ID }
]
export const DF_UI_THEME_ITEM = UI_THEME_OPTIONS[0]

const HP_UI_THEME = {
  [UI_THEME_DARK_ID]: PALLETE_DARK,
  [UI_THEME_LIGHT_ID]: PALLETE_LIGHT,
  [UI_THEME_SAND_ID]: PALLETE_SAND
};

const CUSTOM_CSS_PROPERTY_CONFIGS = [
  ["bgc", DF_BGC],
  ["c-bgc", DF_C_BGC]
]

const _setStyleProperties = (uiThemePallete) => {
  const _style = document.body.style;
  CUSTOM_CSS_PROPERTY_CONFIGS.forEach(([propName, dfValue]) => {
    _style.setProperty(
       `--${propName}`,
       uiThemePallete[propName] || dfValue
    )
  })
};

let currentUiThemeId = DF_UI_THEME_ITEM.value;
export const setUiTheme = (
  uiThemeId
) => {
  const _nextUiThemePallete = HP_UI_THEME[uiThemeId];
  if (_nextUiThemePallete && currentUiThemeId !== uiThemeId) {
    _setStyleProperties(_nextUiThemePallete)
    currentUiThemeId = uiThemeId
  }
}
