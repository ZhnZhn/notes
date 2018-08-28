const styleConfig = {
  themeName: undefined,
  style: undefined,

  createStyle: (CSS_RULE) => {
    return {
      DIALOG: {
        ...CSS_RULE.BG
      },
      SELECT: {
        MODAL_PANE: {
          ...CSS_RULE.BG,
        }
      }
    }
  }
}

export default styleConfig
