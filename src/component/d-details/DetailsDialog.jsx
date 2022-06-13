import memoIsShow from '../hoc/memoIsShow'

import useTheme from '../hooks/useTheme'
import styleConfig from '../style/Dialog.Style'

import ModalDialog from '../zhn-ch/ModalDialog'
import TabPane from '../zhn-tab/TabPane'
import Tab from '../zhn-tab/Tab'

import TabDescr from './TabDescr'
import TabLabels from './TabLabels'

const CL_DIALOG = 'md-details'
, S_CAPTION = { marginBottom: 0 }

const _crCaption = (note) => {
  const { title='' } = note
  , _title = title.substring(0, 12)
  , _sufix = title.length > _title.length
     ? '...'
     : '';
  return `Details: ${_title}${_sufix}`;
};

const DetailsDialog = memoIsShow(({
  isShow,
  data,
  dispatch,
  onClose
}) => {
  const TS = useTheme(styleConfig)
  , _caption = _crCaption(data);

  return (
      <ModalDialog
        className={CL_DIALOG}
        style={TS.DIALOG}
        captionStyle={S_CAPTION}
        caption={_caption}
        isShow={isShow}
        withoutClose={true}
        onClose={onClose}
      >
        <TabPane width="100%" key={data.id}>
          <Tab title="Descr">
            <TabDescr
              note={data}
              dispatch={dispatch}
              onClose={onClose}
            />
          </Tab>
          <Tab title="Labels">
            <TabLabels
              note={data}
              dispatch={dispatch}
              onClose={onClose}
            />
          </Tab>
       </TabPane>
      </ModalDialog>
    );
})

export default DetailsDialog
