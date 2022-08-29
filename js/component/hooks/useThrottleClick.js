"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var DF_TIMEOUT = 3000;

var useThrottleClick = function useThrottleClick(onClick, timeout, isEvent) {
  if (timeout === void 0) {
    timeout = DF_TIMEOUT;
  }

  if (isEvent === void 0) {
    isEvent = true;
  }

  var _refTimeStamp = (0, _uiApi.useRef)(null);

  return (0, _uiApi.useCallback)(function (event) {
    var _args = isEvent ? event : void 0;

    if (timeout === 0) {
      onClick(_args);
      return;
    }

    var _timeStampPrev = _refTimeStamp.current,
        timeStamp = event.timeStamp;

    if (_timeStampPrev == null || timeStamp - _timeStampPrev > timeout) {
      onClick(_args);
      _refTimeStamp.current = timeStamp;
    }
  }, [isEvent, timeout, onClick]);
};

var _default = useThrottleClick;
exports["default"] = _default;
//# sourceMappingURL=useThrottleClick.js.map