import fns from '../reducerFns'

const {
  removeProp,
  filterBy,
  filterByProp
} = fns;

const returnSame = ()=>{
  expect(filterBy(undefined, 'a')).toBe(undefined)
  expect(filterBy(null, 'a')).toBe(null)
  expect(filterBy(true, 'a')).toBe(true)
  expect(filterBy('abc', 'a')).toBe('abc')
  expect(filterBy({}, 'a')).toEqual({})
};

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
  test('should return same in edge case', returnSame)
})

describe('reducerFn filterByProp',()=>{
  test('should filter arr with obj by propValue with default propName id', ()=>{
    expect(
      filterByProp(
        [{ id: '1', m: 'm1'},{ id: '2', m: 'm2'}], '1'
      )
    ).toEqual([{ id: '2', m: 'm2'}])
  })

  test('should filter arr with obj by propValue and propName', ()=>{
    expect(
      filterByProp(
        [{ id: '1', m: 'm1'},{ id: '2', m: 'm2'}], 'm1', 'm'
      )
    ).toEqual([{ id: '2', m: 'm2'}])
  })

  test('should return same in edge case', returnSame)
})
