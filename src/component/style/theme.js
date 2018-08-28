

const P_DARK = {
  BG_BODY: '#5f5f5f',
  BG: '#4d4d4d',
  BG_HEADER: '#3a6799',
  C_HEADER: '#8a8a8a'
};
const P_WHITE = {
  BG_BODY: '#d2d2d2',  
  BG: '#ebf1f5',
  BG_HEADER: 'rgb(0, 150, 200)',
  C_HEADER: '#4d4d4d'
};
const P_SAND = {
  BG_BODY: 'darkgrey',
  BG: '#e8e0cb',
  BG_HEADER: 'rgb(0, 150, 200)',
  C_HEADER: '#4d4d4d'
};

const CSS_RULE = {
  BG: {},
  ITEM: {}
};

const _assign = Object.assign;
const _setBodyBg = (conf, P) => {
  document.body.style.backgroundColor = P.BG_BODY
};
const _crBg = (conf, P) => {
  _assign(conf.BG, {
    backgroundColor: P.BG
  })
}
const _crItem = (conf, P) => {
  _assign(conf.ITEM, {
    backgroundColor: P.BG,
    border: `1px solid ${P.BG}`
  })
}

const _FN_STYLES = [
  _setBodyBg,
  _crBg,
  _crItem
];
const _setStyleTo = (conf, pallete) => {
  _FN_STYLES.forEach(fn => fn(conf, pallete))
};


export const THEME_NAME = {
  DEFAULT: 'DARK',
  DARK: 'DARK',
  WHITE: 'WHITE',
  SAND: 'SAND'
};
const THEME_CONFIG = {
  [THEME_NAME.DARK]: {
    pallete: P_DARK,
    clSuffix: ''
  },
  [THEME_NAME.WHITE]: {
    pallete: P_WHITE,
    clSuffix: '--white'
  },
  [THEME_NAME.SAND]: {
    pallete: P_SAND,
    clSuffix: '--sand'
  }
};

const CL_PROPS = {};

const _setClassNameTo = (suffix='') => {
  Object.keys(CL_PROPS).forEach(key => {
    CSS_RULE[key] = CL_PROPS[key] + suffix
  })
}

const _setTheme = (themeName) => {
  const config = THEME_CONFIG[themeName];
  const { clSuffix, pallete } = config;
  _setClassNameTo(clSuffix)
  _setStyleTo(CSS_RULE, pallete)
}

const theme = {
  themeName: THEME_NAME.DEFAULT,
  _init(){
    this.setThemeName(THEME_NAME.DEFAULT)
  },
  getThemeName(){
    return this.themeName;
  },
  setThemeName(themeName){
    this.themeName = THEME_NAME[themeName]
      || THEME_NAME.DEFAULT;
    _setTheme(this.themeName)
  },
  createStyle(config){
     if (this.themeName !== config.themeName){
       config.style = config.createStyle(CSS_RULE, this.themeName)
       config.themeName = this.themeName
     }
     return config.style;
  }
};

theme._init()

export default theme
