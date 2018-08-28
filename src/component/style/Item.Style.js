const styleConfig = {
  themeName: undefined,
  style: undefined,

  createStyle: (CSS_RULE) => {
    return {
      ITEM: {
        ...CSS_RULE.ITEM
      }
    }
  }
}

export default styleConfig
