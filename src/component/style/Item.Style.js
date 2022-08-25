const styleConfig = {
  themeName: void 0,
  style: void 0,

  createStyle: (CSS_RULE) => {
    return {
      ITEM: {
        ...CSS_RULE.ITEM
      }
    }
  }
}

export default styleConfig
