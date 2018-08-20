import isArrEmpty from '../isArrEmpty'

describe('isArrEmpty', () => {

  test('should return true for empty array', () => {
    expect(isArrEmpty([])).toBe(true)
  })

  test('should return false for not empty array', () => {
    expect(isArrEmpty([1])).toBe(false)
    expect(isArrEmpty([{ }])).toBe(false)
    expect(isArrEmpty([{ id: 1 }])).toBe(false)
  })

  test('should return true for edge case', () => {
    expect(isArrEmpty({})).toBe(true)
    expect(isArrEmpty(null)).toBe(true)
    expect(isArrEmpty()).toBe(true)
    expect(isArrEmpty(1)).toBe(true)
    expect(isArrEmpty('str')).toBe(true)
  })
})
