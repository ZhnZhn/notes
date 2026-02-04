//import { PropTypes } from 'prop-types'
import {
  useRef,
  useCallback,
  useEffect,
  getRefValue,
  focusRefElement
} from '../uiApi';

import useKeyEscape from '../hooks/useKeyEscape';
import crCn from '../zhn-utils/crCn';

import DialogCaption from './DialogCaption';
import FlatButton from '../zhn-m/FlatButton';

import {
  CL_MODAL_DIALOG,
  CL_MD_ACTIONS,
  CL_SHOWING
} from '../style/CL';

const S_SHOW = { display: 'block' }
, S_HIDE = { display: 'none' };

const DialogButtons = ({
  buttons,
  refBtClose,
  withoutClose,
  onClose
}) => (
  <div className={CL_MD_ACTIONS}>
    {buttons}
    { !withoutClose &&
       <FlatButton
         refEl={refBtClose}
         caption="Close"
         timeout={0}
         onClick={onClose}
       />
    }
  </div>
);

const useFocusBtClose = (
  isShow,
  isFocusClose
) => {
  const _refBt = useRef()
  , _refPrevFocused = useRef()
  , _refIsShowPrev = useRef()
  , focus = useCallback(() => {
      _refPrevFocused.current = document.activeElement
      if (isFocusClose) {
        focusRefElement(_refBt)
      }
  }, [isFocusClose])
  , focusPrev = useCallback(()=>{
      focusRefElement(_refPrevFocused)
      _refPrevFocused.current = null
  }, []);

  useEffect(()=>{
    const _isPrevShow = getRefValue(_refIsShowPrev);
    if (isShow && !_isPrevShow) {
      focus()
    } else if (!isShow && _isPrevShow) {
      focusPrev()
    }
    _refIsShowPrev.current = isShow
  }, [isShow, focus, focusPrev])

  return _refBt;
};

const ModalDialog = ({
  className='',
  style,
  isShow,
  isWithButton=true,
  isFocusClose=true,
  caption,
  captionStyle,
  children,
  commandButtons,
  withoutClose,
  onClose
}) => {
  const _refBtClose = useFocusBtClose(
     isShow,
     isFocusClose
   )
  , _hClickDialog = useCallback(evt => {
    evt.stopPropagation()
  }, [])
  , _hKeyDown = useKeyEscape(onClose)
  , _className = crCn(`${CL_MODAL_DIALOG} ${className}`, [isShow, CL_SHOWING])
  , _style = isShow ? S_SHOW : S_HIDE;


  return (
    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    <div
       role="dialog"
       aria-label={caption}
       aria-hidden={!isShow}
       className={_className}
       style={{...style, ..._style}}
       onClick={_hClickDialog}
       onKeyDown={_hKeyDown}
    >
   {/*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/}
       <DialogCaption
          rootStyle={captionStyle}
          caption={caption}
          onClose={onClose}
       />
       <div>
         {children}
       </div>
       { isWithButton && <DialogButtons
           buttons={commandButtons}
           refBtClose={_refBtClose}
           withoutClose={withoutClose}
           onClose={onClose}
         /> }
   </div>
  );
}

/*
ModalDialog.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  caption: PropTypes.string,
  captionStyle: PropTypes.object,
  isShow: PropTypes.bool,
  isWithButton: PropTypes.bool,
  withoutClose: PropTypes.bool,
  isFocusClose: PropTypes.bool,
  commandButtons: PropTypes.arrayOf(PropTypes.element),
  onClose: PropTypes.func
}
*/

export default ModalDialog
