"use strict";

var _styleFn = require("../styleFn");
describe('crStyle', () => {
  test('should create className for two arguments', () => {
    expect((0, _styleFn.crStyle)(void 0, void 0)).toBe(undefined);
    expect((0, _styleFn.crStyle)({
      top: 0
    }, void 0)).toEqual({
      top: 0
    });
    expect((0, _styleFn.crStyle)(void 0, {
      left: 10
    })).toEqual({
      left: 10
    });
    expect((0, _styleFn.crStyle)({
      top: 0
    }, {
      left: 10
    })).toEqual({
      top: 0,
      left: 10
    });
    expect((0, _styleFn.crStyle)([true, {
      top: 0
    }], {
      left: 10
    })).toEqual({
      top: 0,
      left: 10
    });
    expect((0, _styleFn.crStyle)([false, {
      top: 0
    }], {
      left: 10
    })).toEqual({
      left: 10
    });
    expect((0, _styleFn.crStyle)([true, {
      top: 0
    }], void 0)).toEqual({
      top: 0
    });
    expect((0, _styleFn.crStyle)([false, {
      top: 0
    }], void 0)).toBe(undefined);
    expect((0, _styleFn.crStyle)({
      top: 0
    }, [true, {
      left: 10
    }])).toEqual({
      top: 0,
      left: 10
    });
    expect((0, _styleFn.crStyle)({
      top: 0
    }, [false, {
      left: 10
    }])).toEqual({
      top: 0
    });
    expect((0, _styleFn.crStyle)(void 0, [true, {
      left: 10
    }])).toEqual({
      left: 10
    });
    expect((0, _styleFn.crStyle)(void 0, [false, {
      left: 10
    }])).toBe(undefined);
    expect((0, _styleFn.crStyle)([true, {
      top: 0
    }], [true, {
      left: 10
    }])).toEqual({
      top: 0,
      left: 10
    });
    expect((0, _styleFn.crStyle)([false, {
      top: 0
    }], [true, {
      left: 10
    }])).toEqual({
      left: 10
    });
    expect((0, _styleFn.crStyle)([false, {
      top: 0
    }], [false, {
      left: 10
    }])).toBe(undefined);
    expect((0, _styleFn.crStyle)([true, {
      top: 0
    }], [false, {
      left: 10
    }])).toEqual({
      top: 0
    });
    expect((0, _styleFn.crStyle)([true, void 0], [true, void 0])).toBe(undefined);
    expect((0, _styleFn.crStyle)([true, {
      top: 0
    }], [true, void 0])).toEqual({
      top: 0
    });
    expect((0, _styleFn.crStyle)([false, {
      top: 0
    }], [true, void 0])).toBe(undefined);
    expect((0, _styleFn.crStyle)([true, void 0], [true, {
      left: 10
    }])).toEqual({
      left: 10
    });
    expect((0, _styleFn.crStyle)([true, void 0], [false, {
      left: 10
    }])).toBe(undefined);
  });
});
//# sourceMappingURL=crStyle.test.js.map