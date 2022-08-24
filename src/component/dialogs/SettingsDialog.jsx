import {
  useCallback
} from '../uiApi';

import memoIsShow from '../hoc/memoIsShow';

import useTheme from '../hooks/useTheme';
import styleConfig from '../style/Dialog.Style';
import { setUiTheme } from '../../flux/app/reducer';

import ModalDialog from '../zhn-ch/ModalDialog';
import InputSelect from '../zhn-m-input/InputSelect';

const CL = 'md-settings';

const _themeOptions = [
  { caption: "Dark", value: "DARK" },
  { caption: "Light", value: "WHITE" },
  { caption: "Sand", value: "SAND" }
]
, DF_THEME = _themeOptions[0];

const SettingsDialog = memoIsShow(({
  isShow,
  dispatch,
  onClose
}) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  const _selectTheme = useCallback(({ value }) => {
      dispatch(setUiTheme({ uiTheme: value }))
  }, [])
  // dispatch
  /*eslint-enable react-hooks/exhaustive-deps */
  , TS = useTheme(styleConfig);

  return (
    <ModalDialog
      isShow={isShow}
      className={CL}
      style={TS.DIALOG}
      caption="User Settings"
      onClose={onClose}
    >
      <InputSelect
        styleConfig={TS.SELECT}
        caption="UI Theme (Default: Dark)"
        initialItem={DF_THEME}
        options={_themeOptions}
        onSelect={_selectTheme}
      />
    </ModalDialog>
  );
})

export default SettingsDialog
