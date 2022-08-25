const styleConfig = {
  themeName: void 0,
  style: void 0,

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
