import { useRef, useCallback } from '../uiApi';

const DF_TIMEOUT = 3000;

const useThrottleClick = (
  onClick,
  timeout=DF_TIMEOUT,
  isEvent=true
) => {
  const _refTimeStamp = useRef(null);
  return useCallback(event => {
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
  }, [isEvent, timeout, onClick]);
};

export default useThrottleClick
