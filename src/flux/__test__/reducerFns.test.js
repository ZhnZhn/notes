import fns from '../reducerFns'

const {
  removeProp,
  filterBy,
  filterByProp,
  setInObj
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
    const state = { a: 'a', b: 'b' }
    , newState = removeProp(state, 'a');
    expect(newState).toEqual({b: 'b'})
    expect(state===newState).toBe(false)
  })
})

describe('reducerFn filterBy', ()=>{
  test('should filter array of string by str', ()=>{
    const state = ['a', 'b']
    , newState = filterBy(state, 'a');
    expect(newState).toEqual(['b'])
    expect(state===newState).toBe(false)
  })
  test('should return same in edge case', returnSame)
})

describe('reducerFn filterByProp',()=>{
  test('should filter arr with obj by propValue with default propName id', ()=>{
    const state = [{ id: '1', m: 'm1'},{ id: '2', m: 'm2'}]
    , newState = filterByProp(state, '1');
    expect(newState).toEqual([{ id: '2', m: 'm2'}])
    expect(state===newState).toBe(false)
  })

  test('should filter arr with obj by propValue and propName', ()=>{
    const state = [{ id: '1', m: 'm1'},{ id: '2', m: 'm2'}]
    , newState = filterByProp(state, 'm1', 'm');
    expect(newState).toEqual([{ id: '2', m: 'm2'}])
    expect(state===newState).toBe(false)
  })

  test('should return same in edge case', returnSame)
})

describe('setInObj', ()=>{
  test('should set in state by key object', ()=>{
    const state = {}
    , newState = setInObj(state, 'a', {title: 'a'});
    expect(newState).toEqual({
      a: {title: 'a'}
    })
    expect(state===newState).toBe(false)
  })
})
