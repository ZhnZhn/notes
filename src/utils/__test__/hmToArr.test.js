import fn from '../hmToArr'

describe('hmToArr', ()=>{
  test('should return arr with property values from obj', ()=>{
    expect(fn({ 'a1': { id: 'a1' }}))
      .toEqual([{ id: 'a1' }])
  })
})
