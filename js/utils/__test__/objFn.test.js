"use strict";

var _objFn = require("../objFn");
describe('crObjHm', () => {
  const fn = _objFn.crObjHm;
  test('should create object with null prototype', () => {
    const hm = fn({
      a: 1
    });
    expect(hm.a).toBe(1);
    expect(hm.__proto__).toBe(void 0);
  });
});
//# sourceMappingURL=objFn.test.js.map