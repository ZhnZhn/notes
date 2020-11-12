import { memo } from 'react'

import useTheme from '../hooks/useTheme'
import styleConfig from '../style/Dialog.Style'

import ModalDialog from '../zhn-ch/ModalDialog'
import TabPane from '../zhn-tab/TabPane'
import Tab from '../zhn-tab/Tab'

import TabDescr from './TabDescr'
import TabLabels from './TabLabels'

const CL = {
  DIALOG: 'md-details'
};

const S = {
  CAPTION: {
    marginBottom: 0
  }
};

const _crCaption = (note) => {
  const { title='' } = note
  , _title = title.substring(0, 12)
  , _sufix = title.length > _title.length
     ? '...'
     : '';
  return `Details: ${_title}${_sufix}`;
};

const DetailsDialog = ({
  isShow,
  data,
  dispatch,
  onClose
}) => {
  const TS = useTheme(styleConfig)
  , _caption = _crCaption(data);

  return (
      <ModalDialog
        className={CL.DIALOG}
        style={TS.DIALOG}
        captionStyle={S.CAPTION}
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
}

const _areEqualProps = (prevProps, nextProps) =>
  prevProps.isShow === nextProps.isShow;


export default memo(DetailsDialog, _areEqualProps)
