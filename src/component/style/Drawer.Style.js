const styleConfig = {
  themeName: undefined,
  style: undefined,

  createStyle: (CSS_RULE) => {
    return {
      ASIDE: {
        ...CSS_RULE.BG
      }
    }
  }
}

export default styleConfig
