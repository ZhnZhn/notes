import {
  crObjHm
} from '../objFn';

describe('crObjHm', ()=>{
  const fn = crObjHm;
  test('should create object with null prototype', ()=>{
    const hm = fn({ a: 1 })

    expect(hm.a).toBe(1)
    expect(hm.__proto__).toBe(void 0)
  })
})
