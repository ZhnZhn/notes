import {
  useCallback
} from '../uiApi';

import {
  UI_THEME_OPTIONS,
  DF_UI_THEME_ITEM,
  setUiTheme
} from '../uiTheme';

import memoIsShow from '../hoc/memoIsShow';
import { setUiTheme as setFluxUiTheme } from '../../flux/app/reducer';

import ModalDialog from '../zhn-ch/ModalDialog';
import InputSelect from '../zhn-m-input/InputSelect';

const CL_MD_SETTINGS = 'md-settings'
, S_UI_THEME = {
  width: 250
};

const SettingsDialog = memoIsShow(({
  isShow,
  dispatch,
  onClose
}) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  const _selectTheme = useCallback(({ value }) => {
      setUiTheme(value);
      dispatch(setFluxUiTheme({ uiTheme: value }))
  }, [])
  // dispatch
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <ModalDialog
      isShow={isShow}
      className={CL_MD_SETTINGS}
      caption="User Settings"
      onClose={onClose}
    >
      <InputSelect
        style={S_UI_THEME}
        caption="UI Theme (Default: Dark)"
        initItem={DF_UI_THEME_ITEM}
        options={UI_THEME_OPTIONS}
        onSelect={_selectTheme}
      />
    </ModalDialog>
  );
})

export default SettingsDialog
