import { forwardRef } from 'react';

import useThrottleClick from '../hooks/useThrottleClick';

import crCn from '../zhn-utils/crCn';
import crStyle from '../zhn-utils/crStyle';
import CaptionInput from './CaptionInput';

const CL_BT_FLAT = 'bt-flat'
, CL_BT_FLAT_DIV = 'bt-flat__div'
, CL_BT_FLAT_SPAN = 'bt-flat__span'
, S_PRIMARY = { color: '#607d8b' }

const _crTitle = (title, accessKey) => accessKey
  ? `${title} [${accessKey}]`
  : title;

const FlatButton = forwardRef(({
  timeout,
  className,
  style,
  clDiv=CL_BT_FLAT_DIV,
  clCaption,
  isPrimary,
  title='',
  caption,
  accessKey,
  children,
  isEvent,
  onClick
}, ref) => {
  const _hClick = useThrottleClick(onClick, timeout, isEvent)
  , _className = crCn(CL_BT_FLAT, className)
  , _clCaption = crCn(CL_BT_FLAT_SPAN, clCaption)
  , _style = crStyle(style, [isPrimary, S_PRIMARY])
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
});

export default FlatButton
