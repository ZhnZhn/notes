const _fJoinBy2 = (
  strDelimeter
) => (
  str1,
  str2
) => [str1, str2]
  .filter(Boolean)
  .join(strDelimeter);

export const joinByBlank = _fJoinBy2(' ')
export const joinByColon = _fJoinBy2(': ')
