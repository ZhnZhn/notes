// @flow
const _fIsTypeof = (
  strType /*: string*/
) => (
  value /*: mixed*/
) /*: boolean*/ => typeof value === strType;

export const isBool = _fIsTypeof("boolean")
export const isFn = _fIsTypeof("function")
export const isStr = _fIsTypeof("string")

const isTypeNumber = _fIsTypeof("number")
export const isNumber = (
  value
) => isTypeNumber(value)
  && value - value === 0

export const isObj = (
  value /*: mixed*/
) /*: boolean*/ => typeof value === "object"
  && value !== null

export const isArr = Array.isArray

export const isArrEmpty = (
  arr /*: mixed*/
) /*: boolean*/ => !isArr(arr)
  || arr.length === 0

  const _hasOwnProperty = Object.prototype.hasOwnProperty
  export const hasOwnPropertySafe = (
    item,
    propName
  ) => isObj(item)
   && isStr(propName)
   && _hasOwnProperty.call(item, propName)
