
const styleConfig = {
  themeName: undefined,
  style: undefined,

  createStyle: (CSS_RULE) => {
    return {
      HEADER: {
        ...CSS_RULE.BG
      }
    }
  }
}

export default styleConfig
