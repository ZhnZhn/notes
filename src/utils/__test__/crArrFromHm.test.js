import crArrFromHm from '../crArrFromHm';

describe('crArrFromHm', ()=>{
  const fn = crArrFromHm;
  test('should return array with property values from hm object', ()=>{
    expect(fn({
      a1: { id: 'a1' },
      a2: { id: 'a2' }
    }))
    .toEqual([
      { id: 'a1' },
      { id: 'a2' }
    ])
  })
})
