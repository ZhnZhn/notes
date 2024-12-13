//import PropTypes from 'prop-types'
import {
  memo,
  useRef,
  useState,
  useCallback,
  useEffect,
  getRefValue,
  setRefValue
} from "../uiApi";

import useTheme from "../hooks/useTheme";
import styleConfig from "../style/Dialog.Style";

import { sApp } from "../../flux/selectors";

import Router from "../dialogs/modalRouter";
import WrapperModalDialog from "../zhn-ch/WrapperModalDialog";

const DialogStack = ({
  TS,
  store,
  shows,
  data,
  dialogs,
  onClose
}) => dialogs.map(dialog => {
  const {
    type,
    comp:DialogComp
  } = dialog;
  return (<DialogComp
    key={type}
    TS={TS}
    isShow={shows[type]}
    data={data[type]}
    store={store}
    dispatch={store.dispatch}
    onClose={onClose.bind(null, type)}
  />);
});

const WrapperContainer = memo(({
  store
}) => {
  const TS = useTheme(styleConfig)
  , _refModal = useRef()
  , [
    state,
    setState
  ] = useState({
     isShow: false,
     currentDialog: null,
     dialogs: [],
     inits: {},
     shows: {},
     data: {}
  })
  , _hClose = useCallback(type => {
    setState(prevState => {
      prevState.shows[type] = false
      return {
        ...prevState,
        isShow: false,
        currentDialog: null,
        shows: prevState.shows
      };
    })
  }, [])

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const _onStore = () => {
      const modal = sApp.modal(store.getState())
      , {
        id:type,
        data:dialogProps={}
      } = modal
      , _modal = getRefValue(_refModal);
      if (type && _modal !== modal) {
        setRefValue(_refModal, modal)
        setState(prevState => {
          const {
            inits,
            shows,
            data,
            dialogs
          } = prevState;
          if (!inits[type]){
            dialogs.push({
              type,
              comp: Router.getDialog(type)
            })
            inits[type] = true
          }
          shows[type] = true
          data[type] = dialogProps
          return {
            isShow: true,
            currentDialog: type,
            shows,
            data,
            dialogs,
            inits
          };
        })
      }
    }
    return store.subscribe(_onStore);
  }, [])
  // store
  /*eslint-disable react-hooks/exhaustive-deps */

  const {
    isShow,
    currentDialog,
    shows,
    data,
    dialogs
  } = state;

  return (
    <WrapperModalDialog
      isShow={isShow}
      onClose={_hClose.bind(null, currentDialog)}
    >
      <DialogStack
        TS={TS}
        store={store}
        shows={shows}
        data={data}
        dialogs={dialogs}
        onClose={_hClose}
      />
   </WrapperModalDialog>
  );
})

/*
WrapperContainer.propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func
  })
}
*/

export default WrapperContainer
