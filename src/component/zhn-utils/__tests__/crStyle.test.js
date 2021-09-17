import crStyle from '../crStyle'

describe('crStyle', ()=>{
  test('should create className for two arguments', ()=>{
    expect(crStyle(void 0, void 0)).toBe(undefined)
    expect(crStyle({top:0}, void 0)).toEqual({top: 0})
    expect(crStyle(void 0, {left: 10})).toEqual({left: 10})
    expect(crStyle({top: 0}, {left: 10})).toEqual({top: 0, left: 10})

    expect(crStyle([true, {top: 0}], {left: 10})).toEqual({top: 0, left: 10})
    expect(crStyle([false, {top: 0}], {left: 10})).toEqual({left : 10})
    expect(crStyle([true, {top: 0}], void 0)).toEqual({top: 0})
    expect(crStyle([false, {top: 0}], void 0)).toBe(undefined)

    expect(crStyle({top: 0}, [true, {left: 10}])).toEqual({top: 0, left: 10})
    expect(crStyle({top: 0}, [false, {left: 10}])).toEqual({top: 0})
    expect(crStyle(void 0, [true, {left: 10}])).toEqual({left: 10})
    expect(crStyle(void 0, [false, {left: 10}])).toBe(undefined)

    expect(crStyle([true, {top: 0}], [true, {left: 10}])).toEqual({top: 0, left: 10})
    expect(crStyle([false, {top: 0}], [true, {left: 10}])).toEqual({left: 10})
    expect(crStyle([false, {top: 0}], [false, {left: 10}])).toBe(undefined)
    expect(crStyle([true, {top: 0}], [false, {left: 10}])).toEqual({top: 0})

    expect(crStyle([true, void 0], [true, void 0])).toBe(undefined)
    expect(crStyle([true, {top: 0}], [true, void 0])).toEqual({top: 0})
    expect(crStyle([false, {top: 0}], [true, void 0])).toBe(undefined)
    expect(crStyle([true, void 0], [true, {left: 10}])).toEqual({left: 10})
    expect(crStyle([true, void 0], [false, {left: 10}])).toBe(undefined)
  })
})
