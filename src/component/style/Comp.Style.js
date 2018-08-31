const styleConfig = {
  themeName: undefined,
  style: undefined,

  createStyle: (CSS_RULE) => {
    return {
      COMP: {
        ...CSS_RULE.BG
      }
    }
  }
}

export default styleConfig
