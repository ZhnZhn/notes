"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _crStyle = _interopRequireDefault(require("../crStyle"));

describe('crStyle', function () {
  test('should create className for two arguments', function () {
    expect((0, _crStyle["default"])(void 0, void 0)).toBe(undefined);
    expect((0, _crStyle["default"])({
      top: 0
    }, void 0)).toEqual({
      top: 0
    });
    expect((0, _crStyle["default"])(void 0, {
      left: 10
    })).toEqual({
      left: 10
    });
    expect((0, _crStyle["default"])({
      top: 0
    }, {
      left: 10
    })).toEqual({
      top: 0,
      left: 10
    });
    expect((0, _crStyle["default"])([true, {
      top: 0
    }], {
      left: 10
    })).toEqual({
      top: 0,
      left: 10
    });
    expect((0, _crStyle["default"])([false, {
      top: 0
    }], {
      left: 10
    })).toEqual({
      left: 10
    });
    expect((0, _crStyle["default"])([true, {
      top: 0
    }], void 0)).toEqual({
      top: 0
    });
    expect((0, _crStyle["default"])([false, {
      top: 0
    }], void 0)).toBe(undefined);
    expect((0, _crStyle["default"])({
      top: 0
    }, [true, {
      left: 10
    }])).toEqual({
      top: 0,
      left: 10
    });
    expect((0, _crStyle["default"])({
      top: 0
    }, [false, {
      left: 10
    }])).toEqual({
      top: 0
    });
    expect((0, _crStyle["default"])(void 0, [true, {
      left: 10
    }])).toEqual({
      left: 10
    });
    expect((0, _crStyle["default"])(void 0, [false, {
      left: 10
    }])).toBe(undefined);
    expect((0, _crStyle["default"])([true, {
      top: 0
    }], [true, {
      left: 10
    }])).toEqual({
      top: 0,
      left: 10
    });
    expect((0, _crStyle["default"])([false, {
      top: 0
    }], [true, {
      left: 10
    }])).toEqual({
      left: 10
    });
    expect((0, _crStyle["default"])([false, {
      top: 0
    }], [false, {
      left: 10
    }])).toBe(undefined);
    expect((0, _crStyle["default"])([true, {
      top: 0
    }], [false, {
      left: 10
    }])).toEqual({
      top: 0
    });
    expect((0, _crStyle["default"])([true, void 0], [true, void 0])).toBe(undefined);
    expect((0, _crStyle["default"])([true, {
      top: 0
    }], [true, void 0])).toEqual({
      top: 0
    });
    expect((0, _crStyle["default"])([false, {
      top: 0
    }], [true, void 0])).toBe(undefined);
    expect((0, _crStyle["default"])([true, void 0], [true, {
      left: 10
    }])).toEqual({
      left: 10
    });
    expect((0, _crStyle["default"])([true, void 0], [false, {
      left: 10
    }])).toBe(undefined);
  });
});
//# sourceMappingURL=crStyle.test.js.map