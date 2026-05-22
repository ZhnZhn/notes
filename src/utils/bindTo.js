const FN_NOOP = () => {};

export const bindToArg = (
  fn,
  arg
) => (fn || FN_NOOP).bind(null, arg)
