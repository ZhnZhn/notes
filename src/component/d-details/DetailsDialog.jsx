import { Component } from 'react'

import withTheme from '../hoc/withTheme'
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

class DetailsDialog extends Component {

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props
      && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  }


  render(){
    const {
      isShow,
      theme,
      data,
      dispatch,
      onClose
    } = this.props
    , _caption = _crCaption(data)
    , TS = theme.createStyle(styleConfig);

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
}

export default withTheme(DetailsDialog)
