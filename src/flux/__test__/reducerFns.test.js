import fns from '../reducerFns'

const {
  removeProp,
  filterBy
} = fns;

describe('reducerFn removeProp', ()=>{
  test('should remove prop from obj by prop name', ()=>{
    expect(removeProp({
      a: 'a',
      b: 'b'
    }, 'a')).toEqual({
      b: 'b'
    })
  })
})

describe('reducerFn filterBy', ()=>{
  test('should filter array of string by str', ()=>{
    expect(filterBy([
      'a', 'b'
    ], 'a')).toEqual([
      'b'
    ])
  })
  test('should return same in edge case', ()=>{
    expect(filterBy(undefined, 'a')).toBe(undefined)
    expect(filterBy(null, 'a')).toBe(null)
    expect(filterBy(true, 'a')).toBe(true)
    expect(filterBy('abc', 'a')).toBe('abc')
    expect(filterBy({}, 'a')).toEqual({})
  })
})
