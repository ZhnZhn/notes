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
  value /*: unknown */
) => isTypeNumber(value)
  && value - value === 0

export const isObj = (
  value /*: mixed*/
) /*: boolean*/ => typeof value === "object"
  && value !== null

export const isArr = Array.isArray

export const isArrEmpty = (
  arr /*: unknown */
) /*: boolean*/ => !isArr(arr)
  || arr.length === 0

const _hasOwnProperty = Object.prototype.hasOwnProperty
export const hasOwnPropertySafe = (
 item /*: unknown */,
 propName /*: string */
) => isObj(item)
  && isStr(propName)
  && _hasOwnProperty.call(item, propName)
