import { forwardRef, useRef, useCallback } from 'react';

import crCn from '../zhn-utils/crCn';
import crStyle from '../zhn-utils/crStyle';
import CaptionInput from './CaptionInput';

const CL = {
  BT: 'bt-flat',
  BT_DIV: 'bt-flat__div',
  BT_SPAN: 'bt-flat__span'
};
const S = {
  PRIMARY: {
    color: '#607d8b'
  }
};

const _crTitle = (title, accessKey) => accessKey
  ? `${title} [${accessKey}]`
  : title;

const FlatButton = forwardRef(({
  timeout=3000,
  className,
  style,
  clDiv=CL.BT_DIV,
  clCaption,
  isPrimary,
  title='',
  caption,
  accessKey,
  children,
  isEvent=true,
  onClick
}, ref) => {
  const _refTimeStamp = useRef(null)
  , _hClick = useCallback(event => {
    const _args = isEvent ? event : void 0;
    if (timeout === 0) {
      onClick(_args)
      return;
    }
    const _timeStampPrev = _refTimeStamp.current
    , { timeStamp } = event;
    if (_timeStampPrev == null
        || timeStamp - _timeStampPrev > timeout) {
      onClick(_args)
      _refTimeStamp.current = timeStamp
    }
  }, [isEvent, timeout, onClick])
  , _className = crCn(CL.BT, className)
  , _clCaption = crCn(CL.BT_SPAN, clCaption)
  , _style = crStyle(style, [isPrimary, S.PRIMARY])
  , _title = _crTitle(title, accessKey);
  return (
    <button
      ref={ref}
      className={_className}
      style={_style}
      accessKey={accessKey}
      title={_title}
      onClick={_hClick}
    >
      <div className={clDiv}>
        <CaptionInput
          className={_clCaption}
          caption={caption}
          accessKey={accessKey}
        />
        {children}
      </div>
    </button>
  );
})

export default FlatButton
