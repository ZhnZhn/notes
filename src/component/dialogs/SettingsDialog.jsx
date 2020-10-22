import { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from '../style/Dialog.Style'
import { setUiTheme } from '../../flux/app/actions'
import { sApp } from '../../flux/selectors'

import ModalDialog from '../zhn-ch/ModalDialog'
import InputSelect from '../zhn-m-input/InputSelect'

const CL = 'md-settings';

const DF_THEME = { caption: "Dark", value: "DARK" };
const _themeOptions = [
  { caption: "Dark", value: "DARK" },
  { caption: "Light", value: "WHITE" },
  { caption: "Sand", value: "SAND" }
];

const _crInitItem = (uiTheme) => {
  if (!uiTheme) {
    return DF_THEME;
  }
  const item = _themeOptions
    .find(item => item.value === uiTheme);
  if (!item) {
    return DF_THEME;
  }
  return { ...item };
}

class SettingsDialog extends Component {

  constructor(props){
    super()
    const uiTheme = sApp.uiTheme(props.store.getState())
    this.state = {
      initItem: _crInitItem(uiTheme)
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props
      && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  }

  _selectTheme = (item) => {
    const { theme, dispatch } = this.props;
    if (item.value !== theme.getThemeName()) {
      dispatch(setUiTheme(item.value))
      this.forceUpdate()
    }
  }

  render(){
    const {
      isShow,
      theme,
      onClose
    } = this.props
    , {
      initItem
    } = this.state
    , TS = theme.createStyle(styleConfig);

    return (
      <ModalDialog
        className={CL}
        style={TS.DIALOG}
        caption="User Settings"
        isShow={isShow}
        onClose={onClose}
      >
        <div>
          <InputSelect
            styleConfig={TS.SELECT}
            caption="UI Theme (Default: Dark)"
            initItem={initItem}
            options={_themeOptions}
            onSelect={this._selectTheme}
          />
        </div>
      </ModalDialog>
    );
  }
}

export default withTheme(SettingsDialog)
