import {
  useState,
  useCallback
} from '../uiApi'

import memoIsShow from '../hoc/memoIsShow'

import useTheme from '../hooks/useTheme'
import styleConfig from '../style/Dialog.Style'
import { setUiTheme } from '../../flux/app/reducer'
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

const SettingsDialog = memoIsShow(({
  isShow,
  store,
  dispatch,
  onClose
}) => {

  const [initItem, setInitItem] = useState(() => _crInitItem(sApp.uiTheme(store.getState())))
  , TS = useTheme(styleConfig)
  , _selectTheme = useCallback(({ value }) => {
    if (value !== initItem) {
      dispatch(setUiTheme({ uiTheme: value }))
      setInitItem(value)
    }
  }, []);

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
          onSelect={_selectTheme}
        />
      </div>
    </ModalDialog>
  );
})

export default SettingsDialog
