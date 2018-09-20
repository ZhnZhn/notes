import React, { Component } from 'react'
//import PropTypes from 'prop-types'

import withTheme from '../hoc/withTheme'
import styleConfig from '../style/Dialog.Style'

import Router from '../dialogs/modalRouter'
import WrapperModalDialog from '../zhn-ch/WrapperModalDialog'

class WrapperContainer extends Component {
  /*
  static propTypes = {
    store: PropTypes.shape({
      subscribe: PropTypes.func
    })
  }
  */

  state = {
    isShow : false,
    inits : {},
    shows : {},
    data : {},
    dialogs : [],
    currentDialog : null
  }

  componentDidMount(){
    this.unsubscribe = this.props.store
      .subscribe(this._onStore);
  }
  componentWillUnmount(){
    this.unsubscribe();
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.state.currentDialog === nextState.currentDialog) {
      return false;
    }
    return true;
  }

  _onStore = () => {
    const { store } = this.props
        , { modal={} } = store.getState()
        , { id:type, data:dialogProps={} } = modal;
    if (type && this.modal !== modal) {
      this.modal = modal
      this.setState(prevState => {
        const { inits, shows, data, dialogs } = prevState;
        if (!inits[type]){
          dialogs.push({ type: type, comp: Router.getDialog(type) })
          inits[type] = true
          shows[type] = true
          data[type] = dialogProps
          return {
            isShow: true,
            currentDialog: type,
            shows,
            data,
            dialogs
          };
        } else {
          shows[type] = true
          data[type] = dialogProps
          return {
            isShow: true,
            currentDialog: type,
            shows,
            data
          };
        }
      })
    }
  }

  _hClose = (type) => {
    this.setState(prevState => {
      prevState.shows[type] = false
      return {
        isShow: false,
        currentDialog: null,
        shows: prevState.shows
      };
    })
  }

  _renderDialogs = () => {
    const { store, theme } = this.props;
    const { shows, data, dialogs } = this.state;
    return dialogs.map(dialog => {
      const { type, comp } = dialog;      
      return React.createElement(comp, {
        key: type,
        isShow: shows[type],
        data: data[type],
        onClose: this._hClose.bind(null, type),
        store: store,
        dispatch: store.dispatch,
        TS: theme.createStyle(styleConfig)
      });
    });
  }

  render(){
    const {
      isShow,
      currentDialog
    } = this.state;
    return (
      <WrapperModalDialog
        isShow={isShow}
        onClose={this._hClose.bind(null, currentDialog)}
      >
        {this._renderDialogs()}
     </WrapperModalDialog>
   );
  }
}

export default withTheme(WrapperContainer)
